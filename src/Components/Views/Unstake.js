import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import Ring from "../assets/Ring.png";
import SelectedRing from "../assets/SelectedRing.png";

const Unstacke = ({ val, ind }) => {
  const [select, setSelect] = useState(false);
  return (
    <Grid
      item
      lg={4}
      md={6}
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
          width: "150px",
          height: "165px",
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
