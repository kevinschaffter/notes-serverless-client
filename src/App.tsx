import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './App.styled.js';
import * as S from './App.styled';
import Routes from './Routes';

const App = () => {
  return (
    <S.StyledApp>
      <Navbar collapseOnSelect bg="light">
        <Link to="/">Scratch</Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </S.StyledApp>
  );
};

export default App;
