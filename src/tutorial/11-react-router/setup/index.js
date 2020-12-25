import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home'
import UseState from '../../1-useState/setup/4-useState-object';
import UseEffect from '../../2-useEffect/setup/1-useEffect-basics';
import ConditionRenderingEx from '../../3-conditional-rendering/setup/3-show-hide';
import UseContextEx from '../../8-useContext/setup/1-context-api'
import UseRefEx from '../../5-useRef/setup/1-useRef-basics';
import Error from './Error';
import People from './People';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  return(
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/UseStateEx'>
          <UseState/>
        </Route>
        <Route path='/UseEffectEx'>
        <UseEffect/>
        </Route>
        <Route path='/UseContextEx'>
          <UseContextEx/>
        </Route>
        <Route path='/ConditionRenderingEx'>
          <ConditionRenderingEx/>
        </Route>
        <Route path='/people'>
          <People/>
        </Route>
        <Route path='/UseRefEx'>
          <UseRefEx/>
        </Route>
        <Route path='/person/:id' children={<Person />}></Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
