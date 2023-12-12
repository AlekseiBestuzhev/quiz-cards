import { ReactNode } from 'react'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { loadingReducer } from '@/features/loading/model/slice'
import { baseAPI } from '@/services/base-api.ts'

export const storyBookStore = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    loading: loadingReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),
})

export const StoreDecorator = (storyFn: () => ReactNode) => {
  return <Provider store={storyBookStore}>{storyFn()}</Provider>
}
