import { combineReducers } from "redux";    
import fetchUsersReducer from "./fetchUsersReducer";

const reducers = combineReducers({
    users: fetchUsersReducer,
});

export default reducers;

// * This will be used to infer the type of the root state object in the store.
export type RootState = ReturnType<typeof reducers>;