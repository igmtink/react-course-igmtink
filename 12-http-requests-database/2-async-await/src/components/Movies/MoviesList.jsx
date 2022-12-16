import { Card } from '../UI/UIShared'
import Movie from './Movie'

const MoviesList = props => {
  const movesList = props.movies.map(data => (
    <Movie
      key={data.id}
      title={data.title}
      openingText={data.openingText}
      releaseDate={data.releaseDate}
    />
  ))

  return (
    <ul className="grid grid-cols-1 gap-4 justify-items-center">{movesList}</ul>
  )
}

export default MoviesList
