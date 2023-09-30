import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MusicListItemSlice {
    value: {
        id: number,
        url: string,
        title: string,
        artist: string,
    }
}

const initialState: MusicListItemSlice = {
    value: {
        id: 0,
        url: '链接',
        title: '歌曲名',
        artist: '歌曲作者'
    }
}

export const musicNowSlice = createSlice({
  name: 'musicNowSlice',
  initialState,
  reducers: {
    changeMusicNow: (state,actions) => {
        state.value = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeMusicNow } = musicNowSlice.actions

export default musicNowSlice.reducer
