import { ActionTypes } from "../action-types";
import { User } from "../../interfaces";

interface FindUserAction {
    type: ActionTypes.FIND_USER;
}

interface FindUserSuccessAction {
    type: ActionTypes.FIND_USER_SUCCESS;
    payload: User;
}

interface FindUserErrorAction {
    type: ActionTypes.FIND_USER_ERROR;
    payload: string;
}

export type UserAction = FindUserAction | FindUserSuccessAction | FindUserErrorAction;
