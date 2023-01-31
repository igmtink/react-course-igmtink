import { useParams } from 'react-router-dom'

const ProductDetail = props => {
  // For (Route Path) that have specific (Parameter) like (/products/:productId)
  // This will collect the data of (/products/:productId)
  const params = useParams()

  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="text-center text-2xl font-bold text-yellow-500">
          Product Detail
        </h1>
        <h2>{params.productId}</h2>
      </div>
    </section>
  )
}

export default ProductDetail
