import { NavLink } from "react-router-dom";
import React from 'react'
import '../Style/navigation.css'
import {FaUserCircle} from 'react-icons/fa';
import Box from '@mui/material/Box';


const Navigation = () => {

  // (document).ready(function(){
  //   ("button").css("background-color", "pink")
  // })

  return (
    <Box 
    sx={{
      // backgroundColor: 'primary.dark'
    }}>
    <div>
      <div className="nav">
          <ul id="logo"><a className='logo-edemand-link absolute' href="/">eDemand</a></ul>
        <nav>
            <ul className='my-4 active' ><NavLink  to="/"  style={({isActive}) => ({color : isActive ? "blue" : "black"})}>HOME</NavLink></ul>
            <ul className='my-4' ><NavLink  to="/about" style={({isActive}) => ({color : isActive ? "blue" : "black"})}>ABOUT US</NavLink></ul>
            <ul className='my-4' ><NavLink  to="/category" style={({isActive}) => ({color : isActive ? "blue" : "black"})}>CATEGORY</NavLink></ul>
            <ul className='my-4' ><NavLink  to="/providers" style={({isActive}) => ({color : isActive ? "blue" : "black"})}>PROVIDERS</NavLink></ul>
            <ul className='my-4' ><NavLink  to="/contact" style={({isActive}) => ({color : isActive ? "blue" : "black"})}>CONTACT US</NavLink></ul>
            <button id="sing-in" > <FaUserCircle className='react-icon-user'/> Sing IN </button>
        </nav>
      </div>
    </div>
    </Box>
  )
}

export default Navigation
