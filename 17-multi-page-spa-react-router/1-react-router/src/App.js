import Root from './pages/Root'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './components/Product/ProductDetail'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Defining (Route Path)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      // (index: true) is a special property it means this (Route Path) is the default (Route)
      { index: true, element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
