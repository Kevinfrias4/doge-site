import React from 'react';
//components
import AboutUs from './components/AboutUs';
import Nav from './components/Nav';
import Breeds from './components/Breeds';
//routing
import { Switch, Route, useLocation } from 'react-router-dom'


function App() {

  const location = useLocation();

  return (
    <div className='App'>
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route exact path='/'>
          <AboutUs />
        </Route>
        <Route exact path='/Breeds'>
          <Breeds />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
