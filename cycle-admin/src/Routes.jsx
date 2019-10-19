import React from 'react';
import {Switch, Route} from 'react-router';
import Home from './components/main/Main';
import CollectStep from './components/collect /collect';


export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/collect' component={CollectStep}/>
    </Switch>
  )
}
