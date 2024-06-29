import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";

export const useReduxData = () => {
    
    const state = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch<AppDispatch>();

  return {
    ...state,
    dispatch
  }
}
