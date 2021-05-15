import React, { Fragment } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';

function Body(props) {
    return (
        <Fragment>
           <Form>
                  <FormGroup action>
                  <Button href = "https://t.me/khurda_vaccine_alerts" color="primary" size="lg" block>Khorda 18+</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://t.me/khurda_vaccine_alerts_45" color="primary" size="lg" block>Khorda 45+</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://t.me/cuttack_vaccine_alerts" color="primary" size="lg" block>Cuttack 18+</Button>
                   </FormGroup>

                   <FormGroup>
                   <Button href = "https://t.me/cuttack_vaccine_alerts_45" color="primary" size="lg" block>Cuttack 45+</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://t.me/sundargarh_vaccine_alerts" color="primary" size="lg" block>Sundargarh 18+</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://t.me/sundargarh_vaccine_alerts_45" color="primary" size="lg" block>Sundargarh 45+</Button>
                   </FormGroup>
           </Form>
        </Fragment>
    );
}

export default Body;