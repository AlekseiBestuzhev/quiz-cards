import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/providers'

export const useAppDispatch: () => AppDispatch = useDispatch
