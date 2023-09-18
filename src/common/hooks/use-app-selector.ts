import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '@/app/providers'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
