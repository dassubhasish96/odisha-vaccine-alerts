import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from './components/shared/Header/header.component';
import Footer from './components/shared/Footer/footer.component';
import Body from './components/Body/body.component';
import HowToUse from './components/Body/howtouse.component';

import './App.css'

function App() {
  return (
    <div class = "container" >
    <Container>
      <div class = "header">
      <Row>
      <Col>
          <Header />
        </Col>
      </Row>
</div>

      <Row>
        <Col>
          <Body />
          </Col>
      
      </Row>

      <Row>
      <Col>
      <HowToUse />
          </Col>
      </Row>

      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;