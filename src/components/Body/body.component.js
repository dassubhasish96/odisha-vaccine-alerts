import React, { Fragment } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';

function Body(props) {
    return (
        <Fragment>
           <Form>
                  <FormGroup action>
                  <Button href = "https://telegram.me/khurda_vaccine_alerts" color="primary" size="lg" block>Khorda (Age 18 - 44)</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://telegram.me/khurda_vaccine_alerts_45" color="primary" size="lg" block>Khorda (Age 45+)</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://telegram.me/cuttack_vaccine_alerts" color="primary" size="lg" block>Cuttack (Age 18 - 44)</Button>
                   </FormGroup>

                   <FormGroup>
                   <Button href = "https://telegram.me/cuttack_vaccine_alerts_45" color="primary" size="lg" block>Cuttack (Age 45+)</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://telegram.me/sundargarh_vaccine_alerts" color="primary" size="lg" block>Sundargarh (Age 18 - 44)</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://telegram.me/sundargarh_vaccine_alerts_45" color="primary" size="lg" block>Sundargarh (Age 45+)</Button>
                   </FormGroup>
           </Form>
        </Fragment>
    );
}

export default Body;