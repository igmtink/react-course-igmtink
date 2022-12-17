import { Button, Card, Input } from '../UI/UIShared'
import { useRef } from 'react'

const TaskForm = props => {
  const taskInputRef = useRef('')

  const submitHandler = e => {
    e.preventDefault()

    props.onEnterTask(taskInputRef.current.value)

    taskInputRef.current.value = ''
  }

  return (
    <Card className="bg-neutral-800 p-4">
      <form onSubmit={submitHandler} className="flex gap-2">
        <Input
          className="text-center bg-neutral-900 flex-1"
          attr={{
            type: 'text',
            placeholder: 'Task',
            ref: taskInputRef
          }}
        />
        <Button
          type="submit"
          className="bg-red-900 hover:bg-red-900/70 transition-colors px-4 py-2"
        >
          {props.onLoading ? 'Sending...' : 'Add Task'}
        </Button>
      </form>
    </Card>
  )
}

export default TaskForm
