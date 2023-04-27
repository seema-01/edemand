import { Typography } from "@mui/material";
import React from "react";

const Heading = (props) => {
  return (
    <div>
      <Typography variant="h5" sx={{ ml: 3, mb: 2, pt: 2 }}>
        {props.heading}
      </Typography>
      <hr />
      <br />
    </div>
  );
};

export default Heading;
