import {
  CardsParams,
  CardResponse,
  CardsResponse,
  CardRateRequest,
  RandomCardRequest,
} from '@/features/cards/services/types.ts'
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
    getRandomCard: builder.query<CardResponse, RandomCardRequest>({
      query: ({ id, previousCardId }) => ({
        url: `v1/decks/${id}/learn`,
        method: 'GET',
        params: { previousCardId },
      }),
    }),
    rateCard: builder.mutation<CardResponse, CardRateRequest>({
      query: ({ packId, ...rest }) => ({
        url: `v1/decks/${packId}/learn`,
        method: 'POST',
        body: rest,
      }),
      async onQueryStarted({ packId }, { dispatch, queryFulfilled }) {
        try {
          const { data: newCard } = await queryFulfilled

          dispatch(
            cardsAPI.util.updateQueryData('getRandomCard', { id: packId }, () => {
              return newCard
            })
          )
        } catch (e) {
          console.log(e)
        }
      },
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const {
  useGetCardsQuery,
  useDeleteCardMutation,
  useGetRandomCardQuery,
  useRateCardMutation,
} = cardsAPI
