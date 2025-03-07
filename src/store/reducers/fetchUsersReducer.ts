import { ActionTypes } from '../action-types';
import { Action } from '../actions';
import { User } from '../../interfaces';

interface FetchUsersState {
    data: User[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};  

const reducer = (
    state: FetchUsersState = initialState,
    action: Action
): FetchUsersState => {
    switch (action.type) {
        case ActionTypes.FETCH_USERS:
            return { loading: true, error: null, data: [] };
        case ActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default reducer;
