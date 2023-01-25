import { Button, Modal } from '../UI/IgmtInk'

import { IoIosClose } from 'react-icons/io'

import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'

import CartItem from './CartItem'

const Cart = props => {
  // Getting the (items: []) from (initialState) on (cart-slice) reducer
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const cartToggleHandler = () => {
    dispatch(uiActions.cartToggle())
  }

  const cartListItems = cartItems.map(item => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      totalPrice={item.totalPrice}
      quantity={item.quantity}
    />
  ))

  return (
    <Modal className="p-4 bg-neutral-900 h-screen w-80 animate-slide-right-to-left">
      <div className="grid grid-cols-1 gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">My Cart</h1>
          <Button attr={{ onClick: cartToggleHandler }}>
            <IoIosClose className="text-xl transition-colors hover:text-white/50" />
          </Button>
        </div>
        <ul className="grid grid-cols-1 gap-2">{cartListItems}</ul>
      </div>
    </Modal>
  )
}

export default Cart
