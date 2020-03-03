import React from 'react';

import DataList from '../components/DataList'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'

class Inicio extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      currentUser: null,
      loading: false,
      error: null,
      data: []
    };
  }

  componentDidMount(){
    this.getData()
  }

  getData(){
    this.setState({loading: true, error: null})
    try {
      this.setState({
        loading: false,
        data: [
          {
            id: '1',
            user_name: 'José Delgado',
            city: 'Quito',
            location: 'Cotocollao',
            status: 'En cola'
          },
        ]
      })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if ( this.state.value === "nu%nat" ) {
      this.setState({
        currentUser: 'nunaby'
      })
      alert('Logueado correctamente');
    } else {
      alert('Contraseña incorrecta');
    }
    event.preventDefault();
  }

  render(){

    if ( this.state.currentUser === null ) {
      return (
        <React.Fragment>
          <Navbar logged = {false}/>
          <Breadcrumb title="Iniciar sesión"/>
          <div className = "container">
            <div className = "row">
              <div className = "col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <div className = "form-group">
                      <label for = "password_field">
                        Ingrese su contraeña
                      </label>
                      <input type="password" value={this.state.value} onChange={this.handleChange} class="form-control" id="password_field" placeholder="Contraseña" />
                    </div>
                  <input type="submit" value="Ingresar" className = "btn btn-primary" />
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }

    if ( this.state.loading ) {
      return <p>Cargando</p>
    }

    return(
      <React.Fragment>
        <Navbar logged = {true} />
        <Breadcrumb title="Nunaby Natural"/>
        <div className="container-fluid">
          <DataList row_type = "table-light" render_data = {this.state.data} ></DataList>
        </div>
      </React.Fragment>
    )
  }
}

export default Inicio;