import { Button } from '../UI/IgmtInk'

import { BsFillCartPlusFill } from 'react-icons/bs'

import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const Item = props => {
  const { id, name, description, price } = props

  const fixedPrice = props.price.toFixed(2)

  const dispatch = useDispatch()

  const addToCartHandler = () => {
    // We pass the (Dummy Products) an (Object) to (addItemToCart) from (cart-slice) reducer
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        description,
        price
      })
    )
  }

  return (
    <div className="bg-neutral-800 p-4 rounded-md shadow-md grid grid-cols-1 gap-8 w-full">
      <div className="grid grid-cols-1 gap-2">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{description}</h3>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="font-bold">${fixedPrice}</h4>
        <Button
          attr={{ onClick: addToCartHandler }}
          className="flex items-center justify-center gap-2 transition-colors hover:text-white/50"
        >
          <BsFillCartPlusFill />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default Item
