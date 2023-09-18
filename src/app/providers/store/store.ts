import { configureStore } from '@reduxjs/toolkit'

import { packsReducer } from '@/features/packs/model/slice'
import { baseAPI } from '@/services/base-api.ts'

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    packs: packsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
