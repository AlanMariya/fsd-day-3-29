import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

import './Sample.css'

const Sample = () => {
  return (
    <div>
        
        <AppBar>
             <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu"  sx={{ mr: 2 }}>

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> App </Typography>
                    <Link to='/basics'>
                        <Button variant="contained" color="success">Login</Button>
                    </Link>
            </Toolbar>
        </AppBar>
        
        
    </div>
  )
}

export default Sample