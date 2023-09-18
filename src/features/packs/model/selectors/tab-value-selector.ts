import { RootState } from '@/app/providers'

export const tabValueSelector = (state: RootState): string => state.packs.filter.tabValue
