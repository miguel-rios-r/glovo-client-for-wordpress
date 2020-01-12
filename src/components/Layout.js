import React from 'react';

import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'

// class Layout extends React.Component {
//   render(){
//     return (

//     )
//   }
// }

const Layout = (props) => {
  return(
    <div>
      <Navbar/>
      <Breadcrumb title="Inicio"/>
      {props.children}
    </div>
  )
}

export default Layout;