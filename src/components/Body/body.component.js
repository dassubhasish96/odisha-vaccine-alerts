import React, { Fragment } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';

function Body(props) {
    return (
        <Fragment>
           <Form>
                  <FormGroup action>
                  <Button href = "https://telegram.me/khurda_vaccine_alerts" color="primary" size="lg" block>Khorda</Button>
                   </FormGroup>
    
                   <FormGroup>
                   <Button href = "https://telegram.me/cuttack_vaccine_alerts" color="primary" size="lg" block>Cuttack</Button>
                   </FormGroup>

 
                   <FormGroup>
                   <Button href = "https://telegram.me/sundargarh_vaccine_alerts" color="primary" size="lg" block>Sundargarh</Button>
                   </FormGroup>
                  
                   <FormGroup>
                   <Button href = "https://telegram.me/sambalpur_vaccine_alerts" color="primary" size="lg" block>Sambalpur</Button>
                   </FormGroup>
 
                   <FormGroup>
                   <Button href = "https://telegram.me/balasore_vaccine_alerts" color="primary" size="lg" block>Balasore</Button>
                   </FormGroup>
                  
                   <FormGroup>
                   <Button href = "https://telegram.me/angul_vaccine_alert" color="primary" size="lg" block>Angul</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://telegram.me/jajpur_vaccine_alerts" color="primary" size="lg" block>Jajpur</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://telegram.me/puri_vaccine_alerts" color="primary" size="lg" block>Puri</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://telegram.me/bargarh_vaccine_alerts" color="primary" size="lg" block>Bargarh</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://telegram.me/ganjam_vaccine_alerts" color="primary" size="lg" block>Ganjam</Button>
                   </FormGroup>
                   <FormGroup>
                   <Button href = "https://telegram.me/jharsuguda_vaccine_alerts" color="primary" size="lg" block>Jharsuguda</Button>
                   </FormGroup>
           </Form>
        </Fragment>
    );
}

export default Body;