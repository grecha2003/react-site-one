import React, { Component } from 'react';
import { Container, Nav, Row, Col, Tab } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first" style={{ cursor: "pointer" }}>Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" style={{ cursor: "pointer" }}>Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" style={{ cursor: "pointer" }}>Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" style={{ cursor: "pointer" }}>Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth" style={{ cursor: "pointer" }}>Librares</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src="https://static.tildacdn.com/tild6230-3861-4339-b562-636330303234/image89.png" style={{ width: "1024px", height: "576px" }} />
                  <p>Magna excepteur velit eiusmod nostrud. Incididunt veniam sit anim velit officia consectetur enim occaecat eu adipisicing ipsum. Irure in aliquip consequat in nostrud in sunt fugiat cupidatat duis nostrud sint amet. Tempor enim ullamco eiusmod consectetur nisi do quis sunt proident fugiat in nostrud irure commodo. Reprehenderit consectetur laborum irure eu.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://myfaithmedia.org/wp-content/uploads/2017/08/Computer-hipsters-1024x682.jpg" style={{ width: "1024px", height: "576px" }} />
                  <p>Magna excepteur velit eiusmod nostrud. Incididunt veniam sit anim velit officia consectetur enim occaecat eu adipisicing ipsum. Irure in aliquip consequat in nostrud in sunt fugiat cupidatat duis nostrud sint amet. Tempor enim ullamco eiusmod consectetur nisi do quis sunt proident fugiat in nostrud irure commodo. Reprehenderit consectetur laborum irure eu.</p>
                  <p>Magna excepteur velit eiusmod nostrud. Incididunt veniam sit anim velit officia consectetur enim occaecat eu adipisicing ipsum. Irure in aliquip consequat in nostrud in sunt fugiat cupidatat duis nostrud sint amet. Tempor enim ullamco eiusmod consectetur nisi do quis sunt proident fugiat in nostrud irure commodo. Reprehenderit consectetur laborum irure eu.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="http://ivk.petrsu.ru/pluginfile.php/9513/course/overviewfiles/logos_pgm.jpg" style={{ width: "1024px", height: "576px" }} />
                  <p>Magna excepteur velit eiusmod nostrud. Incididunt veniam sit anim velit officia consectetur enim occaecat eu adipisicing ipsum. Irure in aliquip consequat in nostrud in sunt fugiat cupidatat duis nostrud sint amet. Tempor enim ullamco eiusmod consectetur nisi do quis sunt proident fugiat in nostrud irure commodo. Reprehenderit consectetur laborum irure eu.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://ares.decipherzone.com/blog-manager/uploads/banner_eae320dc-35b6-444d-b5ed-f1963bcf6a50.jpg" style={{ width: "1024px", height: "576px" }} />
                  <p>Magna excepteur velit eiusmod nostrud. Incididunt veniam sit anim velit officia consectetur enim occaecat eu adipisicing ipsum. Irure in aliquip consequat in nostrud in sunt fugiat cupidatat duis nostrud sint amet. Tempor enim ullamco eiusmod consectetur nisi do quis sunt proident fugiat in nostrud irure commodo. Reprehenderit consectetur laborum irure eu.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img src="https://i.imgur.com/dXqdE9w.jpg" style={{ width: "1024px", height: "576px" }} />
                  <p>Magna excepteur velit eiusmod nostrud. Incididunt veniam sit anim velit officia consectetur enim occaecat eu adipisicing ipsum. Irure in aliquip consequat in nostrud in sunt fugiat cupidatat duis nostrud sint amet. Tempor enim ullamco eiusmod consectetur nisi do quis sunt proident fugiat in nostrud irure commodo. Reprehenderit consectetur laborum irure eu.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}

export default About;
