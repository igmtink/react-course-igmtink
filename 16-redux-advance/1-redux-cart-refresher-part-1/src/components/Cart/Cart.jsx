import { Button, Modal } from '../UI/IgmtInk'

import { IoIosClose } from 'react-icons/io'

import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'

import CartItem from './CartItem'

const Cart = props => {
  const dispatch = useDispatch()

  const cartToggleHandler = () => {
    dispatch(uiActions.cartToggle())
  }

  const cartListItems = <CartItem />

  return (
    <Modal className="p-4 bg-neutral-900 h-screen w-64 max-w-full animate-slide-right-to-left">
      <div className="grid grid-cols-1 gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl">My Cart</h1>
          <Button attr={{ onClick: cartToggleHandler }}>
            <IoIosClose className="text-xl transition-colors hover:text-white/50" />
          </Button>
        </div>
        <ul>{cartListItems}</ul>
      </div>
    </Modal>
  )
}

export default Cart
