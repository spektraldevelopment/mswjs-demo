import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers";

// * Instead of using useSelector directly, we create a custom hook that is typed to our RootState
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;