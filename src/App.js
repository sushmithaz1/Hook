import React from 'react'
import Apps from './LoginPage/login'
import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";
import {Switch,Route} from "react-router-dom";
import Start from './LoginPage/login';
import Upload from './LoginPage/Upload';

function App() {
  return(
    <div className='container'>
     <Switch>
       <Route exact path='/' component={Start}/>
       <Route exact path='/upload' component={Upload}/>
     </Switch>
    </div>
  );
}

export default App
