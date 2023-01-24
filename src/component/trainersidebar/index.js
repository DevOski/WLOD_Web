import React from 'react'
import './slide.css'
import { MdExpandLess } from "@react-icons/all-files/md/MdExpandLess";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { Link } from "react-router-dom";
import { useState } from 'react';
const TrainerSideBar = () => {
    const [show, setshow] = useState(false);
    const [drawer, setdrawer] = useState(true);
    const open = () => {
        setshow(!show);
      };
      const opendarwer = () => {
        setdrawer(!drawer);
      };
  return (  
<div>
      <div className='maindiv' >
       {/* style={{border:'solid lightblue'}} */}
                <div className='content'>
                <Link className="tit" to="/trainermode">
                   Upcomming session
               </Link>
                
                </div>
                <div className='content'>
                <Link className="tit" to="/Currentsession">
                   Current Session
                 </Link>
                </div>
                <div className='content'>
                <Link className="tit" to="/TrainerPastSession">
                 Past sessions
               </Link>
                </div>
            </div>
      </div>
  





  //   <div
  //   className="maindeowercontainerreal "
  // >
  //   {/* <GiHamburgerMenu  className="ham" /> */}

  //   <div className="cent">
  //     <div className="back">
  //       {/* <Link className="tit" to="/">
  //         Home
  //       </Link> */}
  //     </div>
  //   </div>
  //   {/* <div className="cent">
  //     <div className="back2">
  //       <p className="tit">MY PROFILE</p>
  //       <p>
  //         <MdExpandLess onClick={open} className="expand" />
  //       </p>
  //     </div>
  //   </div> */}
  //   {/* {!show ? ( */}
  //     <div className="cent2">
  //       <div className="backkk"></div>
       
  //       <div className="back33">
  //       <Link className="tit up" to="/trainermode">
  //         Upcomming session
  //       </Link>
  //         <Link className="tit" to="/Currentsession">
  //           Current Session
  //         </Link>

  //         {/* <Link className="tit" to="/provider">
  //           My consultants
  //         </Link> */}
  //         {/* <Link className="tit" to="/document">
  //           Document
  //         </Link> */}
  //         <Link className="tit" to="/TrainerPastSession">
  //           Past sessions
  //         </Link>
  //       </div>
  //     </div>
  //   {/* ) : null} */}
  // </div>
  )
}

export default TrainerSideBar