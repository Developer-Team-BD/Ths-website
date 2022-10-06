import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import skella from "../assets/IMG_0804 1.png";
import connectWallet from "../assets/connect-wallet.png";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  //Media Quearry
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <div>
      <Grid
        container
        justifyContent={"space-between"}
        alignItems={"center"}
        style={{
          padding: "0px 40px",
          background: "rgba(255, 255, 255, 0.26)",
          height: "80px",
          boxShadow: "0px 2px 26px rgba(241, 58, 234, 0.08)",
          width: "90%",
          margin: "0px auto",
        }}
      >
        <Grid item xs={3}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            <img src={skella} height={"50px"} />
          </Link>
        </Grid>
        {!isTabletOrMobile && (
          <Grid item md={6} className="navbar">
            <li>
              <Link>Lore</Link>
            </li>
            <li>
              <Link>Roadmap</Link>
            </li>
            <li>
              <Link>Team</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Stupid Declaration</Link>
            </li>
          </Grid>
        )}
        <Grid
          item
          xs={3}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Link style={{ color: "#fff", textDecoration: "none" }}>
            {/* <Button
            style={{
              borderRadius: "53px",
              background:
                "linear-gradient(90deg, #46A5FF 0%, rgba(74, 176, 255, 0.76) 0%, rgba(198, 40, 247, 0.82) 104.87%)",
              color: "#fff",
            }}
          >
            Connect Wallet
          </Button> */}
            <Button
              style={{
                background: "#60deff",
                border: "3px solid #fd89ea",
                padding: "2px 10px",
                fontSize: "18px",
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "#000",
                fontFamily: "",
                lineHeight: "20px",
              }}
            >
              Connect <br />
              wallet
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
