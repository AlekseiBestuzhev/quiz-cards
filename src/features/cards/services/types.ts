import { Pagination } from '@/features/packs/services'

export type Card = {
  id: string
  question: string
  answer: string
  deckId: string
  questionImg: string | null
  answerImg: string | null
  questionVideo: string | null
  answerVideo: string | null
  created: string
  updated: string
  shots: number
  grade: number
  userId: string
}

export type CardsResponse = {
  pagination: Pagination
  items: Card[]
}

export type CardsParams = {
  question?: string
  answer?: string
  orderBy?: string
  currentPage?: number
  itemsPerPage?: number
} | void

export type CardResponse = Omit<Card, 'userId'>

export type RandomCardRequest = {
  id: string
  previousCardId?: string
}

export type CardRateRequest = {
  packId: string
  cardId: string
  grade: number
}
