import { Deck, DecksParams, DecksResponse } from '@/features/packs/services/types.ts'
import { baseAPI } from '@/services/base-api.ts'

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
    createDeck: builder.mutation<Deck, FormData>({
      query: data => ({
        url: `v1/decks`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: builder.mutation<Deck, { id: string }>({
      query: ({ id }) => ({
        url: `v1/decks/${id}`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation, useDeleteDeckMutation } = decksAPI
