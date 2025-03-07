import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<Action>) => {
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