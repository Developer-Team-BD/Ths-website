import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import Ring from "../assets/Ring.png";
import SelectedRing from "../assets/SelectedRing.png";
import { useMediaQuery } from "react-responsive";

const Unstacke = ({ val, ind }) => {
  const [select, setSelect] = useState(false);
  //Media Quearry
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 950px)" });
  const isTabletOrxtraMobile = useMediaQuery({ query: "(max-width: 900px)" });

  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <Grid
      item
      xl={3}
      lg={4}
      md={6}
      sm={6}
      xs={12}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
        cursor: "pointer",
      }}
      key={ind}
      onClick={() => setSelect(!select)}
    >
      <div
        style={{
          background: `url(${val.img}) rgba(85, 69, 69, 0.5)`,
          position: "relative",
          // paddingRight: "10px",
          width: `${isTabletOrxtraMobile ? "220px" : "150px"}`,
          height: `${isTabletOrxtraMobile ? "245px" : "165px"}`,
          borderTopRightRadius: "30px",
          borderBottomLeftRadius: "30px",
          borderTopLeftRadius: "5px",
          backgroundSize: "cover",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={!select ? Ring : SelectedRing}
            height={"20px"}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginLeft: "10px",
              marginTop: "10px",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            background: "rgba(28, 41, 48, 0.56)",
            width: "100%",
            bottom: "0px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "30px",
            padding: "5px 0px",
          }}
        >
          <Typography
            style={{
              color: "#fff",
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            {val.name}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default Unstacke;
