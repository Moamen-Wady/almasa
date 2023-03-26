import './styles.css'
import Home from './Home';
import ContactUs from './ContactUs';
import Services from './Services';
import Aboutus from './about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homea from './homea';
import Servicesa from './servicesa';
import Aboutusa from './abouta';






function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Contactus' element={ <ContactUs /> } />
        <Route path='/Products' element={ <Services /> } />
        <Route path='/Aboutus' element={ <Aboutus /> } />
        <Route path='/ar' element={ <Homea /> } />
        <Route path='/arContactus' element={ <ContactUs /> } />
        <Route path='/arProducts' element={ <Servicesa /> } />
        <Route path='/arAboutus' element={ <Aboutusa /> } />
      </Routes>
    </Router >
  );
}

export default App;
