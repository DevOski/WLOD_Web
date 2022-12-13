import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Privateroute = ({children,...rest}) => {
    const Navigate=useNavigate()
    const token = useSelector((state) => state.token);
    const [tok, settok] = useState(token);
    settok(token);
  return ( <Route {...rest} render={()=> tok ? (children):(<Navigate to='/'/>)}/>)
}

export default Privateroute