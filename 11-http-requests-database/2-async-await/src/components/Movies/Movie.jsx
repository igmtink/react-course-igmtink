import { Card } from '../UI/UIShared'

const Movie = props => {
  return (
    <Card className="p-4 bg-red-900 w-full grid grid-cols-1 gap-4">
      <h1 className="text-xl font-bold">{props.title}</h1>
      <div className="grid grid-cols-1 gap-2">
        <p>{props.openingText}</p>
        <span className="italic text-red-400">{props.releaseDate}</span>
      </div>
    </Card>
  )
}

export default Movie
