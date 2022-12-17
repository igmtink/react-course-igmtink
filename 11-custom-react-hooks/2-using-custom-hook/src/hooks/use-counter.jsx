import { useEffect, useState } from 'react'

// !To create (Custom Hook) we name it first (use)
// !Everytime we use this (Custom Hook) in multiple components, they have own (states) we are not sharing one (state)
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

  return counter
}

export default useCounter
