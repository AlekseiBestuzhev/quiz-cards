import { memo } from 'react'

import { clsx } from 'clsx'

import s from './rating.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'

type RatingProps = {
  className?: string
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const Rating = memo((props: RatingProps) => {
  const { className, size = 16, selectedStars = 0 } = props

  return (
    <div className={className}>
      {stars.map(starNumber => (
        <Icon
          className={clsx(s.starIcon, selectedStars >= starNumber ? s.hovered : s.normal)}
          name={'star'}
          key={starNumber}
          width={size}
          height={size}
        />
      ))}
    </div>
  )
})
