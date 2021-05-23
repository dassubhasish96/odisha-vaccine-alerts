import React, { Fragment } from 'react';
import banner from './vaccine.jpg';
import './header.css'


//  <img src= {banner} alt="vaccine banner" ></img>

function Header(props) {
    return (
        <Fragment>
             <img class = "image" src= {banner} alt="vaccine banner" ></img>
           <h4>District wise telegram channels in Odisha</h4>
           <p>Following are vaccine slots alert telegram channels for districts of Odisha.
           </p>
        </Fragment>
    );
}

export default Header;