import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './components/main/Main';


export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  )
}
