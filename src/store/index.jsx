import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user.slice'
import resetInfoSlice from './slices/resetInfo.slice'

export default configureStore({
  reducer: {
    userSlice,
    resetInfoSlice
  }
})