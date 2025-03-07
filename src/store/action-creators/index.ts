import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { UserAction, UsersAction } from '../actions';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        dispatch({
            type: ActionTypes.FETCH_USERS,
        });

        try {
            const { data } = await axios.get(`https://example.com/users`);
            dispatch({
                type: ActionTypes.FETCH_USERS_SUCCESS,
                payload: data.users,
            });
        } catch (error) {
            if (error instanceof Error) {
                dispatch({
                    type: ActionTypes.FETCH_USERS_ERROR,
                    payload: error.message,
                });
            }
        }
    };
};

export const findUser = (id: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({
            type: ActionTypes.FIND_USER,
        });

        try {

            const { data } = await axios.get(`https://example.com/user/${id}`);

            dispatch({
                type: ActionTypes.FIND_USER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            if (error instanceof Error) {
                dispatch({
                    type: ActionTypes.FIND_USER_ERROR,
                    payload: error.message,
                });
            }
        }
    };
};