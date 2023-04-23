import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Rating } from '@mui/material';
import { ArrowRight, ArrowRightAltOutlined, Done } from '@mui/icons-material';

export default function Provider() {
  return (

    <Card sx={{ maxWidth: 345, display: "inline-block"}}>
      <CardMedia
        sx={{ height: 240 }}
        image="./demo1.jpg"
        title="green iguana"
      />
       <CardMedia
        sx={{ height: 80,
            width: 80,
            border: "5px solid white",
            borderRadius: "50px",
            marginTop: "-40px",
            marginLeft: "35%",
 }}
        image="./demo1.jpg"
        title="green iguana"
      />
      <Box textAlign={"center"}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
          Strome Brand Electronic Store
        </Typography>
        <Rating name="read-only" value={3} readOnly sx={{alignContent:"center"}}/>
        <Button variant='contained' startIcon={<Done />}>45 Order Completed</Button>
        
        <div className="lines" style={{paddingTop: "30px"}}>
            <hr />
        </div>

        <Button variant='a' href="" sx={{marginTop: 3}} endIcon={<ArrowRightAltOutlined />}>View All Services</Button>
      </CardContent>
     
      </Box>
    </Card>
    
  );
}