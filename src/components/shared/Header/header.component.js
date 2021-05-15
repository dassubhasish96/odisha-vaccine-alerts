import React, { Fragment } from 'react';
import banner from './vaccine.jpg';
import './header.css'


//  <img src= {banner} alt="vaccine banner" ></img>

function Header(props) {
    return (
        <Fragment>
             <img class = "image" src= {banner} alt="vaccine banner" ></img>
           <h2>District wise telegram channels in Odisha</h2>
           <p>Following are telegram channels for all the districts in odisha. Other districts will be added soon.</p>
        </Fragment>
    );
}

export default Header;