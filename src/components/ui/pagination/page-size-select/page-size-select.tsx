import { FC } from 'react'

import { Select } from '@/components/ui/select'

type Props = {
  pageSize: number
  onPageSizeChange: (newPageSize: number) => void
}
export const PageSizeSelect: FC<Props> = ({ pageSize, onPageSizeChange }) => {
  const options = [
    { label: '5', value: '5' },
    { label: '7', value: '7' },
    { label: '10', value: '10' },
    { label: '15', value: '15' },
  ]

  const onValueChange = (value: string) => {
    onPageSizeChange(+value)
  }

  return <Select options={options} value={`${pageSize}`} onValueChange={onValueChange} small />
}
