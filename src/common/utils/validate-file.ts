import { toast } from 'react-toastify'

export const validateFile = (
  file: File,
  maxSizeInBytes: number,
  allowedTypes: string[]
): boolean => {
  if (file.size > maxSizeInBytes) {
    toast.error('Max image size is 1MB', { containerId: 'common' })

    return false
  }

  if (!allowedTypes.includes(file.type)) {
    toast.error('Only .jpg, .jpeg, .png and .webp formats are supported.', {
      containerId: 'common',
    })

    return false
  }

  return true
}
