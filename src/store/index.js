import { configureStore } from '@reduxjs/toolkit'


import snackBarReducer from './snackBarSlice'

export default configureStore({
  reducer: {
    snackBar: snackBarReducer,
  },
})