import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Row,Card } from "react-bootstrap";
import "./basic.css";
import moment from "moment";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Error, Loader, BasicExample } from "../../component";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../store/action";
import NavSidebar from "../../component/navsidebar";
import TextField from '@mui/material/TextField';
import AdapterJalali from '@date-io/date-fns-jalali';
import AdapterDateFns from '@date-io/date-fns';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { style } from "@mui/system";

const Basic = () => {
  let navigate = useNavigate();
  let search = useSearchParams();
  const location = useLocation();

  console.log(location?.state?.email, "====>");
  const [isCheckedWidow, setisCheckedWidow] = useState(false)
  const [isCheckedDivorced, setisCheckedDivorced] = useState(false)
  const [isCheckedsingle, setisCheckedsingle] = useState(false);
  const [isCheckedmarried, setisCheckedmarried] = useState(false);
  const [isCheckedenglish, setisCheckedmarriedenglish] = useState(false);
  const [isCheckedSpanish, setisCheckedSpanish] = useState(false);
  const [isCheckedOthers, setisCheckedOthers] = useState(false);
  const [isSmokingstatusNever, setisSmokingstatusNever] = useState(false);
  const [isSmokingstatusFormer, setisSmokingstatusFormer] = useState(false);
  const [isSmokingstatusCurrent, setisSmokingstatusCurrent] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [prefix, setprefix] = useState("");
  const [Age, setAge] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [WorkHours, setWorkHours] = useState("");
  const [Education, setEducation] = useState("");
  const [Suffix, setSuffix] = useState("");
  const [smokeStatus, setSmokeStatus] = useState("");
  const [language, setLanguage] = useState("");
  const [middle, setMiddle] = useState("");
  const [CheckedMale, setCheckedMale] = React.useState(false);
  const [CheckedFemale, setCheckedFemale] = React.useState(false);
  const [gender, setgender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [loder, setloder] = useState(false);
  const [error, seterror] = useState(false);
  const [date, setdate] = useState(null);
  const [Divorced, setDivorced] = useState("");
  const [widowed, setwidowed] = useState('')
  const [errorMessage, setErrorMessage] = useState("");
  const [value, setValue] = useState("mm/dd/yyyy");
  const token = useSelector((state) => state.token);
  console.log(token, "===>token");
  console.log(value,">>>>>>>>>>");
  console.log(moment(value).format('DD/MM/YYYY'));
  const dispatch = useDispatch();
  const Close = () => {
    setloder(false)
    seterror(false);
  };
  const goHome = () => {
    setloder(true);
    setTimeout(() => {
    }, 500);

    var formdata = new FormData();
    formdata.append("first_name", firstname);
    formdata.append("middle_name", middle);
    formdata.append("last_name", Lastname);
    formdata.append("email", location?.state?.email);
    formdata.append("password", location?.state?.Password);
    formdata.append("gender", gender);
    formdata.append("prefix", prefix);
    formdata.append("suffix", Suffix);
    formdata.append("phone", PhoneNumber);
    formdata.append("phone_type", "Mobile");
    formdata.append("dob", location?.state?.date);
    formdata.append("fingerprint", 0);
    formdata.append("occupation", Occupation);
    formdata.append("work_hours", WorkHours);
    formdata.append("age", Age);
    formdata.append("last_education", Education);
    formdata.append("language", language);
    formdata.append("smoking_status", smokeStatus);
    formdata.append("marital_status", maritalStatus);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("https://dashboard.weightlossondemand.com/backend/api/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result,'====>res');
        if (result.token) {
          console.log("works");
          setloder(false);
          dispatch(storeData(result.token));
          navigate("/");
          seterror(false);
        } else {
          setloder(false);
          setErrorMessage(result.message);
          setTimeout(() => {
            // setIsModalVisible(true);
          }, 500);
          seterror(true);
        }
      })
      .catch((error) => {console.log("error", error);setloder(false);});
  };
  const handleOnChangeWidowd = () => {
    setisCheckedWidow(!isCheckedWidow);
    setMaritalStatus("Widowed");
    setisCheckedmarried(false);
    setisCheckedsingle(false);
    setisCheckedDivorced(false);
  };
  const handleOnChangeDivoced = () => {
    setisCheckedDivorced(!isCheckedDivorced);
    setMaritalStatus("Divorced");
    setisCheckedmarried(false);
    setisCheckedsingle(false);
    setisCheckedWidow(false);
  };

  const handleOnChangesingle = () => {
    setisCheckedsingle(!isCheckedsingle);
    setMaritalStatus("Single");
    setisCheckedmarried(false);
  };
  const handleOnChangemarried = () => {
    setisCheckedmarried(!isCheckedmarried);
    setMaritalStatus("Married");
    setisCheckedsingle(false);
  };
  const handleOnChangemale = () => {
    setCheckedMale(!CheckedMale);
    setgender("Male");
    setCheckedFemale(false);
  };
  const handleOnChangeFemale = () => {
    setCheckedFemale(!CheckedFemale);
    setgender("Female");
    setCheckedMale(false);
  };
  const handleOnChangeLangeng = () => {
    setisCheckedmarriedenglish(!isCheckedenglish);
    setLanguage("English");
    setisCheckedSpanish(false);
    setisCheckedOthers(false);
  };
  const handleOnChangeLangspan = () => {
    setisCheckedSpanish(!isCheckedSpanish);
    setLanguage("Spanish");
    setisCheckedmarriedenglish(false);
    setisCheckedOthers(false);
  };
  const handleOnChangeLangother = () => {
    setisCheckedOthers(true);
    setLanguage("Other");
    setisCheckedmarriedenglish(false);
    setisCheckedSpanish(false);
  };
  const handleOnChangesmokinstatusnever = () => {
    setisSmokingstatusNever(true);
    setSmokeStatus("Never");
    setisSmokingstatusFormer(false);
    setisSmokingstatusCurrent(false);
  };
  const handleOnChangesmokinstatusformer = () => {
    setisSmokingstatusFormer(true);
    setSmokeStatus("Former");
    setisSmokingstatusNever(false);
    setisSmokingstatusCurrent(false);
  };
  const handleOnChangesmokinstatuscurrent = () => {
    setisSmokingstatusCurrent(true);
    setSmokeStatus("Current");

    setisSmokingstatusNever(false);
    setisSmokingstatusFormer(false);
  };
  const enterKye=(e)=>{
    if(e.key==="Enter"){
      goHome();
      }
    }
  return (
    <div className="fulllod maincontainer" >
      <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar />
        </div>
      <div className="maincontainer">
      <Container className="maincontainer">
        <Card className="basicinfocard maincontainer">
        <form className="mb-3 w-100 pt-3 ">
          <h3>Basic Info</h3>
         <div className="d-flex gap-2 maincontainer">
         <div className="mb-3 w-50 maincontainer">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(event) => setfirstname(event.target.value)}
              onKeyPress={enterKye}
              />
          </div>
          <div className="mb-3 w-50 maincontainer">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(event) => setLastname(event.target.value)}
              onKeyPress={enterKye}
            />
          </div>
         </div>
         <div className="d-flex gap-2 maincontainer" >
         
        <div className=" w-50 d-flex flex-column maincontainer" style={{marginTop:'2px'}}>
        <label>Date of birth</label>
            {/* <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              // onChange={(event) => setdate(event.target.value)}
              // placeholder="Date of Birth"
              // onKeyPress={enterKye}
              /> */}
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
              
                value={value}
                onChange={(event) => setValue(event)}
                renderInput={(props) => (
                  <TextField {...props} helperText=""
                  
                  sx={{
                    '.MuiInputBase-input': {padding: 1,border:'none'},
                    "& .MuiInputBase-root": {
                      border: "none !important", width:'100%',backgroundColor:'white !important'}
                 }}
                 />
                  
                )}
                />
            </LocalizationProvider>
          </div>
          <div className="mb-3 w-50 maincontainer">
            <label>Phone number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              onChange={(event) => setPhoneNumber(event.target.value)}
              onKeyPress={enterKye}
            />
          </div>

         </div>
         
        
           <div className="mb-3 ff maincontainer">
            <div className="db maincontainer">
            <label>Gender:</label>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  className="topping"
                  checked={CheckedMale}
                  onChange={handleOnChangemale}
                  onKeyPress={enterKye}
                />
                <p className="pleft">Male</p>
              </div>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  checked={CheckedFemale}
                  className="topping"
                  onChange={handleOnChangeFemale}
                  onKeyPress={enterKye}
                />
                <p className="pleft">Female</p>
              </div>
            </div>
          </div>
          <div className="mb-3 maincontainer">
            <div className="dbform maincontainer">
              <Row>
                <Col lg="1" md="1" sm="2" xs="2" className="maincontainer">
            <label>Marital:</label>

                </Col>
                <Col lg="11" md="11" sm="10" xs="10" className="maincontainer" style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                <div className="topping1 maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  className="topping custom-controls-stacked"
                  checked={isCheckedsingle}
                  onKeyPress={enterKye}
                  onChange={handleOnChangesingle}
                />
                <p className="pleft">Single</p>
              </div>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  checked={isCheckedmarried}
                  className="topping custom-controls-stacked"
                  onChange={handleOnChangemarried}
                  onKeyPress={enterKye}
                />
                <p className="pleft">Married</p>
              </div>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  checked={isCheckedDivorced}
                  className="topping"
                  onChange={handleOnChangeDivoced}
                  onKeyPress={enterKye}
                />
                <p className="pleft">Divorced</p>
              </div>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  checked={isCheckedWidow}
                  className="topping"
                  
                  onChange={handleOnChangeWidowd}
                  onKeyPress={enterKye}
                />
                <p className="pleft">Widowed</p>
              </div>
                </Col>
                {/* <Col lg="4" md="6" sm="6" xs="6"></Col> */}
              </Row>
            
            </div>
          </div>
         
          <div className="mb-3 ff maincontainer">
            <div className="db leftin maincontainer">
            <label>Language:</label>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="English"
                  className="topping"
                  checked={isCheckedenglish}
                  onChange={handleOnChangeLangeng}
                  onKeyPress={enterKye}
                />
                <p className="pleft">English</p>
              </div>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Spanish"
                  checked={isCheckedSpanish}
                  className="topping"
                  onChange={handleOnChangeLangspan}
                  onKeyPress={enterKye}
                />
                <p className="pleft">Spanish</p>
              </div>
              
            </div>
          </div>
          <div className="mb-3 ff maincontainer">
            <label>Smoking:</label>
            <div className="db maincontainer">
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Never"
                  className="topping"
                  checked={isSmokingstatusNever}
                  onKeyPress={enterKye}
                  onChange={handleOnChangesmokinstatusnever}
                />
                <p className="pleft">Never</p>
              </div>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Former"
                  checked={isSmokingstatusFormer}
                  className="topping"
                  onKeyPress={enterKye}
                  onChange={handleOnChangesmokinstatusformer}
                />
                <p className="pleft">Former</p>
              </div>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Current"
                  checked={isSmokingstatusCurrent}
                  className="topping"
                  onKeyPress={enterKye}
                  onChange={handleOnChangesmokinstatuscurrent}
                />
                <p className="pleft">Current</p>
              </div>
            </div>
          </div>

          <div className="bdivsignup maincontainer">
            <Button onClick={goHome} className="btn btn-primary">
              Sign Up
            </Button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sigin">Sign in?</a>
          </p>
        </form>
        </Card>
        </Container>
        </div>
      {loder && 
      <Loader />}
      {error && <Error onClick={Close} tittle={errorMessage} />}
    </div>
  );
};

export default Basic;
