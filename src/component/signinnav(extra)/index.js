import React from 'react';
import { Link } from '@material-ui/core';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Button} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import logo from "../../assets/logo.png";
import './style.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, getTrainer } from "../../services/utilities/api";
import { removeData, storeUserData } from "../../store/action";
const SigninNav = () => {
    const [show,setshow] =useState(false)
    
  const [userName, setUserName] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const t_type = useSelector((state) => state.trainerType);
  const token = useSelector((state) => state.token);
  const [tok, settok] = useState(token);
  
    const handleclick = ()=>{
        setshow(!show)
    }
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

  return (
    <>
   <div className="sidenav" style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
        <div className='text-center'><img style={{width: "50%"}} src={logo} /> </div>
        <div style={{width:'40px'}}>
        </div>
   </div>
   {/* #c02130  */}
    
        </>
  );
};

export default SigninNav;