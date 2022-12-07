import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SignUp,
  Addnew,
  Appointmentdate,
  Basic,
  Confirmpay,
  Cupon,
  DocumentPage,
  Forget,
  Home,
  PayButtonTyp,
  Provider,
  Questionpage,
  Questionpagefive,
  Questionpagefour,
  Questionpagethree,
  Questionpagetwo,
  ReaonForVisit,
  Rewiewpage,
  SelectDatePage,
  SessionBook,
  Siging,
  Trainer,
  Visitpage,
  VType,
  TrainerList,
  ChooseSlot,
  Videocalling,
  VerificationCode,
  MessageScreen,
  Membership,
} from "../../screens";

const Navigation = () => {
  const token = useSelector((state) => state.token);
  console.log(token, "====>token");
  const [tok, settok] = useState(token);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Siging />} />
          <Route path="/sigin" element={<Siging />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/newpass" element={<Addnew />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/Verificationcode" element={<VerificationCode />} />
          <Route path="/member" element={<Membership />} />
         

          <Route path="/home" element={<Home />} />
          <Route path="/selectdatepage" element={<SelectDatePage />} />
          <Route path="/resonfor" element={<ReaonForVisit />} />
          <Route path="/paybutton" element={<PayButtonTyp />} />
          <Route path="/cuponpage" element={<Cupon />} />
          <Route path="/Videocall" element={<Videocalling />} />

          <Route path="/apointmentdate" element={<Appointmentdate />} />
          <Route path="/visit" element={<Visitpage />} />
          <Route path="/document" element={<DocumentPage />} />
          <Route path="/provider" element={<Provider />} />
          <Route path="/visittype" element={<VType />} />
          <Route path="/question" element={<Questionpage />} />
          <Route path="/question2" element={<Questionpagetwo />} />
          <Route path="/question3" element={<Questionpagethree />} />
          <Route path="/question4" element={<Questionpagefour />} />
          <Route path="/question5" element={<Questionpagefive />} />
          <Route path="/Reviewpage" element={<Rewiewpage />} />
          <Route path="/Confirmpay" element={<Confirmpay />} />
          <Route path="/booksession" element={<SessionBook />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/tl" element={<TrainerList />} />
          <Route path="/slots" element={<ChooseSlot />} />
          <Route path="/chat" element={<MessageScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
