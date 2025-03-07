import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';

export const useActions = () => {
    const dispatch = useDispatch();

    // * This will return an object with all the action creators bound to the dispatch function
    return bindActionCreators(actionCreators, dispatch);
};