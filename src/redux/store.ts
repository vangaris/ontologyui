import { configureStore } from '@reduxjs/toolkit'

import efoTermReducer from '../features/efo/efoTermsSlice'

const store = configureStore({
  reducer: {
    efoTerms: efoTermReducer
  }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

