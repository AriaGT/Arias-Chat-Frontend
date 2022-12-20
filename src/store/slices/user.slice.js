import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const userSlice = createSlice({
  name: 'user',
  initialState: false,
  reducers: {
    setUserGlobal: (state, action) => action.payload
  }
})

export const { setUserGlobal } = userSlice.actions 

export default userSlice.reducer

export const getMyUserData = () => (dispatch) => {
  const URL = 'https://api-arias-chat.onrender.com/api/v1/users/me'
  axios.get(URL, getConfig())
    .then(res => dispatch(setUserGlobal(res.data)))
    .catch(() => dispatch(setUserGlobal(false)))
}