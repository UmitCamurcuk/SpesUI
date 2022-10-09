import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from '../store/features/AuthSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice
  },
})