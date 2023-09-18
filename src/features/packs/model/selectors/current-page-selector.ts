import { RootState } from '@/app/providers'

export const currentPageSelector = (state: RootState): number => state.packs.pagination.currentPage
