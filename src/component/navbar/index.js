import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';
import logo from '../../assets/logo.png'
import React from 'react'

const Navbarmenu = () => {
    return (
     

    <Container  >
      <Navbar expand="lg" variant="light" bg="light">
        <Container >
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}



export default Navbarmenu


