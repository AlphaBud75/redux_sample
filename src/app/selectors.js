import { createSelector } from '@reduxjs/toolkit';


const selectDomain = (state) => state;

export const selector_root = createSelector(
    [selectDomain],
    s => s
);
