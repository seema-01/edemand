import { DeleteOutline, EditOutlined, PlusOne } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Radio, Typography } from "@mui/material";
import React from "react";

const Address = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <Box>
        <Box
          sx={{
            my: 3,
            mx: 2,
            maxWidth: "100%",
            border: "1px solid gray",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs display={"flex"}>
              <Typography gutterBottom variant="p" component="div">
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
                Divy Jani
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  height: "22px",
                  width: "auto",
                  ml: 1,mt:1
                }}
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "green",
                  mr: 1,
                  borderRadius: 2,
                  "&:hover": {
                    background: "green",
                  },
                }}
              >
                <EditOutlined sx={{ fontSize: "large" }} />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "red",
                  borderRadius: 2,
                  "&:hover": {
                    background: "red",
                  },
                }}
              >
                <DeleteOutline sx={{ fontSize: "large" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            2-3-577/2 Minister Road, Nallakunta, Nallakunta, Secunderabad <br />
            Andhra Pradesh, 500003 - India
          </Typography>
        </Box>

        {/* Section 2 */}

        <Box
          sx={{
            my: 3,
            mx: 2,
            maxWidth: "100%",
            border: "1px solid gray",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs display={"flex"}>
              <Typography gutterBottom variant="p" component="div">
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                />
                Divy Jani
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  height: "22px",
                  width: "auto",
                  ml: 1,
                  mt:1
                }}
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "green",
                  mr: 1,
                  borderRadius: 2,
                  "&:hover": {
                    background: "green",
                  },
                }}
              >
                <EditOutlined sx={{ fontSize: "large" }} />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "red",
                  borderRadius: 2,
                  "&:hover": {
                    background: "red",
                  },
                }}
              >
                <DeleteOutline sx={{ fontSize: "large" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            2-3-577/2 Minister Road, Nallakunta, Nallakunta, Secunderabad <br />
            Andhra Pradesh, 500003 - India
          </Typography>
        </Box>

        {/* Section 3 */}

        <Box
          sx={{
            my: 3,
            mx: 2,
            maxWidth: "100%",
            border: "1px solid gray",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs display={"flex"}>
              <Typography gutterBottom variant="p" component="div">
                <Radio
                  checked={selectedValue === "c"}
                  onChange={handleChange}
                  value="c"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "C" }}
                />
                Divy Jani
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  height: "22px",
                  width: "auto",
                  ml: 1,mt:1
                }}
              >
                Home
              </Button>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "green",
                  mr: 1,
                  borderRadius: 2,
                  "&:hover": {
                    background: "green",
                  },
                }}
              >
                <EditOutlined sx={{ fontSize: "large" }} />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="small"
                sx={{
                  backgroundColor: "red",
                  borderRadius: 2,
                  "&:hover": {
                    background: "red",
                  },
                }}
              >
                <DeleteOutline sx={{ fontSize: "large" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Typography color="text.secondary" variant="body2">
            2-3-577/2 Minister Road, Nallakunta, Nallakunta, Secunderabad <br />
            Andhra Pradesh, 500003 - India
          </Typography>
        </Box>

      </Box>
    </div>
  );
};

export const AddAddress = () => {
  return (
    <>
      <Box
        sx={{
          my: 3,
          mx: 2,
          maxWidth: "100%",
          border: "1px solid gray",
          borderRadius: "10px",
          height: "84px",
          p: 2,
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
        }}
      >
        <Button>+Add New Address</Button>
      </Box>
    </>
  );
};

export default Address;
