import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import DataInTransit from './components/pages/DataInTransit';
import DataAtRest from './components/pages/DataAtRest';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import GoToPDF from './components/pages/GoToPDF';
import Products from './components/pages/Products';
import{ init } from '@emailjs/browser';
import ScrollToTop from './components/ScrollToTop';
import DarkStor10GTacticalDARE from './components/pages/products/DarkStor10GTacticalDARE';
import DarkStor100GGroundDARE from './components/pages/products/DarkStor100GGroundDARE';
import DarkStor100GAirborneDARE from './components/pages/products/DarkStor100GAirborneDARE';
import DarkLink100GEDE from './components/pages/products/DarkLink100GEDE';
import DarkLink10GTacticalEDE from './components/pages/products/DarkLink10GTacticalEDE';
import DarkLink400GEDE from './components/pages/products/DarkLink400GEDE';

init("xf6bAX508-YyAqgck");

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop/>
      <div className='wrapper'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/data-in-transit' component={DataInTransit} />
        <Route path='/data-at-rest' component={DataAtRest} />
        <Route path='/resources' component={Resources} />
        <Route path='/read-more' component={GoToPDF} />
        <Route path='/contact' component={Contact} />
        <Route path='/products' component={Products} />
        <Route path='/darkstor-10g-tactical-dare' component={DarkStor10GTacticalDARE} />
        <Route path='/darkstor-100g-ground-dare' component={DarkStor100GGroundDARE} />
        <Route path='/darkstor-100g-airborne-dare' component={DarkStor100GAirborneDARE} />
        <Route path='/darklink-100g-ede' component={DarkLink100GEDE} />
        <Route path='/darklink-10g-tactical-ede' component={DarkLink10GTacticalEDE} />
        <Route path='/darklink-400g-ede' component={DarkLink400GEDE} />
      </Switch>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;
