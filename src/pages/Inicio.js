import React from 'react';

import DataList from '../components/DataList'

class Inicio extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
          {
            id: '2',
            user_name: 'Jacob Murillo',
            city: 'Quito',
            location: 'Conocoto',
            status: 'En cola'
          },
          {
            id: '3',
            user_name: 'José Delgado',
            city: 'Quito',
            location: 'Cotocollao',
            status: 'En cola'
          },
          {
            id: '4',
            user_name: 'Jacob Murillo',
            city: 'Quito',
            location: 'Conocoto',
            status: 'En cola'
          }
        ]
      })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render(){

    if ( this.state.loading ) {
      return <p>Cargando</p>
    }

    return(
      <div className="container-fluid">
        <DataList row_type = "table-light" render_data = {this.state.data} ></DataList>
      </div>
    )
  }
}

export default Inicio;