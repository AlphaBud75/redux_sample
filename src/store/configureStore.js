import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../app/slice'

export default configureStore(
  {
    reducer: counterSlice.reducer
  }
)