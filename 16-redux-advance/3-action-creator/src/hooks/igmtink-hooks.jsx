import { useState, useCallback } from 'react'

export const useToggle = () => {
  const [isToggle, setIsToggle] = useState(false)

  const toggleHandler = useCallback(() => {
    setIsToggle(prevState => (prevState = !prevState))
  }, [])

  return {
    isToggle,
    toggleHandler
  }
}
