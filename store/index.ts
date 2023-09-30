import {
  useSelector,
  useDispatch,
  shallowEqual,
  TypedUseSelectorHook,
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./modules/counterSlice"
import controlStateSliceReducer from "./modules/controlStateSlice"
import playingNameSliceReducer from "./modules/playingNameSlice"
import musicListSliceReducer from "./modules/musicListSlice"
import musicNowSliceReducer from "./modules/musicNowSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    controlStateSlice: controlStateSliceReducer,
    playingNameSlice: playingNameSliceReducer,
    musicListSlice: musicListSliceReducer,
    musicNowSlice: musicNowSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //关闭序列化状态检测中间件
      serializableCheck: false,
    }),
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const shallowEqualApp = shallowEqual
