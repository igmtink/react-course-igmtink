import Counter from './components/Counter/Counter'
import { Button, Card, Section } from './components/UI/IgmtInk'

function App() {
  return (
    <main>
      <Section className="grid grid-cols-1 place-items-center h-screen p-4">
        <Counter />
      </Section>
    </main>
  )
}

export default App
