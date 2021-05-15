import React, { Fragment } from 'react';

function HowToUse(props) {
    return (
        <Fragment>
            <h2><u>F.A.Q</u></h2>
            <h5><b>About these telegram channels ?</b></h5>
             There are different telegram channels for each district. Whenever vaccine slots become available for the district, availability
              details will be sent in the channel immediately.
            <h5><b>How to join telegram channels ?</b></h5>
             Click on the channel joining link of your district. Open in telegram app. Click on join button shown below<br/>
             <h5><b>How is these telegram channels working ?</b></h5>
            There are some bots running in the background which checks slots availability of district through public cowin apis continuosly and sends
             notification in the channel.
             <h5><b>Any Query ?</b></h5>
            For any queries or discussion related to these channels, please join below telegram group.<br/> <a href = "https://t.me/odisha_vaccine_alerts">https://t.me/odisha_vaccine_alerts</a><br/>

           
        </Fragment>
    );
}

export default HowToUse;