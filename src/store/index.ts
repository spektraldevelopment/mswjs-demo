import { configureStore, ThunkMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import reducers from './reducers';

export * as actionCreators from './action-creators';
export * from './reducers';

// TODO: Switch over to configureStore from redux-toolkit
// * Create a store applying thunk middleware.
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk as unknown as ThunkMiddleware),
});
