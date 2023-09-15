import type { Meta } from '@storybook/react'

import { IconButton } from './'

import { Icon } from '@/components/ui/icon/icon.tsx'

const meta = {
  title: 'Components/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta

export const Default = {
  render() {
    return (
      <div style={{ display: 'flex', columnGap: '24px' }}>
        <IconButton icon={<Icon name={'cross'} width={22} height={22} />} />
        <IconButton icon={<Icon name={'edit'} width={22} height={22} />} />
        <IconButton icon={<Icon name={'trash-bin'} width={22} height={22} />} />
      </div>
    )
  },
}

export const Small = {
  render() {
    return (
      <div style={{ display: 'flex', columnGap: '24px' }}>
        <IconButton icon={<Icon name={'cross'} width={16} height={16} />} small />
        <IconButton icon={<Icon name={'edit'} width={16} height={16} />} small />
        <IconButton icon={<Icon name={'trash-bin'} width={16} height={16} />} small />
      </div>
    )
  },
}
