import React from 'react'
import playStore from "../../../Images/playstore.png"
import appStore from "../../../Images/Appstore.png"
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <footer id="footer">
    <div className="leftFooter">
      <h4>DOWNLOAD OUR APP</h4>
      <p>Download App for Android and IOS mobile phone</p>
      <img src={playStore} alt="playstore" />
      <img src={appStore} alt="Appstore" />
    </div>

    <div className="midFooter">
      <h1>Fit-Market.</h1>
      <p>High Quality is our first priority</p>

      <p>Copyrights 2021 &copy; MeRajivKumawat</p>
    </div>

    <div className="rightFooter">
      <h4>Follow Us</h4>
      <a href="https://www.instagram.com/Fit-Market.com_official/?hl=en" style={{display:"flex",alignItems:"center"}} ><InstagramIcon style={{padding:"5px"}}/> Instagram</a>
      <a href="https://www.youtube.com/channel/UC8Alwi_O-7TqF-1xDHZr--Q" style={{display:"flex",alignItems:"center"}}><YouTubeIcon style={{padding:"5px"}}/>Youtube</a>
      <a href="https://www.facebook.com/Fit-Market.comGlobal/" style={{display:"flex",alignItems:"center"}}><FacebookIcon style={{padding:"5px"}}/> Facebook</a>
    </div>
  </footer>
  )
}

export default Footer