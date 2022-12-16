import MoviesList from './components/Movies/MoviesList'
import { Button, Card } from './components/UI/UIShared'
import { useState, useCallback, useEffect } from 'react'

// const DUMMY_DATA = [
//   {
//     _id: 'M1',
//     title: 'Movie #1',
//     openingText:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     releaseDate: '2021-05-18'
//   },
//   {
//     _id: 'M2',
//     title: 'Movie #2',
//     openingText:
//       'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     releaseDate: '2021-05-19'
//   }
// ]

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState(null)

  // !(useCallback) to avoid re-render this function
  // !To avoid infinite loop
  const fetchMoviesHandler = useCallback(async () => {
    console.log('FETCHING MOVIES')

    try {
      setIsLoading(true)

      setError(null)

      const response = await fetch('https://swapi.dev/api/films')

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json()

      const dataMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      })

      setMovies(dataMovies)
    } catch (error) {
      setError(error.message)
    }

    setIsLoading(false)
  }, [])

  // !(useEffect) to load imediately our (database)
  useEffect(() => {
    fetchMoviesHandler()
  }, [fetchMoviesHandler])

  let content = <p className="text-center">Found No Movies.</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (error) {
    content = <p className="text-center">{error}</p>
  }

  if (isLoading) {
    content = (
      <div className="fixed inset-0 p-2">
        <div className="w-[640px] max-w-full mx-auto bg-red-900 h-full flex gap-2 justify-center items-center rounded-md">
          <svg
            aria-hidden="true"
            className="mr-2 w-6 h-6 text-red-900 animate-spin dark:text-red-900 fill-red-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <main className="w-[640px] max-w-full mx-auto p-2 grid grid-cols-1 gap-4 h-screen">
      <section className="flex justify-center items-center self-end">
        <Button
          onClick={fetchMoviesHandler}
          className="py-4 px-8 bg-neutral-800 hover:bg-neutral-800/75 transition-colors"
        >
          Fetch Movies
        </Button>
      </section>
      <section className="self-start">
        <Card className="p-2 bg-neutral-800">{content}</Card>
      </section>
    </main>
  )
}

export default App
