import axios from "axios";
import { AuthActionTypes } from "./auth.types";

export const fetchUserAsync = () => async (dispatch) => {
  const user = await axios.get("/api/current_user");
  dispatch({
    type: AuthActionTypes.FETCH_USER,
    payload: user.data,
  });
};

export const handleTokenAsync = (token) => async (dispatch) => {
  const res = await axios.post("/api/stripe", token);
  dispatch({
    type: AuthActionTypes.FETCH_USER,
    payload: res.data,
  });
};
