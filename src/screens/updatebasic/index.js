import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./updatebasic.css";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
// <<<<<<< HEAD
import { Error, Loader, BasicExample } from "../../component";

// import { BasicExample, Error, Loader } from "../../component";
// >>>>>>> 640590151c96e6af5a3541c97535cd7622aada5a
import { useDispatch, useSelector } from "react-redux";
import { storeData } from "../../store/action";
import { getUser } from "../../services/utilities/api";
import moment from "moment";
import { setDate } from "date-fns";
import NavSidebar from "../../component/navsidebar";
const UpdateBasic = () => {
  let navigate = useNavigate();
  let search = useSearchParams();
  const params = useLocation();
 console.log("update info params",params.state.data);
  // console.log(location?.state?.email, "====>");
  const [isCheckedWidow, setisCheckedWidow] = useState(false);
  const [isCheckedDivorced, setisCheckedDivorced] = useState(false);
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
  const [error2, setError2] = useState(false);

  const [date, setdate] = useState("");
  const [Divorced, setDivorced] = useState("");
  const [widowed, setwidowed] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const token = useSelector((state) => state.token);
  console.log(token, "===>token");
  const dispatch = useDispatch();
  const Close = () => {
    setloder(false);
    seterror(false);
    setError2(false);
  };
  const Close2 = () => {
    setloder(false);
    setError2(false);
    setTimeout(() => {
      navigate("/Reviewpage",
      {
        state :{
          data: params.state.data,
          edit:"true"
        }
      }
       )
    }, 500);
   
  };
  const update = () => {
    setloder(true);
    console.log("firstname",firstname,"Lastname",Lastname,"gender",gender,"PhoneNumber",PhoneNumber,"maritalStatus",maritalStatus,"language",language,"smokeStatus",smokeStatus,date);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    
    var formdata = new FormData();
    formdata.append("gender", gender);
    formdata.append("marital_status", maritalStatus);
    formdata.append("language", language);
    formdata.append("smoking_status", smokeStatus);
    formdata.append("first_name", firstname);
    formdata.append("last_name", Lastname);
    formdata.append("phone", PhoneNumber);
    formdata.append("dob", date);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://dashboard.weightlossondemand.com/backend/api/update_info", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result,'====>mess')
        if (result.message == "User Updated Successfully") {
                console.log("works----------->>>>", result.message);


                // dispatch(storeData(result.token));
                setloder(false);
                setError2(true);
                setErrorMessage(result.message);
                // setLoader(false);
                setTimeout(() => {
                  // setIsModalVisible(true);
                }, 500);
              }
      })
      .catch(error => console.log('error', error));
    
    // setloder(true);
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", token);
    // var formdata = new FormData();
    // formdata.append("first_name", firstname);
    // formdata.append("middle_name", middle);
    // formdata.append("last_name", Lastname);
    // formdata.append("gender", gender);
    // formdata.append("age", Age);
    // formdata.append("prefix", prefix);
    // formdata.append("suffix", Suffix);
    // formdata.append("phone", PhoneNumber);
    // formdata.append("phone_type", "Mobile");
    // formdata.append("marital_status", maritalStatus);
    // formdata.append("occupation", Occupation);
    // formdata.append("work_hours", WorkHours);
    // formdata.append("last_education", Education);
    // formdata.append("language", language);
    // formdata.append("smoking_status", smokeStatus);
    // formdata.append("marital_status", maritalStatus);

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: "follow",
    // };

    // fetch(
    //   "https://dashboard.weightlossondemand.com/backend/api/user_update",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result, "====>res");
       
    //     if (result.message == "User Updated Successfully") {
    //       console.log("works----------->>>>", result.message);
    //       // dispatch(storeData(result.token));
    //       setloder(false);
    //       setError2(true);
    //       setErrorMessage(result.message);
    //       // setLoader(false);
    //       setTimeout(() => {
    //         // setIsModalVisible(true);
    //       }, 500);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //     setloder(false);
    //     setError2(false);
    //   });
  };
  const handleOnChangeWidowd = () => {
    setisCheckedWidow(true);
    setMaritalStatus("Widowed");
    setisCheckedmarried(false);
    setisCheckedsingle(false);
    setisCheckedDivorced(false);
  };
  const handleOnChangeDivoced = () => {
    setisCheckedDivorced(true);
    setMaritalStatus("Divorced");
    setisCheckedmarried(false);
    setisCheckedsingle(false);
    setisCheckedWidow(false);
   
  };

  const handleOnChangesingle = () => {
    setisCheckedsingle(true);
    setMaritalStatus("Single");
    setisCheckedmarried(false);
    setisCheckedDivorced(false);
    setisCheckedWidow(false);
  };
  const handleOnChangemarried = () => {
    setisCheckedmarried(true);
    setMaritalStatus("Married");
    setisCheckedsingle(false);
      setisCheckedDivorced(false);
    setisCheckedWidow(false);
  };
  const handleOnChangemale = () => {
    setCheckedMale(true);
    setgender("Male");
    setCheckedFemale(false);
  };
  const handleOnChangeFemale = () => {
    setCheckedFemale(!CheckedFemale);
    setgender("Female");
    setCheckedMale(false);
  };
  const handleOnChangeLangeng = () => {
    setisCheckedmarriedenglish(true);
    setLanguage("English");
    setisCheckedSpanish(false);
    setisCheckedOthers(false);
  };
  const handleOnChangeLangspan = () => {
    setisCheckedSpanish(true);
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

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    setloder(true);
    setTimeout(async () => {
      try {
        let response = await getUser(token);
        console.log("userdetails=====>",response.data.data);
        setfirstname(response.data.data.first_name);
        setLastname(response.data.data.last_name);
        setPhoneNumber(response.data.data.phone);
        let dob = response.data.data.date_of_birth.split("");
        // console.log("date------------------------------->>>>>>>>>>>", dob);
        let month = dob[0] + dob[1];
        // console.log("month------------------------------->>>>>>>>>>>", month);
        let date1 = dob[3] + dob[4];
        // console.log("date1------------------------------->>>>>>>>>>>", date1);
        let year = dob[6] + dob[7] + dob[8] + dob[9];
        // console.log("year------------------------------->>>>>>>>>>>", year);
        let finalDate = `${date1}/${month}/${year}`;

        setdate(response.data.data.date_of_birth);
        console.log("moment^^^",moment(date,"DD/MM/YYYY").format("YYYY-MM-DD")); 
        setLanguage(response.data.data.language)
        // setslectnumber(response.data.data.phone_type);
        // setOccupation(response.data.data.occupation);
        // setWorkingHour(response.data.data.work_hour);
        // setAge(response.data.data.age);
        // setWorkingHour(response.data.data.work_hour);
        setEducation(response.data.data.last_education);
        setMaritalStatus(response.data.data.marital_status);
        setSmokeStatus(response.data.data.smoking_status);
        // setsetSuffix(response.data.data.suffix);
        // setPrefix(response.data.data.prefix);
        setgender(response.data.data.gender);
        setMiddle(response.data.data.middle);

        if (response.data.data.language == "English") {
          setisCheckedmarriedenglish(true);
          setisCheckedSpanish(false);
          setisCheckedOthers(false);
        } else if (response.data.data.language == "Spanish") {
          setisCheckedSpanish(true);
          setisCheckedmarriedenglish(false);
        }
        // setCheckedLanguageOther(false);
        // } else if (response.data.data.language == 'Other') {
        //   setCheckedLanguageOther(true);
        //   setCheckedSpanish(false);
        //   setCheckedEnglish(false);
        // }
        if (response.data.data.gender == "Male") {
          setCheckedMale(true);
          setCheckedFemale(false);
          // setCheckedOther(false);
        } else if (response.data.data.gender == "Female") {
          setCheckedMale(false);
          setCheckedFemale(true);
          // setCheckedOther(false);
        } else if (response.data.data.gender == "Other") {
          setCheckedMale(false);
          setCheckedFemale(false);
          // setCheckedOther(true);
        }
        if (response.data.data.marital_status == "Single") {
          setisCheckedsingle(true);
          setisCheckedmarried(false);
          setisCheckedDivorced(false);
          setisCheckedWidow(false);
        } else if (response.data.data.marital_status == "Married") {
          setisCheckedsingle(false);
          setisCheckedmarried(true);
          setisCheckedDivorced(false);
          setisCheckedWidow(false);
        } else if (response.data.data.marital_status == "Divorced") {
          setisCheckedsingle(false);
          setisCheckedmarried(false);
          setisCheckedDivorced(true);
          setisCheckedWidow(false);
        } else if (response.data.data.marital_status == "Widowed") {
          setisCheckedsingle(false);
          setisCheckedmarried(false);
          setisCheckedDivorced(false);
          setisCheckedWidow(true);
        }
        if (response.data.data.smoking_status == "Never") {
          setisSmokingstatusNever(true);
          setisSmokingstatusFormer(false);
          setisSmokingstatusCurrent(false);
        } else if (response.data.data.smoking_status == "Former") {
          setisSmokingstatusNever(false);
          setisSmokingstatusFormer(true);
          setisSmokingstatusCurrent(false);
        } else if (response.data.data.smoking_status == "Current") {
          setisSmokingstatusNever(false);
          setisSmokingstatusFormer(false);
          setisSmokingstatusCurrent(true);
        }
        // setUserName(response.data.data.first_name);
        // dispatch(storeUserData(response.data.data));
        setloder(false);
      } catch (error) {
        console.log(error);
        setloder(false);
      }
    }, 100);
  };
  const enterKye=(e)=>{
    if(e.key==="Enter"){
      update();
      }
    }
  console.log(date);
  return (
    <div className="fulllod maincontainer">
     <div className="navshow">
            <BasicExample/>
        </div>
        <div className="sidenavshow">
        <NavSidebar/>
        </div>
        <div className="mobilediv maincontainer">
        <Row className="maincontainer"> 
              <Col lg='2' md="1" sm="1" xs="1" className="maincontainer">
              </Col>
              <Col lg='8' md="10" sm="10" xs="10" className="maincontainer">
      <div className="maincontainer">
        <form className="mb-3 w-100 pt-3 maincontainer">
          <h3>Update your Info</h3>
          <div className="d-flex gap-2 maincontainer">
            <div className="mb-3 w-50 maincontainer">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={firstname}
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
                value={Lastname}
                onChange={(event) => setLastname(event.target.value)}
                onKeyPress={enterKye}
                />
            </div>
          </div>
          <div className="d-flex gap-2 maincontainer">
            <div className="mb-3  w-50 maincontainer">
              <div className="d-flex flex-column maincontainer">
                <label>Date of birth</label>
                <input
                  type="date"
                  id="date"
                  className="in"
                  value={moment(date,"DD/MM/YYYY").format("YYYY-MM-DD")}
                  onChange={(event) => setdate(moment(event.target.value,"YYYY-MM-DD").format("DD/MM/YYYY"))}
                  onKeyPress={enterKye}
                  placeholder="Date of Birth"
                />
              </div>
            </div>

            <div className="mb-3 w-50 maincontainer">
              <label>Phone number</label>
              <input
                type="number"
                className="form-control"
                placeholder="Preferred Phone Number"
                value={PhoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                onKeyPress={enterKye}
              />
            </div>
          </div>

          <div className="mb-3 ff maincontainer">
            <div className="db maincontainer" >
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
          <div className="mb-3 ff maincontainer">
            <div className="db maincontainer">
              <label>Marital:</label>
              <div className="topping maincontainer">
                <input
                  type="checkbox"
                  id="topping"
                  name="topping"
                  value="Paneer"
                  className="topping"
                  checked={isCheckedsingle}
                  onChange={handleOnChangesingle}
                  onKeyPress={enterKye}
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
                  className="topping"
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
          <div className="bdupdatediv maincontainer">
            <div className="bdupdate maincontainer">
              <Button onClick={update} className="btn btn-primary">
                Update information
              </Button>
            </div>
          </div>
        </form>
       
      </div>
      </Col>
      <Col lg='2' md="1" sm="1" xs="1" className="maincontainer">
              </Col>
          </Row>
      </div>
      {loder && <Loader />}
        {error && <Error onClick={Close} tittle={errorMessage} />}
        {error2 && (
          <Error onClick={Close2} tittle={errorMessage} congrats={true} />
          )}
    </div>
  );
};

export default UpdateBasic;
