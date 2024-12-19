import logo from './logo.svg';
import headerLogo from './Logo.png';
import './App.css';
import { Slider } from './slider';
import { Cards } from './Cards';
import Changecolor from './Change_color/Changecolor';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <Slider />
      <Cards /> */}

      <Changecolor />
    </>
  );

}


function Header() {
  return (
    <div className='Header'>
      <header>
        <nav>
          <div className='Image'>
            <img src={headerLogo} className="Header-logo" alt="header-logo" />
          </div>
          <div className='Content-nav'>
            <a> Destination </a>
            <a> Hotels </a>
            <a> Flights </a>
            <a> Booking </a>
            <a> Login </a>
            <button> Sign Up </button>
            <select>
              <option> EN </option>
              <option> GU </option>
            </select>
          </div>
        </nav>
      </header>
    </div>
  );
}

export { App, Header };
