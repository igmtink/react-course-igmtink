import { Button, Card, Section } from '../UI/IgmtInk'
import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../../store/index'

const Counter = props => {
  // !To get value from (Redux)
  const counter = useSelector(state => state.value)
  const show = useSelector(state => state.showCounter)

  // !(Dispatch) from (Redux)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.incremented())
  }

  // !Attaching payloads to (Dispatch)
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decremented())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <Card className="p-6 bg-neutral-800 text-center w-full">
      <h1 className="font-medium mb-1.5">REDUX COUNTER</h1>
      {show && (
        <span className="text-3xl font-bold text-red-500 mb-5 block">
          {counter}
        </span>
      )}
      <div className="mb-2 grid grid-flow-col auto-cols-auto gap-2">
        <Button
          className="px-4 py-2 w-full bg-red-500 hover:bg-red-600 rounded-md shadow-md"
          attr={{ onClick: incrementHandler }}
        >
          Increment
        </Button>
        <Button
          className="px-4 py-2 w-full bg-red-500 hover:bg-red-600 rounded-md shadow-md"
          attr={{ onClick: increaseHandler }}
        >
          Increase by 5
        </Button>
        <Button
          className="px-4 py-2 w-full bg-red-500 hover:bg-red-600 rounded-md shadow-md"
          attr={{ onClick: decrementHandler }}
        >
          Decrement
        </Button>
      </div>
      <Button
        className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md shadow-md"
        attr={{ onClick: toggleCounterHandler }}
      >
        Toggle Counter
      </Button>
    </Card>
  )
}

export default Counter
