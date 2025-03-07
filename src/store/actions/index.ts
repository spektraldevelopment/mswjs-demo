import { ActionTypes } from "../action-types";
import { User } from "../../interfaces";

interface FindUserAction {
    type: ActionTypes.FIND_USER;
}

interface FindUserSuccessAction {
    type: ActionTypes.FIND_USER_SUCCESS;
    payload: User[];
}

interface FindUserErrorAction {
    type: ActionTypes.FIND_USER_ERROR;
    payload: string;
}

interface FetchUsersAction {
    type: ActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: ActionTypes.FETCH_USERS_SUCCESS;
    payload: User[];
}

interface FetchUsersErrorAction {
    type: ActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type Action = FindUserAction | FindUserSuccessAction | FindUserErrorAction | FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;