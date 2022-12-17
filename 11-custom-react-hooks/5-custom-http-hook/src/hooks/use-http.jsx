import { useState } from 'react'

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = async () => {
    setIsLoading(true)
    setError(null)
    try {
      // !Configuring our (Custom HTTP Hook) url
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        body: JSON.stringify(requestConfig.body),
        headers: requestConfig.headers
      })

      if (!response.ok) {
        throw new Error('Request Failed!')
      }

      const data = await response.json()

      // !Configuring our (Database)
      applyData(data)
    } catch (err) {
      setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }

  // !(useHttp) custom http hook we return our (isLoading, error states & sendRequest function)
  // !Shortcut for the (Object) that have same key and item
  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp
