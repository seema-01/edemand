import { Mail, Notifications, Pets, Search } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, Button, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1

//for creating logo
const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "start",
    backgroundColor: "white",
    color: "blue",
    maxWidth: "lg",
    justifyContent: "space-between",
})


const Navigation = () => {
    return (
        <Box>
            <AppBar position='sticky' style={{background: "none"}}>
                <Box maxWidth={'90%'}
                marginLeft={"5%"}>

                <StyledToolBar >

                    <Typography variant='h6' >eDemand</Typography>
                        <Box sx={{display:{xs:"none",lg:"block"}}}>
                            <a href="" style={{paddingLeft:"1%",textDecoration:"none",color:"black"}}>Home</a>
                            <a href="" style={{paddingLeft:"5%",textDecoration:"none",color:"blue"}}>About</a>
                            <a href="" style={{paddingLeft:"5%",textDecoration:"none",color:"black"}}>Category</a>
                            <a href="" style={{paddingLeft:"5%",textDecoration:"none",color:"black"}}>Provider</a>
                            <a href="" style={{paddingLeft:"5%",textDecoration:"none",color:"black"}}>Contact</a>
                        </Box>
                    <Button variant='contained'>Sign in</Button>
                    
                </StyledToolBar>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Navigation
