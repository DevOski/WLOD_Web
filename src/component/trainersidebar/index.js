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
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import logo from "../../assets/logo.png";
import './slide.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, getTrainer } from "../../services/utilities/api";
import { removeData, storeUserData } from "../../store/action";
const TrainerSideBar = () => {
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
   
    {tok  ? (
    <div className="sidenav" style={{display:'flex',flexDirection:'row',justifyContent: 'space-between',position:'fixed',width:'100%',zIndex:1000,height:'70px'}}>
         
         <div style={{width:'60px'}}><button style={{height:'100%',width:'100%',border:'none'}} onClick={handleclick}><i className="fa fa-bars fa-large"></i></button></div>
         <div  className='nav-b' style={{display:'flex',alignItems:'center',justifyContent:'center'}}><img style={{width: "50%"}} src={logo} /> </div>
         <div style={{width:'40px'}}>
           <button onClick={handleLogout} className="sidenav" style={{height:'100%',width:'100%',border:'darkgrey'}}>
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
               <path d="M7.5 1v7h1V1h-1z"/>
               <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
               </svg>
           </button>
         </div>
    </div>
    // {/* #c02130  */}
     
    ) : (
      <div className="sidenav" style={{display:'flex',flexDirection:'row',width:'100%',zIndex:1000,height:'70px'}}>

        <div className='nav-b' style={{display:'flex',alignItems:'center'}}><img style={{width: "90%"}} src={logo} /> </div>
        <div className='nav-b' style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',alignItems:'center',width:'100%'}}>
          <div className='nav-b' style={{margin:'0px 8px 0px 0px'}}>
            <Button style={{padding:'6px 18px'}} onClick={handlesignIn}>
              Signin
            </Button>
          </div>
          <div className='nav-b' style={{margin:'0px 8px 0px 0px'}}>
            <Button style={{padding:'6px 18px'}} onClick={handlesignup}>
            Signup
          </Button>
          </div>
        </div>
   </div>)}

   {show &&
     <div className='b-navside' style={{minHeight:'80vh',position:'fixed',top:70,bottom: 0,width:'100%',backgroundColor:'rgba(255,255,255,0.3)',zIndex:1000}}>
       <div className='maincontainer' style={{minHeight:'80vh',position:'fixed',top:70,bottom: 0,backgroundColor:'white',width:'270px',border:'solid lightgrey'}}>
         <div className='maincontainer'>
           <div className='maincontainer'>
               <h4 className='pt-3 pb-2' style={{padding:'30px'}}>Hi {userName},</h4>
           </div>
          <hr></hr>
          <div className='maincontainer' style={{display:'flex',flexDirection:'column',margin:'50px 0px 50px 40px'}}>
          
               <a href='/trainermode' className='pt-2 pb-2 navlink'> Upcomming session</a>
             <a href='/Currentsession' className='pt-2 pb-2 navlink'>Current Session</a>
             <a href='/TrainerPastSession' className='navlink pt-2 pb-2'>Past sessions</a>
             </div>
             <div className='pt-4 mt-4 maincontainer'> 
             <Link className='pt-4 mt-4 maincontainer'>
             <div className='maincontainer' style={{marginLeft:'12%',marginRight:'12%'}}>
             <Button onClick={handleLogout} >
               Logout
             </Button>
               </div>
             </Link>
           </div>
         </div>
       </div>
     </div> 
     }
         </>
  //   <>
  //  <div className="sidenav" style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>
        
  //       <div style={{width:'60px'}}><button style={{height:'100%',width:'100%',border:'darkgrey'}} onClick={handleclick}><i className="fa fa-bars fa-large"></i></button></div>
  //       <div className='text-center'><img style={{width: "50%"}} src={logo} /> </div>
  //       <div style={{width:'40px'}}>
  //         <button onClick={handleLogout} className="sidenav" style={{height:'100%',width:'100%',border:'darkgrey'}}>
  //             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
  //             <path d="M7.5 1v7h1V1h-1z"/>
  //             <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
  //             </svg>
  //         </button>
  //       </div>
  //  </div>
  //  {/* #c02130  */}
  //   {show &&
  //   <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial',position:'absolute',width:'100%',backgroundColor:'rgba(255,255,255,0.3)',zIndex:1000}}>
  //     <CDBSidebar textColor="black" backgroundColor="white" style={{border:"solid lightgrey"}}>
  //       {/* <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
         
  //       </CDBSidebarHeader> */}

  //       <CDBSidebarContent className="sidebar-content">
  //         <CDBSidebarMenu>
  //           <NavLink exact to="/" activeClassName="activeClicked">
  //             <CDBSidebarMenuItem>Home</CDBSidebarMenuItem>
  //           </NavLink>
  //           <NavLink exact to="/visit" activeClassName="activeClicked">
  //             <CDBSidebarMenuItem >Recent Session</CDBSidebarMenuItem>
  //           </NavLink>
  //           <NavLink exact to="/chat" activeClassName="activeClicked">
  //             <CDBSidebarMenuItem >Message</CDBSidebarMenuItem>
  //           </NavLink>
  //           <NavLink>
  //             <div className="text-center">

  //           <p className="mt-4 pt-4">{userName}</p>
  //           <div  style={{marginLeft:'12%',marginRight:'12%'}}>
  //           <Button onClick={handleLogout} >
  //             Logout
  //           </Button>
  //           </div>
  //             </div>
            
  //           </NavLink>
  //         </CDBSidebarMenu>
  //       </CDBSidebarContent>

  //       {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
  //         <div
  //         style={{
  //             padding: '20px 5px',
  //           }}
  //           >
  //           Sidebar Footer
  //           </div>
  //       </CDBSidebarFooter> */}
  //     </CDBSidebar>
  //   </div>
  //   }
  //       </>
  );
};

export default TrainerSideBar;