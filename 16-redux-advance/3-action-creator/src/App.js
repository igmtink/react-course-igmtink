import { Fragment, useEffect, useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Products from './components/Products/Products'

import { useSelector, useDispatch } from 'react-redux'

import { sendCartData, fetchCartData } from './store/cart-actions'

import { Notification } from './components/UI/IgmtInk'

function App() {
  const [isInitial, setIsInitial] = useState(true)

  // Destructuring (useSelector)
  const { cartIsShow, notification } = useSelector(state => state.ui)
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  // Everytime (cart) redux have a changes (useEffect) is will re-evaluate
  useEffect(() => {
    if (isInitial) {
      setIsInitial(false)
      return
    }

    if (cart.changed) {
      // (Action Creator)
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header />
      <main className="py-4">
        {cartIsShow && <Cart />}
        <Products />
      </main>
    </Fragment>
  )
}

export default App
