import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import generationReducer from './generation-slice'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    generation: generationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
