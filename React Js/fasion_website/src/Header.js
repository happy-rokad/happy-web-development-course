import './App.css';
import header_logo from './header-logo.png';
import { Link } from 'react-router-dom';
 

const Header = () => {
  return (
      <>
      
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <img src={header_logo} alt="header-logo" />
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                    <li class="nav-item">
                        <Link to = '/home' class="nav-link">HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link to = '/newarrivals' class="nav-link">NEW ARRIVALS</Link>
                    </li>
                    <li class="nav-item">
                        <Link to = '/sale' class="nav-link">SALE</Link>
                    </li>
                    <li class="nav-item">
                        <Link to = '/favourite' class="nav-link"> FAVOURITE </Link>
                    </li>
                    <li class="nav-item">
                        <Link to = '/app&voucher' class="nav-link"> APP & VOUCHER </Link>
                    </li>
                    <li class="nav-item">
                        <Link to = '/shopping' class="nav-link" href="#"> SHOPPING </Link>
                    </li>
                    <li class="nav-item">
                        <button> SIGN UP </button>       
                    </li>
                </ul>
            </div>
        </div>
      </nav>
          
      </>
  )
}

export default Header