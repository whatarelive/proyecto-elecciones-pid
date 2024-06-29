import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux"

export const useDiputado = () => {

    const state = useSelector((state: RootState) => state.bio);
    const dispatch = useDispatch<AppDispatch>();

  return {
    ...state,
    dispatch
  }
}
