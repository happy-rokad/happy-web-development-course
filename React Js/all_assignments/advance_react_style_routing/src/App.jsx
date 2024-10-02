import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import All_category from './All_category'
import Slider from './Slider'
import Featured_category from './Featured_category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <All_category />
      <Slider />
      <Featured_category/>
    </>
  )
}

export default App
