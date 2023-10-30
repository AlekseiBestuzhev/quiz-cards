import { configureStore } from '@reduxjs/toolkit'

import { loadingReducer } from '@/features/loading/model/slice/loading.slice.ts'
import { packReducer } from '@/features/pack/model/slice'
import { packsReducer } from '@/features/packs/model/slice'
import { baseAPI } from '@/services/base-api.ts'

export const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    packs: packsReducer,
    loading: loadingReducer,
    pack: packReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseAPI.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
