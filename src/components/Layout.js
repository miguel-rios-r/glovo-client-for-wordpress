import React from 'react';

import Navbar from '../components/Navbar'

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
      {props.children}
    </div>
  )
}

export default Layout;