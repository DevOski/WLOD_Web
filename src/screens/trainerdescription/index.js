import React, { useState } from 'react'
import {
    BasicExample,
    Loader,
    OffcanvasExample,
    // TrainerSideBar,
    Error2,
  } from "../../component";
import './trdesc.css'
import { Button, Col, Container, Row } from "react-bootstrap";
import TrainerSideBar from "../../component/trainersidebar";
import { TextField } from '../../../node_modules/@mui/material/index';
import { useLocation, useNavigate } from 'react-router-dom';
import NavSidebar from '../../component/navsidebar';

export default function Trainerdescription() {
    const params = useLocation();
    const navigate =useNavigate();
    const [loader, setloader] = useState(false);
    const [error2, seterror2] = useState(false);
    console.log("==>",params.state?.identity);
    const [trdesc,settrdesc]=useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const HandleSubmit = () =>{
        setloader(true)
        console.log("statee",trdesc);
        var formdata = new FormData();
        formdata.append("identity", params.state?.identity);
        formdata.append("desc",trdesc);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://dashboard.weightlossondemand.com/backend/api/session_desc", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.status == 200){
                setloader(false)
                seterror2(true)
                setErrorMessage("Description has been added")
            }
        })
        .catch(error => console.log('error', error));
    }
    
  const Close2 = () => {
    seterror2(false);
    navigate('/trainermode')
  };
  const enterKye = (e) => {
    if (e.key === "Enter") {
        HandleSubmit();
    }
  };
  return (
    <div className="wi55">
      <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
      <div className='mobilediv center-screen'>

      <Row>
        <Col xs="2">
        </Col>
        {/* <CardHome /> */}
        <Col xs="8"  style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop:'30px'
        }}>
        <div class="text-center">
        <h3> Consultant Description </h3>
        <div style={{width:'450px'}}>
        <TextField className="mt-4 w-100"   onKeyPress={enterKye} id="outlined-basic" label="Add Description" variant="outlined" value={trdesc} onChange={e => settrdesc(e.target.value)} multiline maxRows={10} sx={{width: 600}}/>
        </div>
    
        <Row className="mt-4">
            <Col xs="2">
            </Col>
            <Col xs="8">
          <Button onClick={HandleSubmit}>Submit</Button>

            </Col>
            <Col xs="2">
            </Col>
          </Row>
        </div>
        </Col>
        <Col xs="2">
        </Col>
        </Row>
      </div>
        {loader && <Loader />}
        {error2 && <Error2 onClick={Close2} tittle={errorMessage} />}
        </div>

    
  )
}
