import { createSlice } from '@reduxjs/toolkit'

export const getStartedSlice = createSlice({
  name: 'getStarted2',
  initialState: {
    value: 1,
  },
  reducers: {
    increment_g: (state, action) => {
      state.value += Number(action.payload.how_many)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
  increment_g, 
  decrement, 
  incrementByAmount 
} = getStartedSlice.actions

export default getStartedSlice.reducer