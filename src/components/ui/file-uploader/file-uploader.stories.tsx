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
    return <FileUploader name="file" onChange={() => {}} />
  },
}

export const FullWidthButton = {
  render: () => {
    return (
      <FileUploader name="file" onChange={() => {}} as={Button} fullWidth>
        Choose File
      </FileUploader>
    )
  },
}

export const IconButtonUploader = {
  render: () => {
    return (
      <FileUploader
        name="file"
        icon={<Icon name="more" width={20} height={20} />}
        onChange={() => {}}
        as={IconButton}
      />
    )
  },
}
