import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import book from "../../assets/book.png";
import { useNavigate, useParams } from "react-router-dom";

export const CardHome = () => {
  
  let navigate = useNavigate(); 
  const Sechule =()=>{
    navigate(`/visittype`,{id:1});
  }
  const goto =()=>{
    navigate('/booksession');
  }
  
  return (
    
    <Row>
    <Col lg='1' md="0" sm="0" xs="0" style={{marginTop:'5%'}}></Col>
    <Col lg='5' md="6" sm="12" xs="12" style={{marginTop:'5%'}}>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={book} />
        <Card.Body>
        <Card.Title>See first available</Card.Title>
        <Card.Text >
        Certified consultant <br></br> 
        Estimated time less than 5min 
        </Card.Text>
        <Button variant="primary" style={{width: "100%"}}  onClick={Sechule}>Check Availablilty</Button>
      </Card.Body>
        </Card>
    </Col>
    <Col lg='5' md="6" sm="12" xs="12" style={{marginTop:'5%'}}>
        <Card style={{ width: '18rem', }}>
          <Card.Img variant="top" src={book}  />
          <Card.Body>
        <Card.Title>Book a session</Card.Title>
        <Card.Text>
        Certified consultant<br></br>
      Choose your consultant or time
        </Card.Text>
        <Button style={{width: "100%"}} variant="primary" onClick={goto}>Book Session</Button>
      </Card.Body>
        </Card>
    </Col>
    </Row>
  )
}
