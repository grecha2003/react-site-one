import React, { Component } from 'react';
import {
  Container,
  FormControl,
  Nav,
  Navbar,
  Form,
  Button,
} from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

import Logo from './logo192.png';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          sticky='top'
          collapseOnSelect
          expand='md'
          bg='dark'
          variant='dark'>
          <Container>
            <Navbar.Brand href='/'>
              <img
                src={Logo}
                height='30'
                width={30}
                className='d-inline-block align-top'
                alt='Logo'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about'>About us</Nav.Link>
                <Nav.Link href='/contacts'>Contacts</Nav.Link>
                <Nav.Link href='/blog'>Blog</Nav.Link>
              </Nav>
              <Form
                inline='true'
                style={{ display: 'flex', transform: 'translate(700px, 0px)' }}>
                <FormControl
                  type='text'
                  placeholder='Search'
                  className='mr-sm-2'
                />
                <Button variant='outline-info' style={{ marginLeft: '6px' }}>
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </Router>
      </>
    );
  }
}
