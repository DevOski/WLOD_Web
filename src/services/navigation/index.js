import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
  ConfirmAndPay,
  RatingScreen,
  UpdateBasic,
  TrainerHome,
  TrainerCurrentSession,
  TrainerPastSession,
  SessionDetails,
  TrainerVideo,
} from "../../screens";
import Control from '../../screens/videocalingscreen/Controls'

import ThankYou from "../../screens/thankyouscreen";



import Privateroute from "./privateroute";

const Navigation = () => {
  const token = useSelector((state) => state.token);
  const t_type = useSelector((state) => state.trainerType);
  console.log(t_type,'====>type');
  console.log(token, "====>tokennnnnavi");
  const [tok, settok] = useState(token);
  const [pressed, setPressed] = useState(false);
  useEffect(() => {
    window.onpopstate = (e) => {
      setPressed(true);
    };
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sigin"
          element={token ? <Navigate to="/" /> : <Siging />}
        />
        <Route path="/" element={<Privateroute Component={Home} />} />
        {/* <Route path="/" element={<Siging />} /> */}
        <Route
          path="/forget"
          element={token ? <Navigate to="/" /> : <Forget />}
        />
        <Route
          path="/newpass"
          element={token ? <Navigate to="/" /> : <Addnew />}
        />
        <Route
          path="/signup"
          element={token ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/basic"
          element={token ? <Navigate to="/" /> : <Basic />}
        />
        <Route
          path="/Verificationcode"
          element={token ? <Navigate to="/" /> : <VerificationCode />}
        />
        <Route path="/member" element={<Membership />} />
        <Route
          path="/selectdatepage"
          element={<Privateroute Component={SelectDatePage} />}
        />
        <Route
          path="/resonfor"
          element={<Privateroute Component={ReaonForVisit} />}
        />
        <Route
          path="/paybutton"
          element={<Privateroute Component={PayButtonTyp} />}
        />
        <Route path="/cuponpage" element={<Privateroute Component={Cupon} />} />
        <Route
          path="/Videocall"
          element={<Privateroute Component={Videocalling} />}
        />
        <Route
          path="/sessioncall"
          element={<Privateroute Component={Control} />}
        />
        <Route
          path="/apointmentdate"
          element={<Privateroute Component={Appointmentdate} />}
        />
        <Route path="/visit" element={<Privateroute Component={Visitpage} />} />
        <Route
          path="/document"
          element={<Privateroute Component={DocumentPage} />}
        />
        <Route
          path="/provider"
          element={<Privateroute Component={Provider} />}
        />
        <Route path="/visittype" element={<Privateroute Component={VType} />} />
        <Route
          path="/question"
          element={<Privateroute Component={Questionpage} />}
        />
        <Route
          path="/question2"
          element={<Privateroute Component={Questionpagetwo} />}
        />
        <Route
          path="/question3"
          element={<Privateroute Component={Questionpagethree} />}
        />
        <Route
          path="/question4"
          element={<Privateroute Component={Questionpagefour} />}
        />
        <Route
          path="/question5"
          element={<Privateroute Component={Questionpagefive} />}
        />
        <Route
          path="/Reviewpage"
          element={<Privateroute Component={Rewiewpage} />}
        />
        <Route
          path="/Confirmpay"
          element={<Privateroute Component={Confirmpay} />}
        />
        <Route
          path="/Confrimandpay"
          element={<Privateroute Component={ConfirmAndPay} />}
        />
        
        <Route
          path="/booksession"
          element={<Privateroute Component={SessionBook} />}
        />
        <Route path="/trainer" element={<Privateroute Component={Trainer} />} />
        <Route path="/tl" element={<Privateroute Component={TrainerList} />} />
        <Route
          path="/slots"
          element={<Privateroute Component={ChooseSlot} />}
        />
          <Route
          path="/updateinfo"
          element={<Privateroute Component={UpdateBasic} />}
        />
        
        <Route
          path="/chat"
          element={<Privateroute Component={MessageScreen} />}
        />

        <Route path="/rating" element={<Privateroute Component={RatingScreen} />} />
        <Route path="/thankyou" element={<Privateroute Component={ThankYou} />} />
        
        <Route path="/trainermode" element={<Privateroute Component={TrainerHome} />} />
        <Route path="/Currentsession" element={<Privateroute Component={TrainerCurrentSession} />} />
        <Route path="/TrainerPastSession" element={<Privateroute Component={TrainerPastSession} />} />
        <Route path="/sessiondetails" element={<Privateroute Component={SessionDetails}/>} />
        <Route path="/Tsession" element={<Privateroute Component={TrainerVideo}/>} />

        
        


      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
