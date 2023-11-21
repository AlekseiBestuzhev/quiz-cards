import { useMemo, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import s from './pack.module.scss'

import { requestHandler } from '@/common/utils'
import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Sort } from '@/components/ui/table-header'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { UserResponse, useGetMeQuery } from '@/features/auth/services'
import { useGetCardsQuery } from '@/features/cards/services'
import { CreateCardControl } from '@/features/cards/ui'
import { CardsTable } from '@/features/cards/ui/cards-table/cards-table.tsx'
import { usePackData } from '@/features/pack/model/hooks'
import { OwnerPackDropDown } from '@/features/pack/ui'
import { useDeleteDeckMutation, useGetDeckInfoQuery } from '@/features/packs/services'
import { EditPackModal } from '@/features/packs/ui'

export const Pack = () => {
  const { packId, currentPage, pageSize, setCurrentPage, setPageSize, searchName, setSearchName } =
    usePackData()

  const navigate = useNavigate()

  const { data: pack, isLoading: packLoading } = useGetDeckInfoQuery({ id: packId })
  const authorId = pack?.userId

  const { data: me } = useGetMeQuery()
  const authUserId = (me as UserResponse)?.id

  const isMyPack = authorId === authUserId

  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'desc' })
  const sortedString = useMemo(() => {
    if (!sort) return ''

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const { data } = useGetCardsQuery({
    id: packId as string,
    params: {
      question: searchName,
      orderBy: sortedString,
      currentPage,
      itemsPerPage: pageSize,
    },
  })

  const [deletePack] = useDeleteDeckMutation()

  const [editIsOpen, setEditIsOpen] = useState(false)

  const deletePackHandler = async () => {
    await requestHandler(async () => {
      await deletePack({ id: packId })
      navigate('/packs')
    })
  }

  if (packLoading) return <p>Loading...</p>

  return (
    <section className={s.root}>
      {pack && (
        <EditPackModal
          open={editIsOpen}
          setOpen={setEditIsOpen}
          id={pack.id}
          name={pack.name}
          isPrivate={pack.isPrivate}
          cover={pack.cover}
        />
      )}
      <BackButton to="/packs" text="Back to Packs" />
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="large" className={s.title}>
            {pack?.name}
            {isMyPack && (
              <OwnerPackDropDown
                onEditHandler={() => setEditIsOpen(true)}
                onDeleteHandler={deletePackHandler}
              />
            )}
          </Typography>
          {pack && isMyPack ? (
            <CreateCardControl packId={pack.id} />
          ) : (
            <Button as={Link} to={`./learn`}>
              Learn Cards
            </Button>
          )}
        </div>
        {pack?.cover && <img src={pack.cover} alt="Cover" className={s.cover} />}
        <TextField
          type="search"
          value={searchName}
          placeholder="Search by question"
          onChange={e => setSearchName(e.currentTarget.value)}
          clearField={() => setSearchName('')}
        />
      </div>
      {data?.items && (
        <CardsTable cards={data.items} isMyPack={isMyPack} sort={sort} onSort={setSort} />
      )}
      <Pagination
        totalCount={data?.pagination.totalItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        className={s.pagination}
      />
    </section>
  )
}
