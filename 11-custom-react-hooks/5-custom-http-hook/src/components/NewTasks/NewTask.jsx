import TaskForm from './TaskForm'
import useHttp from '../../hooks/use-http'

const NewTask = props => {
  // !We don't use (useCallback) because we call only this (function) whenever we send on our (Form), we are not inside on (useEffect)
  const createTask = (task, tasksData) => {
    // !And get the (ID) from our new (Data)
    const generatedId = tasksData.name // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, task: task }

    props.onAddTask(createdTask)
  }

  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp()

  // !We won't have a problem of an infinite loop, because this request will not be sent whenever the component is re-render but only when this function runs which happens when the form is submitted
  const enteredTaskHandler = task => {
    sendTaskRequest(
      {
        url: 'https://react-project-test-tasks-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: { task: task },
        headers: {
          'Content-Type': 'application/json'
        }
      },
      // !(bind()) is for pre-configuring the function
      // !We pass the (Task) from our (Form) using (bind()), and the other (Data) that we got from (useHttp) will be append on the last arguments
      createTask.bind(null, task)
    )
  }

  return (
    <TaskForm onEnterTask={enteredTaskHandler} onLoading={isLoading}></TaskForm>
  )
}

export default NewTask
