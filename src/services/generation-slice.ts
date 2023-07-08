import { createSlice } from '@reduxjs/toolkit'
import type { GenerationDataType } from 'components'
import { api } from './api'
import type { RootState } from './store'

type GenerationState = {
  data: { general: GenerationDataType; today: GenerationDataType }
}

const initialState: GenerationState = {
  data: { general: null, today: null },
}

const slice = createSlice({
  name: 'generation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getYearly.matchFulfilled,
      (state, { payload }) => {
        state.data.general = payload.data
      }
    )
    builder.addMatcher(
      api.endpoints.getHourly.matchFulfilled,
      (state, { payload }) => {
        state.data.today = payload.data
      }
    )
  },
})

export default slice.reducer

export const selectData = (state: RootState) => state.generation.data
