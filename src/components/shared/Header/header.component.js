import React, { Fragment } from 'react';
import banner from './vaccine.jpg';
import './header.css'


//  <img src= {banner} alt="vaccine banner" ></img>

function Header(props) {
    return (
        <Fragment>
             <img class = "image" src= {banner} alt="vaccine banner" ></img>
           <h3>District wise telegram channels in Odisha</h3>
           <p>Following are vaccine notification telegram channels for the districts in Odisha. Other districts will be added soon. If your
                district is not in the list then join queries and discussion group and update your district.
           </p>
        </Fragment>
    );
}

export default Header;