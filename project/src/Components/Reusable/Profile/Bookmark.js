import {
  ArrowRightAltOutlined,
  DoneRounded,
  DeleteOutline,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Bookmark = () => {
  const [bookData, setBookData] = useState(() => {
    const storedBookData = JSON.parse(localStorage.getItem("bookmark"));
    return storedBookData || [];
  });

  const navigate = useNavigate();

  const handleDelete = (partnerId) => {
    setBookData((prevBookData) => {
      const updatedBookData = prevBookData.filter(
        (item) => item.partner_id !== partnerId
      );
      localStorage.setItem("bookmark", JSON.stringify(updatedBookData));
      return updatedBookData;
    });
  };

  // Filter out duplicate providers based on their partner_id
  const distinctProviders = bookData.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.partner_id === item.partner_id)
  );
  return (
    <div>
      {/* Empty state  */}
      {/* {bookData=== '' ? (
        <>
          <img src={require('../../../Images/bookmark.jpg')} />
        </>
      ) : (<>SomeThing </>)} */}
      {distinctProviders.map((response) => (
        <>
          <Card
            sx={{
              display: "flex",
              maxHeight: 300,
              border: "1px solid gray",
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 150, borderRadius: "8px" }}
              image={response.banner_image}
              alt="Live from space album cover"
            />
            <CardMedia
              component="img"
              sx={{
                width: 50,
                height: 50,
                borderRadius: "100px",
                border: "5px solid white",
                ml: -3,
                mt: 6,
              }}
              image={response.image}
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <Grid container alignItems="center" sx={{ ml: 1 }}>
                <Grid item xs>
                  <Typography gutterBottom variant="h6" fontSize={18}>
                    {response.company_name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    startIcon={<DoneRounded />}
                    variant="contained"
                    sx={{ mt: 1, mr: 2 }}
                    size="small"
                  >
                    {response.number_of_orders} orders Completed
                  </Button>
                </Grid>
              </Grid>
              <Box display={"flex"}>
                <Rating readOnly value={response.ratings}></Rating>
                <Typography variant="p" ml={1}>
                  {response.ratings}/5
                </Typography>
              </Box>
              <Button
                endIcon={<ArrowRightAltOutlined />}
                sx={{ mt: 5, mr: "auto" }}
                variant="outlined"
                size="small"
                onClick={() =>
                  navigate("/providers/services/" + response.partner_id)
                }
              >
                View all Services
              </Button>
              <br />
            <Box display="flex" justifyContent="flex-end">
              <Button
                startIcon={<DeleteOutline />}
                size="small"
                variant="outlined"
                color="error"
                sx={{marginBottom: 1, marginRight:1}}
                onClick={() => handleDelete(response.partner_id)}
              >
                Delete
              </Button>
            </Box>
            </Box>
          </Card>
          <br />
        </>
      ))}
    </div>
  );
};

export default Bookmark;
