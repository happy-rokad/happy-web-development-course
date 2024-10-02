import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './AddTodo'
import ListTodo from './ListTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo />
    </>
  )
}

export default App
