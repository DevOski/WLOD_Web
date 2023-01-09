import React from 'react'
import { Col } from 'react-bootstrap';
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
    <Col lg='9' md="6" sm="2" className="d-flex gap-5 flex-Wrap ">
    <Card style={{ width: '19rem' }} className="topcrd">
  <Card.Img variant="top" src={book}  />
  <Card.Body>
    <Card.Title>See first available</Card.Title>
    <Card.Text>
     Certified consultant
    </Card.Text>
    <Card.Text>
    Estimated time less than 5min 
    </Card.Text>
    <Button variant="primary"style={{width: "100%"}}  onClick={Sechule}>Check Availablilty</Button>
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
   Choose your consultant or time
    </Card.Text>
    <Button style={{width: "100%"}} variant="primary" onClick={goto}>Book Session</Button>
  </Card.Body>
</Card>
    </Col>
  )
}
