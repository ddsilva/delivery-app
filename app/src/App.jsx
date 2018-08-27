import React, { Component } from 'react';
import { Container, Row, Col } from '@cathodevel/quantum';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container style={{padding: '20px'}}>
          <Row>
            <Col tablet={3}>
              Form
            </Col>

            <Col tablet={9}>
              App
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
