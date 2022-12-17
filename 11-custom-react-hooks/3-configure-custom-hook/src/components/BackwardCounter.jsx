import useCounter from '../hooks/use-counter'
import { Card } from './UI/UIShared'

const BackwardCounter = props => {
  const counter = useCounter(false)
  return <Card className="bg-neutral-800 p-4 text-center">{counter}</Card>
}

export default BackwardCounter
