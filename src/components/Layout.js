import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const Layout = (props) => {
 return(
     <>
   <Header />
   {props.children}
   <Navbar />
   </>
 )
}

export default Layout;
