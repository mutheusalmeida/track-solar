import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { asyncStorage } from './async-storage'
import type { DataType, GenerationRequestType } from 'components'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/test-2023',
    prepareHeaders: async (headers) => {
      const user = await asyncStorage.getUser()
      const hasUser = user && user.token

      if (hasUser) {
        headers.set('Authorization', `Bearer ${user.token}`)
      }

      headers.set('Content-Type', 'application/json')

      return headers
    },
  }),
  endpoints: (build) => ({
    getGeneration: build.mutation<
      GenerationRequestType,
      { dataType: DataType; token: string }
    >({
      query: ({ dataType, token }) => ({
        url: `?dataType=${dataType}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
})

export const { useGetGenerationMutation } = api
