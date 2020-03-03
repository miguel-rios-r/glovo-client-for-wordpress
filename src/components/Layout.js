import React from 'react';

// class Layout extends React.Component {
//   render(){
//     return (

//     )
//   }
// }

const Layout = (props) => {
  return(
    <div>
      {props.children}
    </div>
  )
}

export default Layout;