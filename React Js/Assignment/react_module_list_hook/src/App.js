import logo from './logo.svg';
import './App.css';
import Counter_app from './Counter_app/Counter_app';
import Login_logout from './Login_Logout/Login_logout';
import Login_registration from './Login_registration/Login_registration';
import Grocery_shopping from './Grocery_shopping/Grocery_shopping';
import Mouse_move from './Mouse_move/Mouse_move';

function App() {
  return (
    <>
      <Counter_app />
      <br/>
      <br/>
      <br/>
      <br/>
      <Login_logout />
      <br/>
      <br/>
      <br/>
      <br />
      <Login_registration/>
      <br/>
      <br/>
      <br/>
      <br />
      <Grocery_shopping />
      <br/>
      <br/>
      <br/>
      <br />
      <Mouse_move />
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default App;
