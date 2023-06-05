import React from "react";
import Layout from "../Components/layout/Layout";
import { Box } from "@mui/material";

const PageNotFound = () => {
  return (
    <div>
      <Box sx={{ textAlign: "center", marginTop: 5, marginBottom: 5 }}>
        <img src={require("../Images/404.png")} height={"auto"} width={"auto"}/>
      </Box>
    </div>
  );
};

export default PageNotFound;
