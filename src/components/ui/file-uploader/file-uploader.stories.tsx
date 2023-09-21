import { Meta } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/file-uploader/file-uploader.tsx'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'

const meta = {
  title: 'Components/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
} satisfies Meta<typeof FileUploader>

export default meta

export const DefaultModeButton = {
  render: () => {
    return <FileUploader update={() => {}} validate={() => true} />
  },
}

export const FullWidthButton = {
  render: () => {
    return (
      <FileUploader update={() => {}} validate={() => true} as={Button} fullWidth>
        Choose File
      </FileUploader>
    )
  },
}

export const IconButtonUploader = {
  render: () => {
    return (
      <FileUploader
        update={() => {}}
        validate={() => true}
        as={IconButton}
        icon={<Icon name="more" />}
      />
    )
  },
}
