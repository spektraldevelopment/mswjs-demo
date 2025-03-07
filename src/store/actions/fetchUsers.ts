import { ActionTypes } from "../action-types";
import { User } from "../../interfaces";

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

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;