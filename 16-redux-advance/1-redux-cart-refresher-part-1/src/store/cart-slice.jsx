import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [], totalQuantity: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      // Return an (Object) if there's a lot of (Extra Data)
      const newItem = action.payload
      // Find if the (Item) is existed on (Items: []) from (initialState)
      const existingItem = state.items.find(item => item.id === newItem.id)

      // If the (Item) is not existed we add the (New Item)
      if (!existingItem) {
        // Array (push) to add a new (Item) to (Items: []) from (initialState)
        // We can manipulate the (state) because we are using (Redux Toolkit)
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          description: newItem.description,
          price: newItem.price,
          quantity: newItem.quantity
        })
      } else {
        existingItem.quantity++
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      // Find that existed on (Items: []) from (initialState)
      const existingItem = state.items.find(item => item.id === id)

      // Check if that (Existed Item) is (quantity) is equal to (1)
      if (existingItem.quantity === 1) {
        // Filter it on (Items: [])
        state.items = state.items.filter(item => item.id !== id)
      } else {
        existingItem.quantity--
      }
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice
