import { NavLink } from "react-router-dom";
import React from 'react'
import '../Style/NavStyle.css'
import {FaUserCircle} from 'react-icons/fa';
{/* <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">   */}


const Navigation = () => {

  // (document).ready(function(){
  //   ("button").css("background-color", "pink")
  // })

  return (
    <div>
      <div className="nav">
        <nav>
          <ul><a id='logo' className='absolute' href="/profile">eDemand</a></ul>
            <ul className='mx-5 py-4' ><NavLink  to="/"  style={({isActive}) => ({color : isActive ? "blue" : "black"})}>HOME</NavLink></ul>
            <ul className='mx-5 py-4' ><NavLink  to="/About" style={({isActive}) => ({color : isActive ? "blue" : "black"})}>ABOUT US</NavLink></ul>
            <ul className='mx-5 py-4' ><NavLink  to="/Category" style={({isActive}) => ({color : isActive ? "blue" : "black"})}>ALL CATEGORY</NavLink></ul>
            <ul className='mx-5 py-4' ><NavLink  to="/providers" style={({isActive}) => ({color : isActive ? "blue" : "black"})}>ALL PROVIDERS</NavLink></ul>
            <ul className='mx-5 py-4' ><NavLink  to="/contact" style={({isActive}) => ({color : isActive ? "blue" : "black"})}>CONTACT US</NavLink></ul>
            <button id="sing-in" > <FaUserCircle className='react-icon-user'/> Sing IN </button>
        </nav>
      </div>
    </div>
  )
}

export default Navigation
