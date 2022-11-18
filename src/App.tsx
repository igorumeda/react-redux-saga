import { useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, getUserRequest, RootState } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

function App() {
	const userState = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const [name, setName] = useState("igorumeda");

	const handleUser = () => {
		dispatch(getUserRequest(name));
	};

	return (
		<>
			<h1>User Request</h1>
			<p>
				<input
					type="text"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<button onClick={handleUser} disabled={!name.length}>
					{userState.loading ? "Buscando..." : "Buscar usuário"}
				</button>
			</p>

			{userState.user?.message ? (
				<p style={{ color: "red", fontWeight: "bold" }}>
					Usuário não encontrado
				</p>
			) : (
				""
			)}

			{userState.user?.name ? (
				<>
					<p>
						<b>Avatar: </b>
					</p>
					<p>
						<img
							src={userState.user?.avatar_url}
							alt=""
							style={{ width: "150px" }}
						/>
					</p>
					<p>
						<b>Nome: </b>
						{userState.user?.name}
					</p>
				</>
			) : (
				""
			)}
		</>
	);
}

export default App;

/* Link do momento atual do curso
 * https://youtu.be/7YoMyQ-jsBk?t=5769
 */
