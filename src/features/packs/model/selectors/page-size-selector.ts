import { RootState } from '@/app/providers'

export const pageSizeSelector = (state: RootState): number => state.packs.pagination.pageSize
