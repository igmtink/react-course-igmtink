import { Button } from '../UI/IgmtInk'

import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai'

const CartItem = props => {
  return (
    <li className="bg-neutral-800 p-4 rounded-md grid grid-cols-1 gap-4">
      <div className="flex items-center justify-between">
        <span className="font-bold">Test Item</span>
        <span className="font-bold">$18.00</span>
      </div>
      <div className="flex items-center justify-between">
        <span>x1</span>
        <div className="flex gap-2">
          <Button>
            <AiOutlineMinusCircle className="text-xl transition-colors hover:text-white/50" />
          </Button>
          <Button>
            <AiOutlinePlusCircle className="text-xl transition-colors hover:text-white/50" />
          </Button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
