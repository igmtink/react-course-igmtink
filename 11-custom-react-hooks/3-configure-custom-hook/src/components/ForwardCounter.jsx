import useCounter from '../hooks/use-counter'
import { Card } from './UI/UIShared'

const ForwardCounter = props => {
  // !To use our (Custom Hook)
  const counter = useCounter()

  return <Card className="bg-neutral-800 p-4 text-center">{counter}</Card>
}

export default ForwardCounter
