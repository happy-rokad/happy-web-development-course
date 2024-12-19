import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TheamContext from './TheamContext'
import Header from './Header'
import Products from './Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TheamContext>
        <Header />
        <Products/>
      </TheamContext>
    </>
  )
}

export default App
