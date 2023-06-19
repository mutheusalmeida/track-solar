import { createSlice } from '@reduxjs/toolkit'
import { GenerationRequestType } from 'components'
import { api } from './api'
import type { RootState } from './store'

type GenerationState = {
  data: GenerationRequestType | null
}

const initialState: GenerationState = {
  data: null,
}

const slice = createSlice({
  name: 'generation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getYearly.matchFulfilled,
      (state, { payload }) => {
        state.data = payload
      }
    )
  },
})

export default slice.reducer

export const selectData = (state: RootState) => state.generation.data
