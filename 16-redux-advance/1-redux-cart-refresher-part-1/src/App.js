import { Fragment } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Products from './components/Products/Products'

import { useSelector } from 'react-redux'

function App() {
  const cartIsShow = useSelector(state => state.ui.cartIsShow)

  return (
    <Fragment>
      <Header />
      <main className="py-4">
        {cartIsShow && <Cart />}
        <Products />
      </main>
    </Fragment>
  )
}

export default App
