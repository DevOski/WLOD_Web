import {React,useEffect, useState} from 'react'
import { useLocation} from 'react-router-dom';
import {BasicExample, Loader} from "../../component";
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
const textStyles = {
    cancel: {
        color: 'white',
        backgroundColor:'yellow',
    },
}
export default function SessionDetails() {
  const params = useLocation();
    console.log('params',params.state.token);
    const [username,setusername]= useState("");
    const [email,setemail]= useState("");
    const [marital,setmarital]= useState("");
    const [gender,setgender]= useState("");
    const [smok,setsmok]= useState("");
    const [dob,setdob]= useState("");
    const [city,setcity]= useState("");
  const [loader, setloader] = useState(false)
  const [open, setOpen] = useState(false);

  function handleClose(value) {
    // e.preventDefault();
    setOpen(false);
}
    
    useEffect(() => {
    setloader(true)

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
                      </CardContent>
                      <Button onClick={() => HandleQuestion()}>View Questioniers</Button>
                      {/* <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions> */}
                    </Card>
                   
        </Col>

        </Row>
        </Col>
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title"></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">Are you sure you want to delete record </DialogContentText>
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
