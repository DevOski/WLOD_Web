import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap"
import './basic.css';
import Form from 'react-bootstrap/Form';
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import { BasicExample, Error, Loader } from "../../component";
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../store/action";
const Basic = () => {
  let navigate = useNavigate(); 
 let search=useSearchParams();
 const location = useLocation();

 console.log(location.state.email,'====>');
  const [isCheckedsingle, setisCheckedsingle,] = useState(false);
  const [isCheckedmarried, setisCheckedmarried] = useState(false);
  const [isCheckedenglish, setisCheckedmarriedenglish] = useState(false);
  const [isCheckedSpanish, setisCheckedSpanish] = useState(false);
  const [isCheckedOthers, setisCheckedOthers] = useState(false);
  const [isSmokingstatusNever, setisSmokingstatusNever] = useState(false);
  const [isSmokingstatusFormer, setisSmokingstatusFormer] = useState(false);
  const [isSmokingstatusCurrent, setisSmokingstatusCurrent] = useState(false);
  const [firstname, setfirstname] = useState('')
  const [Lastname, setLastname] = useState('')
  const [prefix, setprefix] = useState('')
  const [Age, setAge] = useState('')
  const [PhoneNumber, setPhoneNumber] = useState('')
  const [Occupation, setOccupation] = useState('')
  const [WorkHours, setWorkHours] = useState('')
  const [Education, setEducation] = useState('')
  const [Suffix, setSuffix] = useState('')
  const [smokeStatus, setSmokeStatus] = useState('');
  const [language, setLanguage] = useState('');
  const [middle, setMiddle] = useState('');
  const [CheckedMale, setCheckedMale] = React.useState(false);
  const [CheckedFemale, setCheckedFemale] = React.useState(false);
  const [gender, setgender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [loder, setloder] = useState(false)
  const [error, seterror] = useState(false)
const [errorMessage, setErrorMessage] = useState('');
const token=useSelector(state=> state.token)
console.log(token,'===>token');
const dispatch = useDispatch();
const Close=()=>{
  seterror(false)
}
  const goHome=()=>{
    setTimeout(() => {
      setloder(true)
    }, 500);
   
    var formdata = new FormData();
    formdata.append('first_name', firstname);
    formdata.append('middle_name', middle);
    formdata.append('last_name', Lastname);
    formdata.append('email', location?.state?.email);
    formdata.append('password', location?.state?.Password);
    formdata.append('gender', gender);
    formdata.append('prefix', prefix);
    formdata.append('suffix', Suffix);
    formdata.append('phone', PhoneNumber);
    formdata.append('phone_type', 'Mobile');
    formdata.append('dob', location?.state?.date);
    formdata.append('fingerprint',  0);
    formdata.append('occupation', Occupation);
    formdata.append('work_hours', WorkHours);
    formdata.append('age', Age);
    formdata.append('last_education', Education);
    formdata.append('language', language);
    formdata.append('smoking_status', smokeStatus);
    formdata.append('marital_status', maritalStatus);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch('http://alsyedmmtravel.com/api/signup', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.token) {
          setloder(false)
          dispatch(storeData(result.token));
          navigate('/home');
          seterror(false);
        } else {
          setloder(false)
          setErrorMessage(result.message);
          setTimeout(() => {
            // setIsModalVisible(true);
          }, 500);
          seterror(true);
        }
      })
      .catch(error => console.log('error', error));
  }

  const handleOnChangesingle = () => {
  
    setisCheckedsingle(!isCheckedsingle);
    setMaritalStatus('single')
    setisCheckedmarried(false)
    
   
  };
  const handleOnChangemarried = () => {
  
   

    setisCheckedmarried(!isCheckedmarried)
    setMaritalStatus('married')
    setisCheckedsingle(false);
  };
  const handleOnChangemale = () => {
  
    setCheckedMale(!CheckedMale);
    setgender('Male')
    setCheckedFemale(false)
    
    
  };
  const handleOnChangeFemale = () => {
    
    
    
    setCheckedFemale(!CheckedFemale)
    setgender('Female')
    setCheckedMale(false);
  };
  const handleOnChangeLangeng = () => {
    setisCheckedmarriedenglish(!isCheckedenglish);
    setLanguage('english')
    setisCheckedSpanish(false);
    setisCheckedOthers(false)
   
  };
  const handleOnChangeLangspan = () => {
    setisCheckedSpanish(!isCheckedSpanish);
    setLanguage('Spanish')
    setisCheckedmarriedenglish(false);
    setisCheckedOthers(false)
   
  };
  const handleOnChangeLangother = () => {
    setisCheckedOthers(!isCheckedOthers)
    setLanguage('other')
    setisCheckedmarriedenglish(false);
    setisCheckedSpanish(false);
   
  };
  const handleOnChangesmokinstatusnever = () => {
    setisSmokingstatusNever(!isSmokingstatusNever);
    setSmokeStatus('never')
    setisSmokingstatusFormer(false);
    setisSmokingstatusCurrent(false)
   
  };
  const handleOnChangesmokinstatusformer = () => {
    setisSmokingstatusFormer(!isSmokingstatusFormer);
    setSmokeStatus('former')
    setisSmokingstatusNever(false);
    setisSmokingstatusCurrent(false)
   
  };
  const handleOnChangesmokinstatuscurrent = () => {
    setisSmokingstatusCurrent(!isSmokingstatusCurrent)
    setSmokeStatus('current')

    setisSmokingstatusNever(false);
    setisSmokingstatusFormer(false);
   
  };
  return (
    <>
    <BasicExample />
      {/* <Navbar expand="lg" variant="light" bg="light">
        <Container fluid>
          <Navbar.Brand href="#">
            <img style={{ width: "50%" }} src={logo} />
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <Container className="pad">
      <form>
        <h3>Basic</h3>
        <div className="mb-3">
          <label>First-Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First-name"
            onChange={event => setfirstname(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Last-Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last-name"
            onChange={event => setLastname(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Middel-Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Middel-Name"
            onChange={event => setMiddle(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="Age"
            onChange={event => setAge(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Suffix</label>
          <input
            type="text"
            className="form-control"
            placeholder="sufix"
            onChange={event => setSuffix(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>prefix</label>
          <input
            type="text"
            className="form-control"
            placeholder="sufix"
            onChange={event => setprefix(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Preferred Phone Number</label>
          <input type="text" className="form-control" placeholder="Preferred Phone Number"  onChange={event => setPhoneNumber(event.target.value)} />
        </div>
        <div className="mb-3">
          <label>Occupation:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Occupation:"
            onChange={event => setOccupation(event.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label>Work Hours:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Work Hours:"
            onChange={event => setWorkHours(event.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label>Highest Level of Education::</label>
          <input
            type="text"
            className="form-control"
            placeholder="Highest Level of Education"
            onChange={event => setEducation(event.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label>Marital Status:</label>
          <div className="d">
          <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          className="topping"
          checked={isCheckedsingle}
          onChange={handleOnChangesingle}
        />
        <p className="pleft">Single</p>
      </div>
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isCheckedmarried}
          className="topping"
          onChange={handleOnChangemarried}
        />
        <p className="pleft">Married</p>
      </div>
          </div>
      
        </div>
        <div className="mb-3">
          <label>Gender:</label>
          <div className="d">
          <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          className="topping"
          checked={CheckedMale}
          onChange={handleOnChangemale}
        />
        <p className="pleft">Male</p>
      </div>
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={CheckedFemale}
          className="topping"
          
          onChange={handleOnChangeFemale}
        />
        <p className="pleft">Female</p>
      </div>
          </div>
      
        </div>
        <div className="mb-3">
          <label>Primary Language :</label>
          <div className="d">
          <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="English"
          className="topping"
          checked={isCheckedenglish}
          onChange={handleOnChangeLangeng}
        />
        <p className="pleft">English</p>
      </div>
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Spanish"
          checked={isCheckedSpanish}
          className="topping"
          onChange={handleOnChangeLangspan}
        />
        <p className="pleft">Spanish</p>
      </div>
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="others"
          checked={isCheckedOthers}
          className="topping"
          onChange={handleOnChangeLangother}
        />
        <p className="pleft">Others</p>
      </div>
          </div>
      
        </div>
        <div className="mb-3">
          <label>Smoking status:</label>
          <div className="d">
          <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Never"
          className="topping"
          checked={isSmokingstatusNever}
          onChange={handleOnChangesmokinstatusnever}
        />
        <p className="pleft">Never</p>
      </div>
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Former"
          checked={isSmokingstatusFormer}
          className="topping"
          onChange={handleOnChangesmokinstatusformer}
        />
        <p className="pleft">Former</p>
      </div>
      <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Current"
          checked={isSmokingstatusCurrent}
          className="topping"
          onChange={handleOnChangesmokinstatuscurrent}
        />
        <p className="pleft">Current</p>
      </div>
          </div>
      
        </div>
     
 
        <div className="d-grid">
          <Button onClick={goHome} className="btn btn-primary">
            Sign Up
          </Button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sigin">sign in?</a>
        </p>
      </form>

        {/* <Row className="d-flex justify-content-center ">
        <h2 className="d-flex justify-content-center wo">Basic Info</h2>
          <Col lg='5'className="d-flex justify-content-center align-items-center flex-column bg2">
            <div lg='10' className="d-flex justify-content-center align-items-center flex-column">
                <h2>Set Up Your Profile</h2>
                <p>Let’s get started with some basic information</p>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label>First Name</label>
                <input className="input" type='first name' placeholder="first name"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label>Middle Name (optional)</label>
                <input  className="input" type='first name' placeholder="Middle Name (optional)"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label>Last Name</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
            <div className="d-flex justify-content-between f2">
            <div className="d-flex justify-content-center  flex-column  ">
                <label>Phone Number</label>
                <input className="input2" type='first name' placeholder="Last Name"/>
            </div>
            
           
            <div className="d-flex justify-content-center  flex-column ">
                <label>Type</label>
                <input className="input2" type='first name' placeholder="Last Name"/>
            </div>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label> Marital Status:</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label> Occupation</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label>  Work Hours:</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
            <div className="d-flex justify-content-center  flex-column wi">
                <label> Highest Level of Education:</label>
                <input className="input" type='first name' placeholder="Last Name"/>
            </div>
           
            <div lg="6" className="fl flex-column">
            <label style={{paddingbottom:"1%"}}>Primary Language </label>
           <div className='fl justify-content-space-between' > 
           {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
           </div>
            </div>
            <div lg="6" className="fl flex-column">
            <label style={{paddingbottom:"1%"}}>Smoking status:  </label>
           <div className='fl justify-content-space-between' > 
           {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
           </div>
            </div>
            <div lg="6" className="fl">
            {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
              {['checkbox',].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            // id={`default-${type}`}
            label={`Male `}
          /></div>))}
            </div>
            <div className="d-flex justify-content-center align-items-center ">
                <p className="pp">
                By providing your mobile number, you give us permission to contact you via text. View Terms
                </p>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-10 wiiii ">
               <Button className="bu">Continue</Button>
            </div>
          </Col>
        </Row> */}
      </Container>
      {
        loder && <Loader/>
      }
      {error && <Error onClick={Close} tittle={errorMessage}/>}
    </>
  );
};

export default Basic;
