import React from "react";
import { Box, Typography, Button } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/joy/IconButton";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const AddServices = () => {
  const [count, setCount] = React.useState(0);
  const [showZero, setShowZero] = React.useState(false);
  return (
    <>
      <Box m={3} display={"flex"}>
        <img
          src="https://picsum.photos/300/300 "
          height={120}
          width={120}
          style={{ borderRadius: 10 }}
        ></img>
        <Box ml={3} mr="auto">
          <Typography color={"#2560FC"}>Car Wash</Typography>
          <Typography color={"gray"} sx={{ marginRight: "auto" }}>
            2Person | 90 Min{" "}
          </Typography>

          <Button
            sx={{ position: "relative", top: "-45px", left: "260px" }}
            startIcon={<StarRateIcon sx={{ color: "goldenrod" }} />}
          >
            4.5
          </Button>

          {/* counting */}
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                marginTop: -0.2,
                borderRadius: "4px",
                backgroundColor: "blue",
                padding: "3px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconButton
                  size="sm"
                  sx={{ background: "none", color: "white" }}
                  onClick={() => setCount((c) => c - 1)}
                >
                  <Remove />
                </IconButton>
                <Typography fontWeight="md" color={"white"}>
                  {count}
                </Typography>
                <IconButton
                  size="sm"
                  sx={{ background: "none", color: "white" }}
                  onClick={() => setCount((c) => c + 1)}
                >
                  <Add />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AddServices;
