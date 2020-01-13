import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Users from '../pages/Users'
import NotFound from '../pages/NotFound'

import Layout from '../components/Layout';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio}></Route>
          <Route exact path="/users" component={Users}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;