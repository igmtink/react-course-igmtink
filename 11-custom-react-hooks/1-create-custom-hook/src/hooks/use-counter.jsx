import { useEffect, useState } from 'react'

// !To create (Custom Hook) we name it first (use)
const useCounter = () => {
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
}

export default useCounter
