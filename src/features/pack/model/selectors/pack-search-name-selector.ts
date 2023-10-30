import { RootState } from '@/app/providers'

export const packSearchNameSelector = (state: RootState): string => state.pack.searchName
