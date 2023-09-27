import { CardsParams, CardsResponse } from '@/features/cards/services/types.ts'
import { baseAPI } from '@/services/base-api.ts'

const cardsAPI = baseAPI.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<CardsResponse, { id: string; params: CardsParams }>({
      query: ({ id, params }) => ({
        url: `v1/decks/${id}/cards`,
        method: 'GET',
        params: params ?? {},
      }),
      providesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `v1/cards/${id}`,
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const { useGetCardsQuery, useDeleteCardMutation } = cardsAPI
