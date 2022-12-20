import { createSlice } from "@reduxjs/toolkit";

const resetInfoSlice = createSlice({
  name: 'resetInfo',
  initialState: null,
  reducers: {
    setResetInfo: (state, action) => action.payload
  }
})

export const { setResetInfo } = resetInfoSlice.actions 

export default resetInfoSlice.reducer