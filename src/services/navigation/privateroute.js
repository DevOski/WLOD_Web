import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Privateroute = (props) => {
  const{Component}=props;
  console.log(props,'===========>propscomponent');
    const navigate=useNavigate()
    const token = useSelector((state) => state.token);
    const [pressed, setPressed] = useState(false)
    useEffect(() => {
      window.onpopstate = e => {
        setPressed(true)
      };
    });
    

    useEffect(() => {
       if(!token){
        navigate("/sigin");
        
       }
      
     
      
     
    },[])
    
    
  return ( 
    <>
   
    <Component/>
    
    </>
  )
}

export default Privateroute