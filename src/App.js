import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import DataInTransmit from './components/pages/DataInTransmit';
import DataAtRest from './components/pages/DataAtRest';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import GoToPDF from './components/pages/GoToPDF';
import Products from './components/pages/Products';
import{ init } from '@emailjs/browser';
import ScrollToTop from './components/ScrollToTop';
init("xf6bAX508-YyAqgck");

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <div className='wrapper'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/data-in-transmit' component={DataInTransmit} />
        <Route path='/data-at-rest' component={DataAtRest} />
        <Route path='/resources' component={Resources} />
        <Route path='/read-more' component={GoToPDF} />
        <Route path='/contact' component={Contact} />
        <Route path='/products' component={Products} />
      </Switch>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;
