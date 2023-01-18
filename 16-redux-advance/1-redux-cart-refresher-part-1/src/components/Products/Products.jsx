import { Section } from '../UI/IgmtInk'

import Item from './Item'

const DUMMY_ITEM = [
  {
    id: Math.random(),
    name: 'Test Product #1',
    description: 'This product is so amazing!',
    price: 6
  },
  {
    id: Math.random(),
    name: 'Test Product #2',
    description: 'This product is so amazing!',
    price: 9
  },
  {
    id: Math.random(),
    name: 'Test Product #3',
    description: 'This product is so amazing!',
    price: 3
  },
  {
    id: Math.random(),
    name: 'Test Product #4',
    description: 'This product is so amazing!',
    price: 15
  },
  {
    id: Math.random(),
    name: 'Test Product #5',
    description: 'This product is so amazing!',
    price: 12
  }
]

const Products = props => {
  const listItems = DUMMY_ITEM.map(item => (
    <Item
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ))

  return (
    <Section className="h-screen p-4 pt-16">
      <ul className="w-full grid grid-cols-1 gap-2">{listItems}</ul>
    </Section>
  )
}

export default Products
