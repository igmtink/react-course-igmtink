import { Button } from '../UI/IgmtInk'
import { IoIosCart } from 'react-icons/io'

import { useDispatch } from 'react-redux'
import { uiActions } from '../../store/ui-slice'

const Header = props => {
  const dispatch = useDispatch()

  const cartToggleHandler = () => {
    dispatch(uiActions.cartToggle())
  }

  return (
    <header className="bg-neutral-800 p-4 fixed top-0 left-0 right-0 z-20 shadow-md">
      <div className="max-w-2xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Redux Cart</h1>
        <nav>
          <Button
            attr={{ onClick: cartToggleHandler }}
            className="flex gap-2 items-center justify-center"
          >
            <IoIosCart className="text-xl" />
            <span className="bg-cyan-500 rounded-full px-1.5 py-0.5 text-neutral-900">
              0
            </span>
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
