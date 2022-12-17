import { Button } from '../UI/UIShared'
import TasksList from './TasksList'

const Tasks = props => {
  let content = (
    <h2 className="bg-neutral-800 p-4 text-center rounded-md">
      No tasks found. Start adding some!
    </h2>
  )

  const tasksList = props.items.map(item => (
    <TasksList key={item.id} task={item.task} />
  ))

  if (props.items.length > 0) {
    content = tasksList
  }

  if (props.error) {
    content = (
      <Button
        className="bg-red-900 hover:bg-red-900/70 transition-colors py-2 w-full"
        onClick={props.onFetch}
      >
        Try Again
      </Button>
    )
  }

  if (props.onLoading) {
    content = (
      <span className="bg-neutral-800 p-4 text-center rounded-md">
        Loading tasks...
      </span>
    )
  }

  return <ul className="grid grid-cols-1 gap-2">{content}</ul>
}

export default Tasks
