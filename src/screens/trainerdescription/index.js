import React, { useState } from 'react'
import {
  TrainerHed,
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
            }else{
              setloader(false)
                seterror2(true)
                setErrorMessage(result.message)
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
            <TrainerHed/>
        </div>
        <div className="sidenavshow">
        <TrainerSideBar/>
        </div>
      <div className='mobiledivtr center-small-screen maincontainer'>

      <Row className='maincontainer' style={{
        textAlign:'center',
            // border:'solid',
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          marginLeft:'1%',
          marginRight:'1%'}}>
        <Col lg='4' md="2" sm="1" className='maincontainer'></Col>
        <Col lg='4' md="8" sm="10" className='maincontainer'
        style={{
            // border:'solid',
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // marginLeft:'1%',
          // marginRight:'1%',
          paddingTop:'30px'
        }}>
        <div className='maincontainer'>
        <h3> Consultant Description </h3>
        <div className='maincontainer'>
        <TextField className="mt-4 w-100" onKeyPress={enterKye} id="outlined-basic" label="Add Description" variant="outlined" value={trdesc} onChange={e => settrdesc(e.target.value)} multiline maxRows={10} />
        </div>
    
        <Row className="mt-4 maincontainer">
            <Col xs="2" className='maincontainer'>
            </Col>
            <Col xs="8" className='maincontainer'>
          <Button onClick={HandleSubmit}>Submit</Button>

            </Col>
            <Col xs="2" className='maincontainer'>
            </Col>
          </Row>
        </div>
        </Col>
        <Col lg='4' md="2" sm="1" className='maincontainer'>
        </Col>
        </Row>
      </div>
        {loader && <Loader />}
        {error2 && <Error2 onClick={Close2} tittle={errorMessage} />}
        </div>

    
  )
}
