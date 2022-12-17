import { Section } from '../UI/UIShared'
import TaskForm from './TaskForm'
import { useState } from 'react'

const NewTask = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const enteredTaskHandler = async task => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://react-project-test-tasks-default-rtdb.firebaseio.com/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ task: task }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error('Request Failed!')
      }

      // !Fetch our (Database) after we add new (Data)
      const data = await response.json()

      // !And get the (ID) from our new (Data)
      const generatedId = data.name // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, task: task }

      props.onAddTask(createdTask)
    } catch (error) {
      setError(error.message || 'Something went wrong!')
    }

    setIsLoading(false)
  }

  return (
    <TaskForm onEnterTask={enteredTaskHandler} onLoading={isLoading}></TaskForm>
  )
}

export default NewTask
