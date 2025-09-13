import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Grid,
  Button,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard,
  Hotel,
  Event,
  LocalOffer,
  BarChart,
  Reviews,
  Handshake,
  AccountBalance,
  ArrowBack,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function HotelDash() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const drawerWidth = 240;

  const navItems = [
    { label: 'Dashboard Overview', icon: <Dashboard /> },
    { label: 'Property Management', icon: <Hotel /> },
    { label: 'Bookings & Calendar', icon: <Event /> },
    { label: 'Packages & Offers', icon: <LocalOffer /> },
    { label: 'Analytics', icon: <BarChart /> },
    { label: 'Guest Reviews', icon: <Reviews /> },
    { label: 'Partnerships', icon: <Handshake /> },
    { label: 'Financial Reports', icon: <AccountBalance /> },
  ];

  const drawer = (
    <Box sx={{ bgcolor: '#f5f9ff', height: '100%' }}>
      <Toolbar />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label}>
            <ListItemIcon sx={{ color: '#1976d2' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', bgcolor: '#eef3f9', minHeight: '100vh' }}>
      {/* Header / AppBar */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: '#1976d2',
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={() => navigate(-1)}
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>

          <Box>
            <Typography variant="h6" fontWeight={700}>
              Royal Heritage Hotel
            </Typography>
            <Typography variant="body2">⭐ 4.6 / 5 • Jaipur, India</Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              height: '100%',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar /> {/* Offset for fixed AppBar */}

        {/* Key Metrics */}
        <Grid container spacing={2} mb={3}>
          {[{ label: "Today's Bookings", value: 12 },
            { label: 'Occupancy Rate', value: '78%' },
            { label: 'Revenue This Month', value: '₹1,20,000' },
            { label: 'Average Rating', value: '4.6' },
            { label: 'Pending Reservations', value: 5 },
          ].map((metric) => (
            <Grid item xs={12} sm={6} md={4} key={metric.label}>
              <Card sx={{ bgcolor: '#ffffff' }}>
                <CardContent>
                  <Typography variant="h6" color="primary" fontWeight={600}>
                    {metric.value}
                  </Typography>
                  <Typography variant="body2">{metric.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Booking Calendar Placeholder */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Booking Calendar
            </Typography>
            <Box
              sx={{
                height: 300,
                bgcolor: '#f0f0f0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
              }}
            >
              {/* Replace with a real calendar like react-big-calendar or FullCalendar */}
              Calendar Widget Placeholder
            </Box>
          </CardContent>
        </Card>

        {/* Property Overview */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Property Overview
            </Typography>
            <Typography variant="body2" mb={1}>
              Room Types: Deluxe, Suite, Heritage Villa
            </Typography>
            <Typography variant="body2" mb={1}>
              Amenities: Pool, Spa, Rooftop Restaurant, Free Wi-Fi
            </Typography>
            <Box
              sx={{
                mt: 2,
                height: 200,
                bgcolor: '#e0e0e0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Interactive Map Placeholder
            </Box>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Grid container spacing={2} mb={3}>
          {['Create Package', 'Manage Offers', 'Send Partnership Request'].map(
            (action) => (
              <Grid item xs={12} sm={4} key={action}>
                <Button variant="contained" fullWidth>
                  {action}
                </Button>
              </Grid>
            )
          )}
        </Grid>

        {/* Analytics Placeholder */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Analytics
            </Typography>
            <Box
              sx={{
                height: 250,
                bgcolor: '#f0f0f0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'text.secondary',
              }}
            >
              Charts for booking trends, demographics, revenue insights
            </Box>
          </CardContent>
        </Card>

        {/* Guest Reviews Placeholder */}
        <Card>
          <CardContent>
            <Typography variant="h6" mb={2}>
              Recent Guest Reviews
            </Typography>
            <Typography variant="body2" mb={1}>
              ⭐⭐⭐⭐⭐ “Amazing heritage experience!” – Riya S.
            </Typography>
            <Typography variant="body2">
              ⭐⭐⭐⭐ “Great service and location.” – Arjun P.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
