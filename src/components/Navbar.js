import React from 'react'
import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap: {sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}} px="20px">
      <Link to='/'>
        <img src={Logo} alt='logo' style={{width:'100px', height:'100px', margin:'0 20px'}}></img>
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link to='/' style={{textDecoration:'none', color:'#2b2d42',borderBottom:'3px solid #d90429'}}>Home</Link>
        <a href='#exercises' style={{textDecoration:'none', color:'#2b2d42'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}
export default Navbar