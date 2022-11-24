import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { About, Basic, Confirmpay, DocumentPage, Home, Provider, Questionpage, Questionpagefive, Questionpagefour, Questionpagethree, Questionpagetwo, Rewiewpage, SessionBook, Siging, Trainer, Visitpage, VType } from '../../screens'



const Navigation = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
         <Route path="/" element={<Siging />} /> 
        <Route path="/sigin" element={<Siging />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/home" element={<Home />} />
         <Route path="/visit" element={<Visitpage />} />
         <Route path="/document" element={<DocumentPage />} />
         <Route path="/provider" element={<Provider />} />
           <Route path="/visittype" element={<VType />} /> 
           <Route path="/question" element={<Questionpage />} /> 
           <Route path="/question2" element={<Questionpagetwo />} /> 
           <Route path="/question3" element={<Questionpagethree />} /> 
           <Route path="/question4" element={<Questionpagefour/>} /> 
           <Route path="/question5" element={<Questionpagefive/>} /> 
           <Route path="/Reviewpage" element={<Rewiewpage/>} /> 
           <Route path="/Confirmpay" element={<Confirmpay/>} /> 
           <Route path="/booksession" element={<SessionBook/>} /> 
           <Route path="/trainer" element={<Trainer/>} /> 
           

           
           
           

           

        
       
      </Route>   
    </Routes>
  </BrowserRouter>
  )
}

export default Navigation