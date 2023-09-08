import * as SliderRadixUI from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '@/components/ui/typography'

type SliderProps = {
  min?: number
  max?: number
  value: number[]
  step?: number
  onChange?: (value: number[]) => void
  label?: string
}
export const Slider = ({ min, max, value, step = 1, onChange, label }: SliderProps) => {
  return (
    <Typography as="label" variant="body2" className={s.label}>
      {label}
      <div className={s.body}>
        <Typography as={'h3'} variant={'body1'} className={s.value}>
          {value[0]}
        </Typography>
        <SliderRadixUI.Root
          className={s.line}
          value={value}
          onValueChange={onChange}
          min={min}
          max={max}
          step={step}
        >
          <SliderRadixUI.Track className={s.track}>
            <SliderRadixUI.Range className={s.range} />
          </SliderRadixUI.Track>
          <SliderRadixUI.Thumb className={s.thumb} aria-label="Volume">
            <div className={s.dot}></div>
          </SliderRadixUI.Thumb>
          <SliderRadixUI.Thumb className={s.thumb} aria-label="Volume">
            <div className={s.dot}></div>
          </SliderRadixUI.Thumb>
        </SliderRadixUI.Root>
        <div className={s.minMax}>
          <Typography as={'h3'} variant={'body1'} className={s.value}>
            {value[1]}
          </Typography>
        </div>
      </div>
    </Typography>
  )
}
