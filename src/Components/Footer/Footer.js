import React from 'react'
import playStore from "../../assets/images/playstore.png";
import AppStore from "../../assets/images/Appstore.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
         <>
   <footer id='footer'>
       <div className='left'>
           <h4>Download Our App</h4>
           <p>Download Our app for Android and IOS Monile App</p>
           <img src ={playStore} alt="playstore" />
           <img src ={AppStore} alt="Appstore" />
       </div>
       <div className='center'>
           <h1>E-MADADGAR</h1>
           <Link href="#"><AddLocationAltIcon color = "warning" sx={{ fontSize: 30 }}/><span>Gulshan-E-Maymar, Karachi</span></Link> 
           <p>Copyright 2022 &copy; Imran_Younas</p>
       </div>
       <div className="right box">
       <div className="topic">Subscribe us</div>
       <form action="#">
         <input type="text" placeholder="Enter email address"/>
         <input type="submit" name="" value="Send" />
         <div className="media-icons">
           <span className="text-primary"  ><FacebookIcon /></span>
           <span className="text-danger"   ><InstagramIcon/></span>
           <span className="text-primary"   ><LinkedInIcon/></span>
           <span className="text-danger"   ><GoogleIcon/></span>
           <span className="text-danger"   ><YouTubeIcon/></span>
         </div>
       </form>
    </div>
    </footer>
        </>   
    )
}

export default Footer