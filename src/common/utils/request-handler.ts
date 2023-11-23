import { errorNotification } from '@/common/utils/error-notification.ts'

/**
 * A function that accepts the logic associated with the request and its successful execution. Error handling along with notification is built in.
 * @param {() => Promise<any>} logic - A function that contains the logic for a successful request. For try block.
 * @returns {Promise<void>} - Returns nothing
 */

export const requestHandler = async (logic: () => Promise<any>): Promise<void> => {
  try {
    await logic()
  } catch (error) {
    errorNotification(error)
  }
}
