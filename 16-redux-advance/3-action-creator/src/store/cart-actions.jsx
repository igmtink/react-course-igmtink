import { uiActions } from './ui-slice'
import { cartActions } from './cart-slice'

// (Action Creator)
export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://react-redux-async-fcfcc-default-rtdb.firebaseio.com/cart.json'
      )

      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }

      const data = response.json()

      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(cartActions.replaceItemCart(cartData))
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'Error',
          title: 'Error!',
          message: 'Fetching cart data failed!'
        })
      )
    }
  }
}

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: 'Pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      })
    )

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-redux-async-fcfcc-default-rtdb.firebaseio.com/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      )

      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
    }

    try {
      await sendRequest()

      dispatch(
        uiActions.showNotification({
          status: 'Success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'Error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      )
    }
  }
}
