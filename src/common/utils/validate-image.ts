import { validateFile } from './validate-file.ts'

export const validateImage = (file: File) => {
  const maxSizeInBytes = 5 * 1024 * 1024
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

  return validateFile(file, maxSizeInBytes, allowedTypes)
}
