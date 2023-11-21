import { errorNotification } from '@/common/utils/errorNotification.ts'

export const requestHandler = async <T>(logic: () => Promise<T>) => {
  try {
    await logic()
  } catch (error) {
    errorNotification(error)
  }
}
