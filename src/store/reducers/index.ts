import { combineReducers } from "redux";    
import fetchUsersReducer from "./fetchUsersReducer";
import findUserReducer from "./findUserReducer";

const reducers = combineReducers({
    fetchUsers: fetchUsersReducer,
    findUser: findUserReducer
});

export default reducers;

// * This will be used to infer the type of the root state object in the store.
export type RootState = ReturnType<typeof reducers>;