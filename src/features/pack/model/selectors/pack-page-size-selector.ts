import { RootState } from '@/app/providers'

export const packPageSizeSelector = (state: RootState): number => state.pack.pagination.pageSize
