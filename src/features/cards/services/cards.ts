import { errorNotification } from '@/common/utils'
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
    deleteCard: builder.mutation<void, { id: string }>({
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
        } catch (error) {
          errorNotification(error)
        }
      },
      invalidatesTags: ['Cards'],
    }),
    createCard: builder.mutation<CardResponse, { packId: string; data: FormData }>({
      query: ({ packId, data }) => ({
        url: `v1/decks/${packId}/cards`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Cards'],
    }),
    updateCard: builder.mutation<CardResponse, { cardId: string; data: FormData }>({
      query: ({ cardId, data }) => ({
        url: `v1/cards/${cardId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const {
  useGetCardsQuery,
  useDeleteCardMutation,
  useGetRandomCardQuery,
  useRateCardMutation,
  useCreateCardMutation,
  useUpdateCardMutation,
} = cardsAPI
