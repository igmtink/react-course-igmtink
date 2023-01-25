import { Fragment, useEffect, useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Products from './components/Products/Products'

import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from './store/ui-slice'

import { Notification } from './components/UI/IgmtInk'

function App() {
  const [isInitial, setIsInitial] = useState(true)

  // Destructuring (useSelector)
  const { cartIsShow, notification } = useSelector(state => state.ui)
  const cart = useSelector(state => state.cart.items)

  const dispatch = useDispatch()

  // Everytime (cart) redux have a changes (useEffect) is will re-evaluate
  useEffect(() => {
    // (Async / Await)
    const sendData = async () => {
      // Passing (notifiaction) redux (payload)
      dispatch(
        uiActions.showNotification({
          status: 'Pending',
          title: 'Sending...',
          message: 'Sending cart data!'
        })
      )

      const response = await fetch(
        'https://react-redux-async-fcfcc-default-rtdb.firebaseio.com/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      )

      // Handling (Error) if (response) is not (ok)
      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }

      // (Data) from (response)
      const responseData = await response.json()

      dispatch(
        uiActions.showNotification({
          status: 'Success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    }

    console.log(isInitial)
    if (isInitial) {
      setIsInitial(false)
      return
    }

    sendData().catch(error => {
      dispatch(
        uiActions.showNotification({
          status: 'Error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      )
    })
  }, [cart])

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
