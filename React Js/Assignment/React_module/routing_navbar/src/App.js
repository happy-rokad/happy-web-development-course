import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Head from './Head';
import Service from './Service';
import Page from './Page/Page';
import Appointment from './Page/Appointment';
import Feature from './Page/Feature';
import Team from './Page/Team';
import Testimonial from './Page/Testimonial';
import Contact from './Contact';
import Main from './Main';
import About from './About';
import Footer from './Footer';


function App() {
  return (

    <>
    <Head />
    <Routes>
        <Route>
          <Route path='/' element={<Main />} />
          <Route path='/about' element = {<About/>} />
          <Route path='/service' element = {<Service/>} /> 
          <Route path='/page' element={<Page />} >
            <Route path='/page/appointment' element={ <Appointment/> } />
            <Route path='/page/feature' element={ <Feature/> } />
            <Route path='/page/team' element={ <Team/> } />
            <Route path='/page/testimonial' element={ <Testimonial/> } />
          </Route> 
          <Route path='/contact' element = {<Contact/>} /> 
        </Route>
      </Routes>
    <Footer />
    
    </>

  );
}

export default App;
