import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from '../Image/images.png'
import '../Comp/Navbar.css'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="fixed">
        <Toolbar className='nav'>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
           <div className='imagediv'><img  className= 'image'src={Image}/></div> 
            
            <h2 className='foodpanda'>foodpanda</h2>
          {/* </Typography> */}
          <div color='inherit' className='login'>Login</div>
          <div color='inherit' className='signup'>Signup</div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}