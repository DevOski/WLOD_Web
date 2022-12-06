import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { removeData } from '../../store/action';
import './nav.css'
function BasicExample({name}) {
  let navigate = useNavigate(); 
  const dispatch=useDispatch();
  const handleLogout=()=>{
    dispatch(removeData());
    navigate('/')
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img style={{ width: "50%" }} src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="https://weightlossondemand.com/">Home</Nav.Link>
        <Nav.Link href="https://weightlossondemand.com/services" className="center-link">Services</Nav.Link>
        <Nav.Link href="https://weightlossondemand.com/contact-us">Contact Us</Nav.Link>
        
        
      
       
          </Nav>
          <Button className='logbutt' onClick={handleLogout}>Logout</Button>
          <p className='proname'>{name}</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;