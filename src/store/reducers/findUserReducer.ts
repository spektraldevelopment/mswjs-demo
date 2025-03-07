import { ActionTypes } from '../action-types';
import { UserAction } from '../actions';
import { User } from '../../interfaces';

interface FindUserState {
    data: User;
    loading: boolean;
    error: string | null;
}

const initialState = {
    data: {},
    loading: false,
    error: null
};

const reducer = (
    state: FindUserState = initialState,
    action: UserAction
): FindUserState => {
    switch (action.type) {
        case ActionTypes.FIND_USER:
            return { loading: true, error: null, data: initialState.data };
        case ActionTypes.FIND_USER_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionTypes.FIND_USER_ERROR:
            return { loading: false, error: action.payload, data: initialState.data };
        default:
            return state;
    }
};

export default reducer;
