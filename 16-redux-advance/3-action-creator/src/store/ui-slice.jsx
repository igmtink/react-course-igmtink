import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartIsShow: false, notification: null }

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    cartToggle(state) {
      state.cartIsShow = !state.cartIsShow
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
})

export const uiActions = uiSlice.actions

export default uiSlice
