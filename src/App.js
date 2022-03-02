import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import DataInTransmit from './components/pages/DataInTransmit';
import DataAtRest from './components/pages/DataAtRest';
import Applications from './components/pages/Applications';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import GoToPDF from './components/pages/GoToPDF';

function App() {
  return (
    <>
    <Router>
      <div className='wrapper'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/data-in-transmit' component={DataInTransmit} />
        <Route path='/data-at-rest' component={DataAtRest} />
        <Route path='/applications' component={Applications} />
        <Route path='/resources' component={Resources} />
        <Route path='/read-more' component={GoToPDF} />
        <Route path='/contact' component={Contact} />
      </Switch>
      </div>
      <Footer />
    </Router>
    </>
  );
}

export default App;
