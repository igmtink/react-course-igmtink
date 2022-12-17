import { Card } from '../UI/UIShared'

const TasksList = props => {
  return (
    <li>
      <Card className="p-4 bg-neutral-800">{props.task}</Card>
    </li>
  )
}

export default TasksList
