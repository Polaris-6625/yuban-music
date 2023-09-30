import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ControlStateSlice {
  value: boolean
}

const initialState: ControlStateSlice = {
  value: false,
}

export const controlStateSlice = createSlice({
  name: 'controlStateSlice',
  initialState,
  reducers: {
    changeState: (state) => {
      state.value = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeState } = controlStateSlice.actions

export default controlStateSlice.reducer
