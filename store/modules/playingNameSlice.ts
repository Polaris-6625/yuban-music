import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PlayingNameSlice {
  value: string
}

const initialState: PlayingNameSlice = {
  value: '歌曲名',
}

export const playingNameSlice = createSlice({
  name: 'playingNameSlice',
  initialState,
  reducers: {
    changeName: (state,action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeName } = playingNameSlice.actions

export default playingNameSlice.reducer
