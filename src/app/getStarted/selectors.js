import {counterSlice, getStartedSlice} from './slice';
import { createSelector } from '@reduxjs/toolkit';


const selectDomain = (state) => state || getStartedSlice;

export const selector_counter_state = createSelector(
    [selectDomain],
    getStarted2 => getStarted2.value
);

export default selector_counter_state;