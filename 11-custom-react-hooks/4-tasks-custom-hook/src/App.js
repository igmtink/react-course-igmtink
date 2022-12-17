import { Section } from './components/UI/UIShared'
import NewTask from './components/NewTasks/NewTask'
import { useEffect, useState } from 'react'
import Tasks from './components/Tasks/Tasks'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState(null)

  const fetchTasks = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://react-project-test-tasks-default-rtdb.firebaseio.com/tasks.json'
      )

      if (!response.ok) {
        throw new Error('Request Failed!')
      }

      const data = await response.json()

      const fetchedTasks = []

      for (const key in data) {
        fetchedTasks.push({ id: key, task: data[key].task })
      }

      setTasks(fetchedTasks)
    } catch (err) {
      setError(err.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const taskAddHandler = task => {
    setTasks(prevTask => prevTask.concat(task))
  }

  return (
    <Section className="grid grid-cols-1 gap-4">
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        onLoading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </Section>
  )
}

export default App
