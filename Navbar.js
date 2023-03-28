import { AppBar, Button, IconButton, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <div>
        <AppBar>
          <Toolbar style={{backgroundColor:'black'}}>
            <IconButton
            color="inherit">
              <Select style={{backgroundColor:"black"}}>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
              </Select>
            </IconButton>
            <Typography variant="h6" style={{paddingRight:"1100px",paddingLeft:"30px"}}>Navbar</Typography>
            <Button>Login</Button>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar