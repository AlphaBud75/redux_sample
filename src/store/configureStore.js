import { configureStore } from '@reduxjs/toolkit'
import { rootSlice } from '../app/slice'


export default configureStore(
  {
    // reducer: counterSlice.reducer,
    reducer: rootSlice,
    middleware: null,
  }

  // combine reducers
)