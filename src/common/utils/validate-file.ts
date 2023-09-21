export const validateFile = (
  file: File,
  maxSizeInBytes: number,
  allowedTypes: string[]
): boolean => {
  if (file.size > maxSizeInBytes) {
    alert(`Файл слишком большой. Максимальный размер: ${maxSizeInBytes / (1024 * 1024)} МБ`)

    return false
  }

  if (!allowedTypes.includes(file.type)) {
    alert(`Неподдерживаемый тип файла. Пожалуйста, выберите (${allowedTypes.join(', ')})`)

    return false
  }

  return true
}
