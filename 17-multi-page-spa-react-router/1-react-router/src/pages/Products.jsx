import { Link } from 'react-router-dom'

const PRODUCTS = [
  { id: 'p1', title: 'Product #1' },
  { id: 'p2', title: 'Product #2' },
  { id: 'p3', title: 'Product #3' }
]

const Products = props => {
  const productList = PRODUCTS.map(product => (
    <li key={product.id}>
      <Link to={`/products/${product.id}`}>
        <h1>{product.title}</h1>
      </Link>
    </li>
  ))

  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-center text-2xl font-bold text-yellow-500">
          Products Page
        </h1>
        <ul className="grid grid-cols-1 gap-2">{productList}</ul>
      </div>
    </section>
  )
}

export default Products
