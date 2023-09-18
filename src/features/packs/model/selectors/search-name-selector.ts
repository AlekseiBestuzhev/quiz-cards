import { RootState } from '@/app/providers'

export const searchNameSelector = (state: RootState): string => state.packs.filter.searchName
