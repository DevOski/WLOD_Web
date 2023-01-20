import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { getUser, getTrainer } from "../../services/utilities/api";
import { removeData, storeUserData } from "../../store/action";
import "./nav.css";
function BasicExample() {
  
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const t_type = useSelector((state) => state.trainerType);
  const token = useSelector((state) => state.token);
  const handleLogout = () => {
    if(t_type === "trainer"){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", token);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://dashboard.weightlossondemand.com/backend/api/logout", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log("^^^^",result.staus)
          if(result.staus == 200){
            dispatch(removeData());
            navigate("/sigin");
          }
        })
        .catch(error => console.log('error', error));
    }else{
      dispatch(removeData());
      navigate("/sigin");
    }
   
  };

  const handlesignup = () => {
    navigate("/signup");
  };
  const handlesignIn = () => {
    navigate("/sigin");
  };
console.log(t_type,'t_type=====>');
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    // setLoader(true);
    setTimeout(async () => {
      try {
        if(t_type === "trainer"){
          let response = await getTrainer(token);
          console.log("trainer dataaa",response.data.data.tr_name);
          setUserName(response.data.data.tr_name);
          // console.log(response.data.data.first_name,'====>name');
  
          dispatch(storeUserData(response.data.data));
          // console.log(response.data.data,'====>dispatchlog');
          // setLoader(false);
        }else{
          
          let response = await getUser(token);
          setUserName(response.data.data.first_name);
          // console.log(response.data.data.first_name,'====>name');
  
          dispatch(storeUserData(response.data.data));
          // console.log(response.data.data,'====>dispatchlog');
          // setLoader(false);
        }
      } catch (error) {
        console.log(error);
        // setLoader(false);
      }
    }, 100);
  };

  const [tok, settok] = useState(token);
  console.log(tok, "====>token");
  return (
    <Navbar bg="light" expand="lg">
      {tok  ? (
        <Container>
          <Navbar.Brand href="https://weightlossondemand.com/">
            <img style={{ width: "50%" }} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://weightlossondemand.com/">Home</Nav.Link>
              <Nav.Link
                href="https://weightlossondemand.com/services"
                className="center-link"
              >
                Services
              </Nav.Link>
              <Nav.Link href="https://weightlossondemand.com/contact-us">
                Contact Us
              </Nav.Link>
              <Nav.Link href="https://weightlossondemand.com/shop/">
                Shop
              </Nav.Link>
            </Nav>
            <p className="proname">{userName}</p>
            <div className="logbutt">
            <Button  onClick={handleLogout}>
              Logout
            </Button>
            </div>
           

          </Navbar.Collapse>
        </Container>
      ) : (
        <Container>
          <Navbar.Brand href="https://weightlossondemand.com/">
            <img style={{ width: "50%" }} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://weightlossondemand.com/">Home</Nav.Link>
              <Nav.Link
                href="https://weightlossondemand.com/services"
                className="center-link"
              >
                Services
              </Nav.Link>
              <Nav.Link href="https://weightlossondemand.com/contact-us">
                Contact Us
              </Nav.Link>
              <Nav.Link href="https://weightlossondemand.com/shop/">
                Shop
              </Nav.Link>
            </Nav>
           
<div className="logbutt">

            <Button  onClick={handlesignIn}>
  
              Signin
            </Button>
</div>
<div className="logbutt">

            <Button  onClick={handlesignup}>
              Signup
            </Button>
</div>
            
          </Navbar.Collapse>
        </Container>
      )}
    </Navbar>
  );
}

export default BasicExample;
