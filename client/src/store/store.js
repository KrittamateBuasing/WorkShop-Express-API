import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import userSlice from './userSlice'
export default configureStore({
  reducer: {
    user:userSlice,
    cart:cartSlice

  }
})