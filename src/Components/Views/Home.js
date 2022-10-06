import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import Img from "../assets/StakedImage.png";
import Ring from "../assets/Ring.png";
import SelectedRing from "../assets/SelectedRing.png";
import Stacke from "./Stacke";
import Unstake from "./Unstake";
import { useMediaQuery } from "react-responsive";

import Jiraf from "../assets/Jiraf.png";
import one from "../assets/Button/1.png";
import two from "../assets/Button/2.png";
import three from "../assets/Button/3.png";
import four from "../assets/Button/4.png";

const Home = () => {
  const stakedData = [
    {
      img: Img,
      name: "TSH NFTs",
    },
    {
      img: Img,
      name: "TSH NFTs",
    },
    {
      img: Img,
      name: "TSH NFTs",
    },
    {
      img: Img,
      name: "TSH NFTs",
    },
    {
      img: Img,
      name: "TSH NFTs",
    },
    {
      img: Img,
      name: "TSH NFTs",
    },
    {
      img: Img,
      name: "TSH NFTs",
    },
    {
      img: Img,
      name: "TSH NFTs",
    },
  ];

  //Media Quearry
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
  const isTabletOrxtraMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div>
      <div style={{ margin: "30px auto" }}>
        <Paper
          style={{
            width: "85%",
            display: "flex",
            margin: "0px auto",
            borderRadius: "30px",
            padding: "25px 0px",
            background: "rgba(255, 160, 224, 0.3)",
            border: "3px solid rgba(0, 0, 0, 0.12)",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: `${isMobile ? "column" : "row"}`,
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <Typography style={{ fontWeight: "700" }}>Balance:</Typography>
            <Typography>5.7855 $hrse</Typography>
          </div>

          <Typography style={{ fontWeight: "700", marginBottom: "10px" }}>
            Rate: 30.06 / day
          </Typography>

          <div>
            <Typography style={{ fontWeight: "700" }}>Earned:</Typography>
            <Typography>63.7757 $hrse</Typography>
          </div>
        </Paper>
      </div>
      <Grid
        container
        style={{
          width: "85%",
          margin: "0px auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Staked Container */}
        <Grid item md={6}>
          <Grid
            container
            style={{
              width: "97%",
              // margin: "0px auto",
              background: "rgba(255, 160, 224, 0.3)",
              border: "3px solid rgba(0, 0, 0, 0.1",
              padding: "20px 0px",
              borderRadius: "20px",
            }}
          >
            <Grid
              item
              md={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              style={{
                margin: "15px 0px",
                padding: "0px 30px",
                flexDirection: `${isMobile ? "column" : "row"}`,
              }}
            >
              <Button
                style={{
                  background: "#60deff",
                  border: "5px solid #fd89ea",
                  padding: "0px 10px",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#000",
                  fontFamily: "",
                }}
              >
                Stable
              </Button>
              <Button
                style={{
                  background: "#60deff",
                  border: "5px solid #fd89ea",
                  padding: "0px 10px",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#000",
                  fontFamily: "",
                  marginLeft: `${isMobile ? "0px" : "10px"}`,
                  marginTop: `${isMobile ? "10px" : "0px"}`,
                }}
              >
                Stable All
              </Button>
            </Grid>
            {stakedData.map((val, ind) => {
              return <Stacke val={val} ind={ind} />;
            })}
          </Grid>
        </Grid>
        {/* Untaked Container */}

        <Grid item md={6} style={{ marginTop: `${isMobile ? "25px" : "0px"}` }}>
          <Grid
            container
            style={{
              width: "97%",
              // margin: "0px auto",
              background: "rgba(255, 160, 224, 0.3)",
              border: "3px solid rgba(0, 0, 0, 0.1",
              padding: "20px 0px",
              borderRadius: "20px",
            }}
          >
            <Grid
              item
              md={12}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              style={{
                margin: "15px 0px",
                padding: "0px 30px",
                flexDirection: `${isMobile ? "column" : "row"}`,
              }}
            >
              <Button
                style={{
                  background: "#60deff",
                  border: "5px solid #fd89ea",
                  padding: "0px 10px",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#000",
                  fontFamily: "",
                }}
              >
                Stop Stabling
              </Button>
              <Button
                style={{
                  background: "#60deff",
                  border: "5px solid #fd89ea",
                  padding: "0px 10px",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#000",
                  fontFamily: "",
                  marginLeft: `${isMobile ? "0px" : "10px"}`,
                  marginTop: `${isMobile ? "10px" : "0px"}`,
                }}
              >
                Stop Stabling All
              </Button>
              <Button
                style={{
                  background: "#60deff",
                  border: "5px solid #fd89ea",
                  padding: "0px 10px",
                  fontSize: "18px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#000",
                  fontFamily: "",
                  marginLeft: `${isMobile ? "0px" : "10px"}`,
                  marginTop: `${isMobile ? "10px" : "0px"}`,
                }}
              >
                Claim
              </Button>
            </Grid>
            {stakedData.map((val, ind) => {
              return <Unstake val={val} ind={ind} />;
            })}
          </Grid>
        </Grid>
      </Grid>
      <div style={{ position: "relative" }}>
        <Grid
          container
          style={{
            width: "85%",
            display: "flex",
            margin: "20px auto",
            borderRadius: "30px",
            padding: "60px 30px",
            background: "rgba(255, 160, 224, 0.3)",
            border: "3px solid rgba(0, 0, 0, 0.12)",
            zIndex: "9999",
            position: "relative",
          }}
        >
          <Grid item md={8} xs={12}>
            <Typography
              style={{ color: "#000", fontWeight: "bold", fontSize: "20px" }}
            >
              STABLING REWARDS:
            </Typography>
            <br />
            <li>Normal TSH NFT- 2 $HRSE per day</li>
            <br />
            <li>One of one TSH NFT - 5 $HRSE per day</li>
            <br />
            <br />

            <Typography
              style={{ color: "#000", fontWeight: "bold", fontSize: "20px" }}
            >
              TOWER MUL TIPLIERS (FOR NORMAL TSH NFTS):
            </Typography>
            <br />
            <li>
              Standard tower - for every 4 TSH NFTs stabled, a Multiplier of 1.5
              x 4x x 4.5 =12 $HRES daily earnings
            </li>
            <br />
            <li>
              Tall Tower - For every 6 TSH NFTs stabled, A multiplier of 1.75 x
              6x 2x 1.75= 21 $HRSE Daily Earnings
            </li>
            <br />
            <li>
              Savanna Tower - For every 8 TSH NFTs stabled, a multiplier of 2x
              8x 2x 2x=32 $HRSE daily earnings
            </li>
          </Grid>
          {!isTabletOrxtraMobile && (
            <img
              src={Jiraf}
              style={{
                position: "absolute",
                height: "310px",
                bottom: "3px",
                right: "-30px",
              }}
            />
          )}
        </Grid>
      </div>
      <Grid
        container
        style={{
          width: "85%",
          display: "flex",
          margin: "20px auto",
          borderRadius: "30px",
          padding: "20px 30px",
          background: "rgba(255, 160, 224, 0.3)",
          border: "3px solid rgba(0, 0, 0, 0.12)",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              margin: "10px auto",
            }}
          >
            where stake 1 = 2 $HRSE PER DAY
          </Typography>
        </Grid>
        <Grid item md={6} xs={12} style={{ textAlign: "center" }}>
          <Typography> 2 = 5 $HRSE PER DAY = 1.25X Multiplier</Typography>
          <Typography> 4 = 12 $HRSE PER DAY = 1.5X Multiplier</Typography>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          style={{
            textAlign: "center",
            marginTop: `${isTabletOrMobile ? "15px" : "0px"}`,
          }}
        >
          <Typography> 6 = 21 $HRSE PER DAY = 1.75X Multiplier</Typography>
          <Typography> 8 = 32 $HRSE PER DAY = 12X Multiplier</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
