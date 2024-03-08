import { createSlice } from '@reduxjs/toolkit'

export const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState: {
    value: 2,
  },
  reducers: {
    increment_t: (state) => {
      state.value += 1
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
  increment_t, 
  decrement, 
  incrementByAmount 
} = tutorialSlice.actions

export default tutorialSlice.reducer