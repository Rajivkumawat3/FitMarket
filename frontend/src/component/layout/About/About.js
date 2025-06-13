import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/Fit-Market.com_official/?hl=en";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://scontent.fidr5-1.fna.fbcdn.net/v/t39.30808-6/308710252_438307198284432_2653046093866971622_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fcgk3XAdZqYQ7kNvwGoq3Ug&_nc_oc=AdlnR1_ueno0irzp_J6L-SLeopwfPOXAtzZkbfSRIYhkY_CBUFRuXwkLszR8NETfFwA&_nc_zt=23&_nc_ht=scontent.fidr5-1.fna&_nc_gid=6jzj3OIBsJXb3XszITqZ6w&oh=00_AfK25yTBKnsknZrWNp8Zlr2IYagesdi3-l7zdqvPh30ajg&oe=683E1BB4"
              alt="Founder"
            />
            <Typography>Founder : Rajiv Kumawat</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
  At Fit-Market, we’re building more than just an online store — we're creating a space where people find products they trust and businesses find the customers they deserve. Our goal is to empower small sellers, deliver real value to consumers, and grow together with our community. We aim to serve millions of users in the coming years while staying rooted in transparency, quality, and trust.
</span>

          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UC9awv94A7WzWuTUP2frSuDA"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/Fit-Market.com_official/?hl=en" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;