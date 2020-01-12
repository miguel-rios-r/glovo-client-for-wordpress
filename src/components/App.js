import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Inicio from '../pages/Inicio'

import Layout from '../components/Layout';

const App = () => {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;