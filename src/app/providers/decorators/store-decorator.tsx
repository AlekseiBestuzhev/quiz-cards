import { ReactNode } from 'react'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { baseAPI } from '@/services/base-api.ts'

export const storyBookStore = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),
})

export const StoreDecorator = (storyFn: () => ReactNode) => {
  return <Provider store={storyBookStore}>{storyFn()}</Provider>
}
