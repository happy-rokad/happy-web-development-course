import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Database from './Database'

function App() {
  // const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   document.title = 'api_project1';
  //   fetch('https://dummyjson.com/products').then((result) => {
  //     return result.json()
  //   }).then((res) => {
  //     console.log(res);
  //     setProducts(res.products);
  //   })
  // }, [])
  

  return (
    <>
      {/* {products.map((result) => {
        return (
          <div key={result.id} style={{display:'flex', flexDirection:'column' ,justifyContent:'center', alignItems:'center'}}>
            <h2>{result.title}</h2>
            <img src={result.images[0]} height={'100px'} width={'100px'} />
            <p>{result.description}</p>
            <p> 1aPrice: {result.price}</p>
          </div>
        )
      })} */}
      <Database/>
    </>
  )
}

export default App
