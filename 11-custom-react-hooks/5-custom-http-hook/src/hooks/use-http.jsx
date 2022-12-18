import { useState, useCallback } from 'react'

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // !We set our (Arguments) on (sendRequest) not on our (useHttp) so we don't need a (External Dependencies)
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true)
    setError(null)
    try {
      // !Configuring our (Custom HTTP Hook) url
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {}
      })

      if (!response.ok) {
        throw new Error('Request Failed!')
      }

      const data = await response.json()

      // !Configuring our (Database)
      // !Pass the (Data) from our (Database) that we fetched to (Function Handler)
      applyData(data)
    } catch (err) {
      setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }, [])

  // !(useHttp) custom http hook we return our (isLoading, error states & sendRequest function)
  // !Shortcut for the (Object) that have same key and item
  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp
