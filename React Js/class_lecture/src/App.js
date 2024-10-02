import logo from './logo.svg';
import './App.css';
import Decr_Incre_use_function from './Decr_Incre/Decr_Incre_use_function';
import AddFruit from './Add_Del_Item_withMap/AddFruit';
import Day_Night from './Day_Night_Mode/Day_Night';
import Bootstrap_login from './Bootstrap_login/Bootstrap_login';


function App() {
  return (
    <>
      <Decr_Incre_use_function />
      <AddFruit />
      <Day_Night />
      <Bootstrap_login/>
    </>
  );
}

export default App;
