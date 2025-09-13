import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Lottie from "lottie-react";
import logoAnimation from "../assets/logo-animation.json";
import Login from "./Login"; // Your login/signup modal
import { supabase } from "../supabaseClient";
import ExploreIcon from "@mui/icons-material/Explore";
import ArticleIcon from "@mui/icons-material/Article";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  // Check auth state
  useEffect(() => {
    // Initial load
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    // Listen for changes (sign in/out)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user || null);
      }
    );
    return () => authListener.subscription.unsubscribe();
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) return;
    setDrawerOpen(open);
  };

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    handleMenuClose();
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
            <ExploreIcon sx={{ mr: 1 }} />
            <ListItemText primary="Destinations" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/vlogging">
            <ArticleIcon sx={{ mr: 1 }} />
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/contact">
            <ContactMailIcon sx={{ mr: 1 }} />
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#000", color: "#fff" }} elevation={4}>
      <Toolbar>
        {/* Logo */}
        <Box sx={{ width: 50, height: 50, mr: 1 }}>
          <Lottie animationData={logoAnimation} loop={true} />
        </Box>

        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          TraiLIA
        </Typography>

        {/* Desktop Nav */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
          <Button color="inherit" href="/destinations" startIcon={<ExploreIcon />}>
            Destinations
          </Button>
          <Button color="inherit" href="/vlogging" startIcon={<ArticleIcon />}>
            Blog
          </Button>
          <Button color="inherit" href="/contact" startIcon={<ContactMailIcon />}>
            Contact
          </Button>
        </Box>

        {/* Login/Profile Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {!user ? (
            <Button
              color="secondary"
              variant="contained"
              onClick={() => setOpenModal(true)}
            >
              Sign In
            </Button>
          ) : (
            <>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                {user.user_metadata?.avatar_url ? (
                  <Avatar src={user.user_metadata.avatar_url} />
                ) : (
                  <AccountCircleIcon fontSize="large" />
                )}
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component="a" href="/profile">
                  Profile
                </MenuItem>
                <MenuItem component="a" href="/blog">Blog</MenuItem>
                <MenuItem component="a" href="/hotel">Hotel</MenuItem>
                <MenuItem component="a" href="/guide">Guide</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </>
          )}
        </Box>

        {/* Auth Modal */}
        <Login open={openModal} handleClose={() => setOpenModal(false)} />

        {/* Mobile Hamburger */}
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
}
