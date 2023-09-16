import { FC, PropsWithChildren, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal-window.module.scss'

import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Typography } from '@/components/ui/typography'

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
  trigger?: ReactNode
  title: string
} & PropsWithChildren

export const ModalWindow: FC<Props> = ({ open, setOpen, title, children }) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <div className={s.root}>
          <Dialog.Content className={s.window} forceMount>
            <Card className={s.card}>
              <div className={s.header}>
                <Dialog.Title asChild>
                  <Typography variant="h2" as="h2" className="DialogTitle">
                    {title}
                  </Typography>
                </Dialog.Title>
                <Dialog.Close asChild>
                  <IconButton
                    icon={<Icon name={'cross'} width={22} height={22} />}
                    aria-label="Close"
                  />
                </Dialog.Close>
              </div>
              <div className={s.content}>{children}</div>
            </Card>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
