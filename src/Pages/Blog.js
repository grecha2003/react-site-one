import React, { Component } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

class Blog extends Component {
  render() {
    return (
      <Container>
        <Row style={{ display: "flex", justifyContent: "flex-end", position: "absolute" }}>
          <Col md="3" className='ml-9' style={{ marginRight: "235px" }}>
            <h5 className='text-center mt-3'>Categories</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>Html/CSS</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>ReactJS</ListGroup.Item>
                <ListGroup.Item>Golang</ListGroup.Item>
                <ListGroup.Item>Lua</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mt-3'>
              <Card.Body>
                <Card.Title>Side Widget</Card.Title>
                <Card.Text>
                  Est veniam sunt esse do irure aliqua eiusmod proident et sit anim commodo fugiat. Laboris amet cillum incididunt ut adipisicing ad dolore consectetur pariatur ex eu excepteur ad dolor. Non commodo exercitation velit ex sunt nulla mollit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ alignItems: "flex-end" }}>
          <Col md="9" >
            <Card className='mt-5' style={{ display: "flex", flexDirection: "row", alignItems: "center", border: "none" }}>
              <img width={150} height={150} className="mr-2" src="https://yt3.ggpht.com/ytc/AKedOLQsyUvrKd_3695m6bdG5PPgkMoaChKfY7CXSjkqzA=s900-c-k-c0x00ffffff-no-rj" />
              <Card.Body>
                <h5>Blog Post</h5>
                <p>Voluptate dolore esse velit dolore pariatur exercitation irure excepteur elit duis incididunt cillum consectetur. Occaecat sit mollit consequat cillum voluptate adipisicing laboris excepteur aliquip in reprehenderit pariatur. Ex ad aliquip officia do. Ea labore ullamco tempor incididunt voluptate anim ut. Reprehenderit adipisicing adipisicing id nulla aliquip quis do cupidatat. Amet elit voluptate non adipisicing officia.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="9">
            <Card className='mt-5' style={{ display: "flex", flexDirection: "row", alignItems: "center", border: "none" }}>
              <img width={150} height={150} className="mr-2" src="https://yt3.ggpht.com/ytc/AKedOLQsyUvrKd_3695m6bdG5PPgkMoaChKfY7CXSjkqzA=s900-c-k-c0x00ffffff-no-rj" />
              <Card.Body>
                <h5>Blog Post</h5>
                <p>Voluptate dolore esse velit dolore pariatur exercitation irure excepteur elit duis incididunt cillum consectetur. Occaecat sit mollit consequat cillum voluptate adipisicing laboris excepteur aliquip in reprehenderit pariatur. Ex ad aliquip officia do. Ea labore ullamco tempor incididunt voluptate anim ut. Reprehenderit adipisicing adipisicing id nulla aliquip quis do cupidatat. Amet elit voluptate non adipisicing officia.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="9">
            <Card className='mt-5' style={{ display: "flex", flexDirection: "row", alignItems: "center", border: "none" }}>
              <img width={150} height={150} className="mr-2" src="https://yt3.ggpht.com/ytc/AKedOLQsyUvrKd_3695m6bdG5PPgkMoaChKfY7CXSjkqzA=s900-c-k-c0x00ffffff-no-rj" />
              <Card.Body>
                <h5>Blog Post</h5>
                <p>Voluptate dolore esse velit dolore pariatur exercitation irure excepteur elit duis incididunt cillum consectetur. Occaecat sit mollit consequat cillum voluptate adipisicing laboris excepteur aliquip in reprehenderit pariatur. Ex ad aliquip officia do. Ea labore ullamco tempor incididunt voluptate anim ut. Reprehenderit adipisicing adipisicing id nulla aliquip quis do cupidatat. Amet elit voluptate non adipisicing officia.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="9">
            <Card className='mt-5' style={{ display: "flex", flexDirection: "row", alignItems: "center", border: "none" }}>
              <img width={150} height={150} className="mr-2" src="https://yt3.ggpht.com/ytc/AKedOLQsyUvrKd_3695m6bdG5PPgkMoaChKfY7CXSjkqzA=s900-c-k-c0x00ffffff-no-rj" />
              <Card.Body>
                <h5>Blog Post</h5>
                <p>Voluptate dolore esse velit dolore pariatur exercitation irure excepteur elit duis incididunt cillum consectetur. Occaecat sit mollit consequat cillum voluptate adipisicing laboris excepteur aliquip in reprehenderit pariatur. Ex ad aliquip officia do. Ea labore ullamco tempor incididunt voluptate anim ut. Reprehenderit adipisicing adipisicing id nulla aliquip quis do cupidatat. Amet elit voluptate non adipisicing officia.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default Blog;