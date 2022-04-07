import React, { Component } from 'react';
import { Card, Container, Row, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our Team</h2>
          <Row className='m-4' style={{ justifyContent: "center" }}>
            <Card style={{ width: '24rem', marginRight: "10px" }}>
              <Card.Img
                variant="bottom"
                src="https://miro.medium.com/max/1400/1*2d_j5JXuHZRksMJXNulaAg.jpeg" />
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  Dolore nulla pariatur ea velit quis occaecat. Dolor do Lorem tempor sint. Dolore dolore sint aliqua consectetur et mollit voluptate do dolore do non ipsum.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '24rem', marginRight: "10px" }}>
              <Card.Img
                variant="top"
                src="https://miro.medium.com/max/1400/1*2d_j5JXuHZRksMJXNulaAg.jpeg" />
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  Dolore nulla pariatur ea velit quis occaecat. Dolor do Lorem tempor sint. Dolore dolore sint aliqua consectetur et mollit voluptate do dolore do non ipsum.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '24rem' }}>
              <Card.Img
                variant="top"
                src="https://miro.medium.com/max/1400/1*2d_j5JXuHZRksMJXNulaAg.jpeg" />
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  Dolore nulla pariatur ea velit quis occaecat. Dolor do Lorem tempor sint. Dolore dolore sint aliqua consectetur et mollit voluptate do dolore do non ipsum.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;