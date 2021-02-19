import React from 'react';
import Header from '../components/Header'

import './css/style.css'

const Layout = (props) => {
    return ( 
        <div className="background-image">
            <Header />
            {props.children}
        </div>
     );
}
 
export default Layout;