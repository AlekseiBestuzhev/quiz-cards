import { useCallback, useEffect, useMemo, useState } from 'react'

import { toast } from 'react-toastify'

import s from './packs.module.scss'

import { PackForm } from '@/components/forms/pack'
import { Button } from '@/components/ui/button'
import { ModalWindow } from '@/components/ui/modal-window'
import { Pagination } from '@/components/ui/pagination'
import { Sort } from '@/components/ui/table-header'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery, UserResponse } from '@/features/auth/services'
import { usePacksFilter, usePacksPagination } from '@/features/packs/model/hooks'
import { ErrorResponse, useCreateDeckMutation, useGetDecksQuery } from '@/features/packs/services'
import { FilterControls, PacksTable } from '@/features/packs/ui'

export const Packs = () => {
  const { currentPage, pageSize, setCurrentPage, setPageSize } = usePacksPagination()
  const { searchName, tabValue, sliderValue, setSearchName, setTabValue, setSliderValue } =
    usePacksFilter()

  const setPage = useCallback(setCurrentPage, [])
  const setSize = useCallback(setPageSize, [])
  const setSearch = useCallback(setSearchName, [])
  const setTab = useCallback(setTabValue, [])
  const setSlider = useCallback(setSliderValue, [])

  const [open, setOpen] = useState(false)

  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'desc' })
  const sortedString = useMemo(() => {
    if (!sort) return ''

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const { data } = useGetMeQuery()
  const userId = (data as UserResponse).id

  const packs = useGetDecksQuery({
    name: searchName,
    authorId: tabValue,
    minCardsCount: sliderValue[0],
    maxCardsCount: sliderValue[1],
    orderBy: sortedString,
    currentPage,
    itemsPerPage: pageSize,
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [searchName, sliderValue, pageSize, tabValue])

  const [createDeck] = useCreateDeckMutation()

  const createDeckHandler = async (data: FormData) => {
    try {
      await createDeck(data).unwrap()
      setOpen(false)
    } catch (err) {
      if (typeof err === 'object' && err !== null && 'data' in err) {
        const error = err as ErrorResponse

        toast.error(error.data.errorMessages[0].message, { containerId: 'modal' })
      }
    }
  }

  return (
    <section className={s.root}>
      <ModalWindow open={open} setOpen={setOpen} title="Create new pack">
        <PackForm onSubmit={createDeckHandler} onCancel={() => setOpen(false)} />
      </ModalWindow>
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="large">
            Packs list
          </Typography>
          <Button onClick={() => setOpen(true)}>Add New Pack</Button>
        </div>
        <FilterControls
          searchName={searchName}
          setSearchName={setSearch}
          sliderValue={sliderValue}
          sliderMaxValue={packs?.data?.maxCardsCount}
          setSliderValue={setSlider}
          tabValue={tabValue}
          setTabValue={setTab}
          authUserId={userId}
        />
      </div>
      {packs?.data?.items && (
        <PacksTable items={packs.data.items} authUserId={userId} sort={sort} onSort={setSort} />
      )}
      <Pagination
        totalCount={packs?.data?.pagination.totalItems}
        currentPage={currentPage}
        onPageChange={setPage}
        pageSize={pageSize}
        onPageSizeChange={setSize}
        className={s.pagination}
      />
    </section>
  )
}
