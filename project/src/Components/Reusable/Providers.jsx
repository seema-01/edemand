import React from 'react'
import Provider from "./Provider";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Container, Grid } from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop:10,
    // marginLeft:10,
    // marginRight: 10,
    border:0,
    boxShadow: "none"
}));


const Providers = () => {
    return (
        <div>
            <Container maxWidth={"lg"}>
                <Grid container sx={{backgroundColor:"white", borderRadius: "10px"}} marginTop={"6%"} boxShadow={"none"}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Item><Provider /></Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Item><Provider /></Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Item><Provider /></Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Item><Provider /></Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Item><Provider /></Item>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Item><Provider /></Item>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}


export default Providers