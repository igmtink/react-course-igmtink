import { Section } from './components/UI/UIShared'
import NewTask from './components/NewTasks/NewTask'
import { useEffect, useState } from 'react'
import Tasks from './components/Tasks/Tasks'
import useHttp from './hooks/use-http'

function App() {
  const [tasks, setTasks] = useState([])

  // !Custom HTTP Hook
  // !(Destructuring) to get all (States) from our (Custom HTTP Hook)
  const { isLoading, error, sendRequest: fetchTasks } = useHttp()

  useEffect(() => {
    // !(Function Handler) to handle the (Data) that we get on our (Custom HTTP Hook)
    // !We don't need to use (useCallback) here because it is inside of (useEffect)
    const fetchedDatabase = tasksObject => {
      const fetchedTasks = []

      for (const key in tasksObject) {
        fetchedTasks.push({ id: key, task: tasksObject[key].task })
      }

      setTasks(fetchedTasks)
    }

    fetchTasks(
      {
        url: 'https://react-project-test-tasks-default-rtdb.firebaseio.com/tasks.json'
      },
      fetchedDatabase
    )
  }, [fetchTasks])

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
