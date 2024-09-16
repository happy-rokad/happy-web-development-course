import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Display_section from './Display_section';
import Company_logo from './Company_logo';
import New_Arrivals from './New_Arrivals';
import Sale from './Sale';
import Young_fav from './Young_fav';
import Download_app from './Download_app';
import Join_shopping from './Join_shopping';
import Footer from './Footer';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route>
            <Route path='/home' element={<Display_section />} />
            <Route path = '/newarrivals' element={<New_Arrivals/>} />
            <Route path = '/sale' element={<Sale/>} />
            <Route path = '/favourite' element={<Young_fav/>} />
            <Route path = '/app&voucher' element={<Download_app/>} />
            <Route path='/shopping' element={<Join_shopping />} />
            
            {/* <Header />
            <Display_section />
            <Company_logo />
            <New_Arrivals />
            <Sale />
            <Young_fav />
            <Download_app />
            <Join_shopping />
            <Footer/> */}
          </Route>
        </Routes>
    </>
  );
}

export default App;
