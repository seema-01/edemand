import { AppBar, Box, Button, Toolbar, Typography, styled } from '@mui/material'
import React, {  } from 'react'
import { NavLink } from 'react-router-dom';

//for creating logo
const StyledToolBar = styled(Toolbar)({
    display: "flex",
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
                            <NavLink to="/" style={{paddingLeft:"1%",textDecoration:"none",color:"black"}}>Home</NavLink>
                            <NavLink to="/about" style={{paddingLeft:"5%",textDecoration:"none",color:"black"}}>About</NavLink>
                            <NavLink to="/category" style={{paddingLeft:"5%",textDecoration:"none",color:"black"}}>Category</NavLink>
                            <NavLink to="/provider" style={{paddingLeft:"5%",textDecoration:"none",color:"black"}}>Provider</NavLink>
                            <NavLink to="/contact" style={{paddingLeft:"5%",textDecoration:"none",color:"black"}}>Contact</NavLink>
                        </Box>
                    <Button variant='contained'>Sign in</Button>

                </StyledToolBar>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Navigation
