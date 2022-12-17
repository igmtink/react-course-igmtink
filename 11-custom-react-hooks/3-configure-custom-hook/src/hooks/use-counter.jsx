import { useEffect, useState } from 'react'

// !To create (Custom Hook) we name it first (use)
// !Everytime we use this (Custom Hook) in multiple components, they have own (states) we are not sharing one (state)
// !To set a default (Arguments) on our (Custom Hook)
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Increment')

    const interval = setInterval(() => {
      // !To configure (Control Flow) our (Custom Hook) by getting a arguments
      if (forwards) {
        setCounter(prevCounter => prevCounter + 1)
      } else {
        setCounter(prevCounter => prevCounter - 1)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [forwards])

  return counter
}

export default useCounter
