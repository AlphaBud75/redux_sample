import {counterSlice, tutorialSlice} from './slice';
import { createSelector } from '@reduxjs/toolkit';


const selectDomain = (state) => state || tutorialSlice.initialState ;

export const  selector_counter_state = createSelector(
    [selectDomain],
    tutorial => tutorial
);

export default selector_counter_state;