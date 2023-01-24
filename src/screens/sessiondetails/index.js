import {React,useEffect, useState} from 'react'
import { useLocation} from 'react-router-dom';
import {BasicExample, Loader,SideMainBar} from "../../component";
import TrainerSideBar from "../../component/trainersidebar";
import { Row,Col, Button } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';
import './sessiondetails.css'
const textStyles = {
    cancel: {
        color: 'white',
        backgroundColor:'yellow',
    },
}
export default function SessionDetails() {
  const params = useLocation();
    console.log('params',params.state);
    const [username,setusername]= useState("");
    const [email,setemail]= useState("");
    const [marital,setmarital]= useState("");
    const [gender,setgender]= useState("");
    const [smok,setsmok]= useState("");
    const [dob,setdob]= useState("");
    const [city,setcity]= useState("");
  const [loader, setloader] = useState(false)
  const [open, setOpen] = useState(false);
  const [past, setpast] = useState(false);
  const [note, setnote] = useState(false);

  function handleClose(value) {
    // e.preventDefault();
    setOpen(false);
}
    
    useEffect(() => {
    
    setloader(true)
    if(params.state?.past){
        setpast(true)
        setnote(params.state?.desc)
    }

        var myHeaders = new Headers();
        myHeaders.append("Authorization", params.state?.token);
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://dashboard.weightlossondemand.com/backend/api/user_details",requestOptions)
          .then(response => response.json())
          .then(result => {
            setloader(false)
            console.log(result.data)
            setusername(result.data.first_name+" "+result.data.last_name)
            setemail(result.data.email)
            setdob(result.data.date_of_birth)
            setmarital(result.data.marital_status)
            setgender(result.data.gender)
            setsmok(result.data.smoking_status)
            setcity(result.data.city)
        })
          .catch(error => console.log('error', error));
    }, [])
    const HandleQuestion = () =>{
        setOpen(true);
    }
  return (
      <div>
   <BasicExample/>
       <SideMainBar/>
      <Row>
        {/* <Col  lg="1" md="1" sm="1" xs="1" ></Col> */}
       <Col lg="2" md="3" sm="3" xs="3" >
        <TrainerSideBar/>
       </Col>
        <Col  lg="1" md="0" sm="0" xs="1" ></Col>
        {/* <CardHome /> */}
        <Col lg="9" md="9" sm="9" xs="9" style={{display: 'flex',justifyContent:"center"}}>
        <Row >
            <Col>
            <div className="text-center mb-2 mt-4">
               <h3>Session Details</h3>
            </div>
        <Card sx={{ width:700, marginTop:"2%" }}>
                      <CardContent >
                        <Typography className='mt-2'>
                        <span  style={{ fontSize: 16, fontWeight: 'bold'}}> Username: </span> {username}
                        </Typography>
                        <Typography className='mt-2'>
                        <span  style={{ fontSize: 16, fontWeight: 'bold'}}> Email: </span> {email}
                        </Typography>
                        <Typography className='mt-2'>
                        <span  style={{ fontSize: 16, fontWeight: 'bold'}}> Gender: </span> {gender}
                        </Typography>
                        <Typography className='mt-2'>
                        <span  style={{ fontSize: 16, fontWeight: 'bold'}}> Date of Birth: </span> {dob}
                        </Typography>
                        <Typography className='mt-2'>
                        <span  style={{ fontSize: 16, fontWeight: 'bold'}}> Marital Status: </span> {marital}
                        </Typography>
                        <Typography className='mt-2'>
                        <span  style={{ fontSize: 16, fontWeight: 'bold'}}> Smoking Status: </span> {smok}
                        </Typography>
                        <Typography className='mt-2'>
                        <span  style={{ fontSize: 16, fontWeight: 'bold'}}> City: </span> {city}
                        </Typography>
                        {past ?
                        <Typography className='mt-2'>
                        <span  style={{ fontSize: 16, fontWeight: 'bold'}}> Note: </span> {note}
                        </Typography> : ""
                        }
                      </CardContent>
                      <Button onClick={() => HandleQuestion()}>View Questionnaire</Button>
                      {/* <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions> */}
                    </Card>
                   
        </Col>

        </Row>
        </Col>
        <Dialog  open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle className="text-center" id="alert-dialog-title">Questionnaire</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" >
                        <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>1) List any health problems and physical limitations</b></label><br></br>
                     &nbsp;&nbsp;&nbsp;{params.state.res1 && params.state.res1 != "undefined" ? params.state.res1 : "none"}
                     </Card> 
                     <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>2) List All Medications and their dosage</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res2 && params.state.res2 != "undefined" ? params.state.res2 : "none"}
                    </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>3) Current Weight</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res3 && params.state.res3 != "undefined" ? params.state.res3 : "none"}
                    </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>4) Current Height</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res4 && params.state.res4 != "undefined" ? params.state.res4 : "none"}
                    </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>5) What was your lowest and highest adult weight? __________lb
                __________lb</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res5 && params.state.res5 != "undefined" ? params.state.res5 : "none"}
                    </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>6) Describe any weight changes (gain or loss) in the past 2</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res6 && params.state.res6 != "undefined" ? params.state.res6 : "none"}
                    </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>7) Have you dieted in the past for weight loss? (No/Yes) If yes,</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res7 && params.state.res7 != "undefined" ? params.state.res7 : "none"}
                    </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>8) How much weight would you like to lose?</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res8 && params.state.res8 != "undefined" ? params.state.res8 : "none"}
                    </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>9) How will you benefit from this weight loss?</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res9 && params.state.res9 != "undefined" ? params.state.res9 : "none"}
                    </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>10) What, if any, regular exercises do you do?</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res10 && params.state.res10 != "undefined" ? params.state.res10 : "none"}
                     </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>11) Who plans the meals at home?</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res11 && params.state.res11 != "undefined" ? params.state.res11 : "none"}
                    </Card>
                    <Card className="p-2 m-2">
                    <label style={textStyles.text} ><b>12) Who prepares the meals at home?</b></label><br></br>
                    &nbsp;&nbsp;&nbsp;{params.state.res12 && params.state.res12 != "undefined" ? params.state.res12 : "none"}
                    </Card>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} style={textStyles.cancel}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        {/* <CardHome /> */}
      </Row>
      {loader && <Loader />}
    </div>
  )
}
