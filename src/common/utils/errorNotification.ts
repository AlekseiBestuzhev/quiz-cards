import { toast } from 'react-toastify'

import { ErrorResponse } from '@/features/packs/services'

export const errorNotification = (err: unknown) => {
  if (typeof err === 'object' && err !== null && 'data' in err) {
    if (
      'status' in err &&
      err.status === 500 &&
      typeof err.data === 'object' &&
      err.data !== null &&
      'message' in err.data &&
      typeof err.data.message === 'string'
    ) {
      toast.error(err.data.message, { containerId: 'common' })
    } else {
      const error = err as ErrorResponse

      toast.error(error.data.errorMessages[0].message, { containerId: 'common' })
    }
  }

  if (err instanceof Error) {
    toast.error(err.message, { containerId: 'common' })
  }
}
