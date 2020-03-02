import React from 'react'

const DataList = (props) => {
  const items_list = props.render_data.map((item) => {
    if ( (item.id % 2) != 0 ) {
      return <tr className = { props.row_type } >
        <th scope = "row"> NN00{ item.id }  </th>
        <td> { item.user_name } </td>
        <td> { item.city } </td>
        <td> { item.location } </td>
        <td > { item.status } </td>
      </tr>
    } else {
      return <tr>
        <th scope = "row"> NN00{ item.id }  </th>
        <td> { item.user_name } </td>
        <td> { item.city } </td>
        <td> { item.location } </td>
        <td > { item.status } </td>
      </tr>
    }
  })

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope = "col">ID</th>
          <th scope = "col">USUARIO</th>
          <th scope = "col">CIUDAD</th>
          <th scope = "col">DESTINO</th>
          <th scope = "col">ESTADO</th>
        </tr>
      </thead>
      <tbody>
        { items_list }
      </tbody>
    </table> 
  )
}

export default DataList