import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const ProviderService = () => {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <Card sx={{ display: "flex", boxShadow: "none",height:180, p:1}}>
        <CardMedia
          image="https://picsum.photos/300/300          "
          alt="hi"
          sx={{ height: "180px", width: "200px", borderRadius: "4px" }}
        />

        <CardContent sx={{ml:2,p:0}}>
          <Box sx={{ display: "block", textAlign: "start",}}>
            <Box sx={{ display: "flex" }}>
              <Typography color={"#2560FC"} sx={{ marginRight: "auto" }}>
                Car Service
              </Typography>
              <StarIcon sx={{ color: "gold" }} /> 4.3
              <br />
            </Box>
            <Typography fontSize={14} pt={2}>
              if you are looking for good car repairing services.then look no
              further than maruti motors in mirzapar,Bhuj
            </Typography>
            <br /> <br />
            <Typography color={"gray"} fontSize={14} sx={{mt: -4}}>2 Person | 150 min</Typography>
            <br />
            <Box sx={{ display: "flex", mt:3 }}>
              <Typography color={"#2560FC"} sx={{ marginRight: "auto" }}>
                $200 <del style={{ color: "gray" }}>$249</del>{" "}
              </Typography>

              <Box sx={{ float: "right", mt:-1}}>
                <Button variant="outlined" float="right" size="small">
                  {" "}
                  Add
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProviderService;
