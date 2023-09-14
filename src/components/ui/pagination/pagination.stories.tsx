import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Pagination } from './'

export default {
  title: 'Components/Pagination',
  component: Pagination,
} as Meta<typeof Pagination>

export const Default = () => {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  return (
    <div>
      <Pagination
        totalCount={100}
        currentPage={page}
        onPageChange={setPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
      />
      <div style={{ marginTop: '24px' }}>
        <p>Current page: {page}</p>
        <p>Page size: {pageSize}</p>
      </div>
    </div>
  )
}
