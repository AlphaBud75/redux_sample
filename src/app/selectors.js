import {counterSlice} from './slice';
import { createSelector } from '@reduxjs/toolkit';


const selectDomain = (state) => state;

export const selector_counter_state = createSelector(
    [selectDomain],
    counterState => counterState.value
);
