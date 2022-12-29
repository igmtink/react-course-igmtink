import { Button, Card, Section } from '../UI/IgmtInk'

const Counter = props => {
  return (
    <Card className="p-6 bg-neutral-800 text-center">
      <h1 className="font-medium mb-1.5">REDUX COUNTER</h1>
      <span className="text-3xl font-bold text-red-500 mb-5 block">
        -- COUNTER VALUE --
      </span>
      <Button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md shadow-md">
        Toggle Counter
      </Button>
    </Card>
  )
}

export default Counter
