import React from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import * as usersActions from '../../src/actions/usersActions'

import User from '../components/User';
import Error from '../components/Error';

class Users extends React.Component {

  componentDidMount(){
    this.props.getAll();
  }

  render(){
    if ( this.props.loading ) {
      return <div>Cargando...</div>
    }
    if ( this.props.error ) {
      return <Error/>
    }
    return <User/>
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);