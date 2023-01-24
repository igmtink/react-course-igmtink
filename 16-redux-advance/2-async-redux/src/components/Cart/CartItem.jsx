import { Button } from '../UI/IgmtInk'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const CartItem = props => {
  const { id, name, description, price, totalPrice, quantity } = props

  const dispatch = useDispatch()

  // We pass only the (Id) of (Cart Item)
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  const addItemQuantityHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        description,
        price,
        quantity,
        totalPrice
      })
    )
  }

  return (
    <li className="bg-neutral-800 p-4 rounded-md grid grid-cols-1 gap-4">
      <div className="flex items-center justify-between gap-4">
        <span className="font-bold">{name}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
          <span className="text-white/50 text-xs">
            (${price.toFixed(2)}/item)
          </span>
        </div>
        <div className="flex gap-2">
          <Button attr={{ onClick: removeItemHandler }}>
            <AiOutlineMinusCircle className="text-xl transition-colors hover:text-white/50" />
          </Button>

          <span>x{quantity}</span>

          <Button attr={{ onClick: addItemQuantityHandler }}>
            <AiOutlinePlusCircle className="text-xl transition-colors hover:text-white/50" />
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
