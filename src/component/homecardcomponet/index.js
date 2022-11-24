import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import book from "../../assets/book.png";
import { useNavigate } from "react-router-dom";
export const CardHome = () => {
  let navigate = useNavigate(); 
  const Sechule =()=>{
    navigate('/booksession');
  }
  const goto =()=>{
    navigate('/visittype');
  }
  return (
    <Col lg='9' md="6" sm="2" className="d-flex gap-5 flex-Wrap ">
    <Card style={{ width: '19rem' }} className="topcrd">
  <Card.Img variant="top" src={book}  />
  <Card.Body>
    <Card.Title>See first available</Card.Title>
    <Card.Text>
     Certified consultant
    </Card.Text>
    <Card.Text>
    Estimated less than 5 wait
    </Card.Text>
    <Button variant="primary" onClick={Sechule}>Check Your Availablilty</Button>
  </Card.Body>
</Card>
<Card style={{ width: '19rem' }} className="topcrd">
  <Card.Img variant="top" src={book} />
  <Card.Body>
    <Card.Title>Book a session</Card.Title>
    <Card.Text>
     Certified consultant
    </Card.Text>
    <Card.Text>
   Choose your consultant and time
    </Card.Text>
    <Button style={{width: "100%"}} variant="primary" onClick={goto}>Book Session</Button>
  </Card.Body>
</Card>
    </Col>
  )
}
