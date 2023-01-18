import { Section } from '../UI/IgmtInk'

import Item from './Item'

const DUMMY_ITEM = [
  {
    name: 'Test Product #1',
    description: 'This product is so amazing!',
    price: 6
  },
  {
    name: 'Test Product #2',
    description: 'This product is so amazing!',
    price: 10
  }
]

const Products = props => {
  const listItems = DUMMY_ITEM.map(item => (
    <Item
      key={Math.random()}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ))

  return (
    <Section className="h-screen flex items-center p-4">
      <ul className="w-full grid grid-cols-1 gap-2">{listItems}</ul>
    </Section>
  )
}

export default Products
