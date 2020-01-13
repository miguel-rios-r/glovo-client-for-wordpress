import React from 'react';
import { connect } from 'react-redux';

const User = (props) => {

  const renderData = () => props.users.map((user) => (
    <tr key={user.id}>
      <td>{user.nombre}</td>
      <td>{user.apellido}</td>
      <td>{user.correo}</td>
    </tr>
  ));

  return(
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        { renderData() }
      </tbody>
    </table>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps)(User);