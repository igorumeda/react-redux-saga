import { all, takeLatest, call, put, delay } from "redux-saga/effects";
import {
	getUserFailure,
	getUserSuccess,
	RequestProps,
	UserType,
} from "../../actions";
import * as types from "../../types";

let userApi: UserType;

const userRequest = async (name: string) => {
	try {
		const request = await fetch(`https://api.github.com/users/${name}`);
		const response = await request.json();
		userApi = response;
		return true;
	} catch (error) {
		return false;
	}
};

export function* userData(action: RequestProps) {
	try {
		yield delay(2000);
		yield call(userRequest, action.payload);
		yield put(getUserSuccess(userApi));
	} catch (error) {
		yield put(getUserFailure("Usuário não encontrado"));
	}
}

export default all([takeLatest(types.GET_USER_REQUEST, userData)]);
