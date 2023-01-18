import {React,useEffect, useState} from 'react'
import { useLocation} from 'react-router-dom';
import {BasicExample} from "../../component";
import TrainerSideBar from "../../component/trainersidebar";
import { Row,Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SessionDetails() {
  const params = useLocation();
    console.log(params.state);
    const [username,setusername]= useState();
    
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", params.state?.token);
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://dashboard.weightlossondemand.com/backend/api/user_details", requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result.data)
        })
          .catch(error => console.log('error', error));
    }, [])
    
  return (
      <div>
    <BasicExample  />
    <Row>
        <Col xs="3">
          <TrainerSideBar />
        </Col>
        <Col xs="9" style={{display: 'flex',justifyContent:"center"}}>
        <Row >
            <Col>
            <div className="text-center mb-2 mt-4">
               <h3>Session Details</h3>
            </div>
        <Card sx={{ width:700, marginTop:"2%" }}>
                      <CardContent>
                        <Typography sx={{ fontSize: 14, fontWeight: 'bold'}} color="text.secondary" gutterBottom>
                         Username:
                        </Typography>
                       
                        <Typography variant="body2">
                          Date: 
                        </Typography>
                        <Typography variant="body2">
                          Time: 

                        </Typography>
                      </CardContent>
                      {/* <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions> */}
                    </Card>
                   
        </Col>

        </Row>
        </Col>
        {/* <CardHome /> */}
      </Row>
        
    </div>
  )
}
