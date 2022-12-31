import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

export const chatsInfoSlice = createSlice({
  name: 'chatsInfo',
  initialState: [],
  reducers: {
    setChatsInfo: (state, action) => action.payload
  }
})

export const { setChatsInfo } = chatsInfoSlice.actions 

export default chatsInfoSlice.reducer

export const getChatsInfo = () => (dispatch) => {
  const URL = 'https://api-arias-chat.onrender.com/api/v1/conversations'
  axios.get(URL, getConfig())
    .then(res => {
      dispatch(setChatsInfo(res.data))
    })
    .catch((err) => {
      console.log(err)
      dispatch(setChatsInfo([]))
    })
}