import { Link } from 'react-router-dom'

import s from './not-found.module.scss'

import { PageNotFound } from '@/assets/illustrations/page-not-found.tsx'
import { Button } from '@/components/ui/button'

export const NotFound = () => {
  return (
    <div className={s.root}>
      <PageNotFound />
      <Button as={Link} to={'/packs'}>
        Back to Packs
      </Button>
    </div>
  )
}
