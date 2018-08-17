import React, { Component } from 'react';
import { Container, Row, Col, Icon } from '@cathodevel/quantum';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col
              style={{
                textAlign: 'center',
                paddingTop: '60px',
                paddingBottom: '60px',
              }}
            >
              <Icon name="thumb_up" />
              Catho Simple App
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
