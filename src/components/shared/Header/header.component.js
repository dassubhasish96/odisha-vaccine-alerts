import React, { Fragment } from 'react';
import banner from './vaccine.jpg';
import './header.css'


//  <img src= {banner} alt="vaccine banner" ></img>

function Header(props) {
    return (
        <Fragment>
             <img class = "image" src= {banner} alt="vaccine banner" ></img>
           <h3>District wise telegram channels in Odisha</h3>
           <p>Following are vaccine slots alert telegram channels for districts of Odisha. Currently 900+ users are using 
               this service.
           </p>
        </Fragment>
    );
}

export default Header;