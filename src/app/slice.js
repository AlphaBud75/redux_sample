import { createSlice } from '@reduxjs/toolkit'

import { combineSlices } from '@reduxjs/toolkit'
import tutorialSlice from './tutorial/slice'
import getStartedSlice from './getStarted/slice'

export const rootSlice = combineSlices({

  tutorial: tutorialSlice,
  getStarted: getStartedSlice
}
)

export default rootSlice.reducer
