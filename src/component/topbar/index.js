import React, { useState } from 'react'
import { Col,Container,Row } from 'react-bootstrap'
import './tobbar.css'
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import  {FaArrowAltCircleDown}  from "@react-icons/all-files/fa/FaArrowAltCircleDown";


const TopBar = () => {
const [show, setshow] = useState(true)

const Close=()=>{
    setshow(!show)
}

  return (
    <>
    {!show ?null:<Col className='d-flex justify-content-end topbody1 '><FaArrowAltCircleDown style={!show?null:{zIndex:999}} onClick={Close}/></Col>}
    
    <Container fluid  className={!show?'topbody':"topbody3"}  >
      
           
       
        <Row className="d-flex justify-content-end align-items-center " >

        <Col lg="10" className="col align-self-end text-align-right"><p className='tex'>We are experiencing higher than normal wait times for on-demand visits. You can still schedule an appointment to see a doctor soon.</p></Col>
    <Col lg="1" className='closebutton'><AiOutlineClose onClick={Close}/></Col>
        </Row>
    </Container>
    </>
  )
}

export default TopBar