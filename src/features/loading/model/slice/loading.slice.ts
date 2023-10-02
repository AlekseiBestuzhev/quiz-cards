import { createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'

const initialState = {
  queryInProgress: false,
}

const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(isPending, state => {
        state.queryInProgress = true
      })
      .addMatcher(isRejected, state => {
        state.queryInProgress = false
      })
      .addMatcher(isFulfilled, state => {
        state.queryInProgress = false
      })
  },
})

export const loadingReducer = slice.reducer

export const loadingActions = slice.actions
