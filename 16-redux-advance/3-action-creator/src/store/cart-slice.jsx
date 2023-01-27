import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [], totalQuantity: 0, changed: false }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceItemCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
    addItemToCart(state, action) {
      // Return an (Object) if there's a lot of (Extra Data)
      const newItem = action.payload

      // Find if the (Item) is existed on (Items: []) from (initialState)
      const existingItem = state.items.find(item => item.id === newItem.id)

      // Everytime we add a new or existing (Item) we increase also the (Total of Quantity) of the (Cart)
      state.totalQuantity++

      state.changed = true

      // If the (Item) is not existed we add the (New Item)
      if (!existingItem) {
        // Array (push) to add a new (Item) to (Items: []) from (initialState)
        // We can manipulate the (state) because we are using (Redux Toolkit)
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          description: newItem.description,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      // Find that existed on (Items: []) from (initialState)
      const existingItem = state.items.find(item => item.id === id)

      // Everytime we remove a (Item) we decrease also the (Total of Quantity) of the (Cart)
      state.totalQuantity--

      state.changed = true

      // Check if that (Existed Item) is (quantity) is equal to (1)
      if (existingItem.quantity === 1) {
        // Filter it on (Items: [])
        state.items = state.items.filter(item => item.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    }
  }
})

export const cartActions = cartSlice.actions

export default cartSlice
