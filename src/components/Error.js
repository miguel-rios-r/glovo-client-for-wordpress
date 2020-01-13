import React from 'react';
import { connect } from 'react-redux';

const Error = (props) => {

  const renderData = () => props.error.map((user) => (
    <tr key={user.id}>
      <td>{user.nombre}</td>
      <td>{user.apellido}</td>
      <td>{user.correo}</td>
    </tr>
  ));

  return(
    <div>
      <h3>Estos datos son de error</h3>
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
    </div>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect(mapStateToProps)(Error);