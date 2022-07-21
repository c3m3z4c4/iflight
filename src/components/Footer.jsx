import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Grid, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        bgcolor: "#eeeeee",
      }}
    >
      <Grid container>
        <Grid item md={6} xs={12}>
          <div className="logo-container">
            <img
              src="/assets/IFlight Logo/IFlight Logo.png"
              alt="Foto Logo"
              width="145"
              height="150"
            />
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box display="flex" justifyContent="flex-end">
            <div className="social-container">
              <h3>Contacta con nosotros</h3>
              <br/>
              <a href="https://www.youtube.com/" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.facebook.com/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
