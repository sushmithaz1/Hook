import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './tabs'
import Post from './Post'

function Apps() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path = '/post/:id' render = {routerProps => <Post id={routerProps.match.params.id}/>} />
      </Switch>
    </Router>
  )
}

export default Apps