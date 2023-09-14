import { baseAPI } from '@/app/providers/store/base-api.ts'
import { DecksParams, DecksResponse } from '@/features/packs/services/types.ts'

const decksAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponse, DecksParams>({
      query: params => ({
        url: `v1/decks`,
        method: 'GET',
        params: params ?? {},
      }),
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<any, { name: string }>({
      query: ({ name }) => ({
        url: `v1/decks`,
        method: 'POST',
        body: { name },
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksAPI