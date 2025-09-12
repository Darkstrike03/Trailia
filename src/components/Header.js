import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import  Lottie  from 'lottie-react'; // Import Lottie
import logoAnimation from '../assets/logo-animation.json'; // Import the Lottie animation JSON file

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/destinations">
            <ListItemText primary="Destinations" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/blog">
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/contact">
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/login">
            <ListItemText primary="Sign In" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#000', color: '#fff' }} elevation={4}>
      <Toolbar>
        {/* Left: Lottie Animation as Logo */}
        <Box sx={{ width: 50, height: 50, mr: 1 }}>
          <Lottie animationData={logoAnimation} loop={true} />
        </Box>

        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          TraiLIA
        </Typography>

        {/* Right: Links for Large Screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" href="/destinations">Destinations</Button>
          <Button color="inherit" href="/blog">Blog</Button>
          <Button color="inherit" href="/contact">Contact</Button>
          <Button color="secondary" variant="contained" href="/login">
            Sign In
          </Button>
        </Box>

        {/* Hamburger Menu for Small Screens */}
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer for Small Screens */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}
