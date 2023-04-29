import {
    Avatar,
    Box,
    Breadcrumbs,
    Container,
    Link,
    Rating,
    Typography,
  } from "@mui/material";
  import React from "react";
  import Navigation from "../layout/Navigation";

const CustomerReview = () => {
  return (
    <div>
         <Box sx={{ background: "white", padding: 2, borderRadius: "10px" }}>
          <Box marginTop={2} marginLeft={1} display={"flex"} textAlign={"start"} alignItems={"center"}>
            <Avatar alt="Remy Sharp" sx={{height:"50px",width:"50px"}}/>
            <Box marginLeft={3} width={"100%"}>
              <Box sx={{float:"right", justifyContent:"end",textAlign:"end"}}>
                <Typography color={"gray"}>4.5</Typography>
                <Typography paddingTop={-2} color={"gray"}>45 days ago</Typography>
              </Box>
              <Typography variant="h6" fontSize={"medium"} color={"blue"}> <strong>Rashmi Hirani</strong> </Typography> 
              <Rating name="read-only" sx={{fontSize:"medium",gap: 1}} value={4} readOnly />
            </Box>
          </Box>
          <Typography marginTop={2}>
            Good Honest worker, who shows exacetly what you requested. Thank You !
          </Typography>
          <Box marginTop={3} marginBottom={3}>
          <img src="https://picsum.photos/300/300" height={"60px"} width={"60px"} alt="" style={{margin: 2, borderRadius: "10px"}}/>
          <img src="https://picsum.photos/300/300" height={"60px"} width={"60px"} alt="" style={{margin: 2, borderRadius: "10px"}}/>
          <img src="https://picsum.photos/300/300" height={"60px"} width={"60px"} alt="" style={{margin: 2, borderRadius: "10px"}}/>
          </Box>
        </Box>
    </div>
  )
}

export default CustomerReview