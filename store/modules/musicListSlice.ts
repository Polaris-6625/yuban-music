import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MusicListItem {
    id: number,
    url: string,
    title: string,
    artist: string,
}

const initialState: Array<MusicListItem> = []

export const musicListSlice = createSlice({
  name: 'musicListSlice',
  initialState,
  reducers: {
    addValue: (state,actions) => {
        initialState.push(actions.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addValue } = musicListSlice.actions

export default musicListSlice.reducer
