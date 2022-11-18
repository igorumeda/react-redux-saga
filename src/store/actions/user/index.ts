import * as types from "../../types";

export type RequestProps = {
	type: string;
	payload: string;
};

export type SuccessProps = {
	type: string;
	payload: UserType;
};

export type FailureProps = {
	type: string;
	payload: string;
};

export type UserType = {
	name?: string;
	avatar_url?: string;
	message?: string;
};

export function getUserRequest(name: string): RequestProps {
	return {
		type: types.GET_USER_REQUEST,
		payload: name,
	};
}

export function getUserSuccess(user: UserType): SuccessProps {
	return {
		type: types.GET_USER_SUCCESS,
		payload: user,
	};
}

export function getUserFailure(error: string): FailureProps {
	return {
		type: types.GET_USER_FAILURE,
		payload: error,
	};
}
