import './styles.css'
import Home from './Home';
import ContactUs from './ContactUs';
import ContactUsa from './ContactUsa';
import Services from './Services';
import Aboutus from './about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homea from './homea';
import Servicesa from './servicesa';
import Aboutusa from './abouta';
import Products from './products';
import Productsa from './productsa';






function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/index' element={ <Home /> } />
        <Route path='/Contactus' element={ <ContactUs /> } />
        <Route path='/Services' element={ <Services /> } />
        <Route path='/Products' element={ <Products /> } />
        <Route path='/Aboutus' element={ <Aboutus /> } />
        <Route path='/ar' element={ <Homea /> } />
        <Route path='/arindex' element={ <Homea /> } />
        <Route path='/arContactus' element={ <ContactUsa /> } />
        <Route path='/arProducts' element={ <Productsa /> } />
        <Route path='/arServices' element={ <Servicesa /> } />
        <Route path='/arAboutus' element={ <Aboutusa /> } />
      </Routes>
    </Router >
  );
}

export default App;
