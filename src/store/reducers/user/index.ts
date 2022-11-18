import { UserType, SuccessProps } from "../../actions";
import * as types from "../../types";

interface UserState {
	user?: UserType;
	loading?: boolean;
	error?: string;
}

const initialState: UserState = {
	user: {
		name: "",
		avatar_url: "",
	},
	loading: false,
	error: "",
};

export const userReducer = (
	state = initialState,
	action: SuccessProps
): UserState => {
	switch (action.type) {
		case types.GET_USER_REQUEST:
			return {
				loading: true,
				user: action.payload,
				error: "",
			};

		case types.GET_USER_SUCCESS:
			return {
				loading: false,
				user: action.payload,
				error: "",
			};

		case types.GET_USER_FAILURE:
			return {
				...state,
				loading: false,
				error: "",
			};

		default:
			return state;
	}
};
