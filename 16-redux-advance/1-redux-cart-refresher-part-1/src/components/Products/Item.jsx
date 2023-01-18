import { Button } from '../UI/IgmtInk'

import { BsFillCartPlusFill } from 'react-icons/bs'

const Item = props => {
  const price = props.price.toFixed(2)

  return (
    <div className="bg-neutral-800 p-4 rounded-md shadow-md grid grid-cols-1 gap-8 w-full">
      <div className="grid grid-cols-1 gap-2">
        <h2 className="font-bold text-xl">{props.name}</h2>
        <h3>{props.description}</h3>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="font-bold">${price}</h4>
        <Button className="flex items-center justify-center gap-2 transition-colors hover:text-white/50">
          <BsFillCartPlusFill />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default Item
