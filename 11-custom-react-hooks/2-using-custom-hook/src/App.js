import BackwardCounter from "./components/BackwardCounter"
import ForwardCounter from "./components/ForwardCounter"

function App() {
  return (
  <main className='grid grid-cols-1 h-screen w-[640px] max-w-full mx-auto p-4'>
    <section className='flex flex-col justify-center gap-4'>
      <ForwardCounter />
      <BackwardCounter />
    </section>
  </main>
  )
}

export default App
