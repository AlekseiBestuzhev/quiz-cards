import { RootState } from '@/app/providers'

export const packCurrentPageSelector = (state: RootState): number =>
  state.pack.pagination.currentPage
