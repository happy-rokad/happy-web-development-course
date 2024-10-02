import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   document.title = 'useeffect';
  //      console.log('clicked');
  // }, [])

  // useEffect(() => {
  //   document.title = 'useeffect';
  //      console.log('clicked');
  // })
  
  // useEffect(() => {
  //   document.title = 'useeffect';
  //      console.log('clicked');
  // }, [count])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (loading == false) {
      document.getElementById('head').style.color = generatColor();
      let main = document.getElementById('main');
      let element = document.createElement('div');
      element.style.backgroundColor = generatColor();
      element.style.width = '100px';
      element.style.height = '100px';
      element.style.border = '1px solid black';
      element.style.display = 'inline-block';
      element.style.marginTop = '20px';
      main.appendChild(element);
    }
  }, [count, loading])

  const generatColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  }

  

  return (
    <>
      {loading && <>
        <h1> Loading... </h1>
      </>}
      {!loading && <>
        <h1 id='head'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque placeat quibusdam qui obcaecati accusantium consequuntur reprehenderit dolor iusto totam? Dolores repellat perferendis dignissimos enim ipsum expedita corporis alias et? </h1>
        <button onClick={() => {
          setCount(count + 1)
        }} style={{ width: '60px', height:'40px', cursor:'pointer', backgroundColor:'lightcyan', fontWeight:'bold', fontSize:'24px', border: '1px solid', borderRadius:'3px'}}> {count} </button>
        <div id='main'></div>
      </>}
    </>
  )
}

export default App
