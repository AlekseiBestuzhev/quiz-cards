import { useMemo } from 'react'

import { Sort } from '@/components/ui/table-header'

export const getSortedString = (sort: Sort) => {
  return useMemo(() => {
    if (!sort) return ''

    return `${sort.key}-${sort.direction}`
  }, [sort])
}
