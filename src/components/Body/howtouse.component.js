import React, { Fragment } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';


function HowToUse(props) {
    return (
        <Fragment>
            <h4><u>F.A.Q</u></h4>
            <h4><i>About these telegram channels ?</i></h4>
             There are different telegram channels for each district. Whenever vaccine slots become available for the district, availability
              details will be sent in the channel immediately.
            <h4><i>How to join telegram channels ?</i></h4>
             Click on the channel joining link of your district. Open in telegram app. Click on join button shown below.<br/>
             <h4><i>How is these telegram channels working ?</i></h4>
            There are some bots running in the background which checks slots availability of district through public cowin apis continuosly and sends
             notification in the channel.
             <h4><i>Vaccine slots booking time and discussion ?</i></h4>
            To get update on vaccine slots booking time and for related discussion, please join below telegram group.<br/><br/>
            <Form>
                  <FormGroup action>
                  <Button href = "https://telegram.me/odisha_vaccine_alerts" color="success" size="lg" block>Queries & Discussion telegram group</Button>
                   </FormGroup>
           </Form>           
        </Fragment>
    );
}

export default HowToUse;