import {counterSlice} from './slice';
import { createSelector } from '@reduxjs/toolkit';


const selectDomain = (state) => state.counter || counterSlice.getInitialState;

export const selector_counter_value = createSelector(
    [selectDomain],
    counterState => counterState.counter
);
