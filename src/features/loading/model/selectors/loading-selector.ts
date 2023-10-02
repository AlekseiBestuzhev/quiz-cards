import { RootState } from '@/app/providers'

export const loadingSelector = (state: RootState): boolean => state.loading.queryInProgress
