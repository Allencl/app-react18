import { createSlice } from '@reduxjs/toolkit'

export const snackBarSlice = createSlice({
  name: 'snackBar',
  initialState: {
    value: 0,
  },
  reducers: {
    showSnackBar: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { showSnackBar } = snackBarSlice.actions

export default snackBarSlice.reducer