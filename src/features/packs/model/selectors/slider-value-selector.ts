import { RootState } from '@/app/providers'

export const sliderValueSelector = (state: RootState): number[] => state.packs.filter.sliderValue
