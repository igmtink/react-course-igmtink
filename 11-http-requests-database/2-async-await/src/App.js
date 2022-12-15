import MoviesList from './components/Movies/MoviesList'
import { Button, Card } from './components/UI/UIShared'
import { useState, useCallback } from 'react'

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

  // !Sending (http requests) to the backend using (api)
  // !(http requests) from (api) using (async / await)
  const fetchMoviesHandler = useCallback(async () => {
    console.log('FETCH MOVIES')
    // !Default method is (get)
    // !First get the (response) from (api)  using (await)
    const response = await fetch('https://swapi.dev/api/films')

    // !Convert the (response) from (api) into (Javascript Object) to get all (data) using (await)
    const data = await response.json()

    // !Second get the (data) from our (response.json) using (then())
    // !Get specific (data) from our (data response)
    const dataMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      }
    })

    // !Set it to our (useState)
    setMovies(dataMovies)

    // setMovies(data.results)
  }, [movies])

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
        {movies.length !== 0 && (
          <Card className="p-2 bg-neutral-800">
            <MoviesList movies={movies} />
          </Card>
        )}
      </section>
    </main>
  )
}

export default App
