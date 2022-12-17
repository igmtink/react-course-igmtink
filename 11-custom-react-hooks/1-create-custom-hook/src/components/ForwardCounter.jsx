import { Card } from './UI/UIShared'
import { useEffect, useState } from 'react'

const ForwardCounter = props => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Increment')

    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <Card className="bg-neutral-800 p-4 text-center">{counter}</Card>
}

export default ForwardCounter
