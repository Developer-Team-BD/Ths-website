import { Grid, Typography, Paper } from "@mui/material";
// import { Paper,  } from "@mui/system";
import React from "react";

import telegram from "../assets/social/telegram.png";
import twiter from "../assets/social/twiter.png";
import instagram from "../assets/social/Instagram.png";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        // marginTop: "auto",
        // position: "absolute",
        // bottom: "0px",
        // top: "95vh",
        // width: "100%",
        justifyContent: "center",
      }}
    >
      <Paper
        style={{
          width: "100%",

          padding: "10px 0px",
          marginTop: "20px",
          background: "rgba(0, 0, 0, 0.14)",
        }}
      >
        <Grid container justifyContent={"space-around"} alignItems={"center"}>
          <Grid item md={6} style={{ padding: "10px 20px" }}>
            <Typography
              color={"#000"}
              style={{
                fontSize: "14px",
                textAlign: "center",
                fontWeight: "900",
              }}
            >
              © 2022 TSH | PRIVACY POLICY | TERM & CONDITION
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            alignItems={"center"}
            style={{ padding: "10px 20px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  padding: "0px 10px",
                }}
              >
                <img src={telegram} style={{ height: "20px" }} />
              </div>
              <div
                style={{
                  padding: "0px 10px",
                }}
              >
                <img src={twiter} style={{ height: "20px" }} />
              </div>
              <div
                style={{
                  padding: "0px 10px",
                }}
              >
                <img src={instagram} style={{ height: "20px" }} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Footer;
