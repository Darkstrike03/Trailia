// src/components/Guide.js
import React, { useState } from "react";
import {
  Box, AppBar, Toolbar, Typography, Drawer, List, ListItemButton,
  ListItemIcon, Divider, IconButton, Avatar, Grid, Card, CardContent,
  Tooltip, Button, useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  Dashboard, Hiking, CalendarMonth, People, MonetizationOn,
  Verified, Handshake, Settings, Star
} from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip,
  ResponsiveContainer
} from "recharts";

// dummy booking trend data
const earningTrend = [
  { month: "Jan", earnings: 1200 },
  { month: "Feb", earnings: 1800 },
  { month: "Mar", earnings: 1500 },
  { month: "Apr", earnings: 2200 },
];

export default function Guide() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(!isMobile);
  const [selected, setSelected] = useState("Dashboard Overview");

  const toggleDrawer = () => setMobileOpen(!mobileOpen);
  const drawerWidth = mobileOpen ? 220 : 64;

  // Sidebar menu items
  const menuItems = [
    { text: "Dashboard Overview", icon: <Dashboard /> },
    { text: "Services & Tours", icon: <Hiking /> },
    { text: "Booking Calendar", icon: <CalendarMonth /> },
    { text: "Client Management", icon: <People /> },
    { text: "Earnings", icon: <MonetizationOn /> },
    { text: "Certifications", icon: <Verified /> },
    { text: "Partnerships", icon: <Handshake /> },
    { text: "Profile Settings", icon: <Settings /> },
  ];

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#2e4631", // deep forest green
        color: "#fff",
      }}
    >
      {isMobile && (
        <IconButton onClick={toggleDrawer} sx={{ alignSelf: "flex-end", m: 1, color: "#fff" }}>
          <ArrowBackIcon />
        </IconButton>
      )}
      <Divider sx={{ borderColor: "#44654a" }} />
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <Tooltip key={item.text} title={!mobileOpen ? item.text : ""} placement="right">
            <ListItemButton
              selected={selected === item.text}
              onClick={() => setSelected(item.text)}
              sx={{
                justifyContent: mobileOpen ? "flex-start" : "center",
                px: mobileOpen ? 2 : 1,
                "&.Mui-selected": { bgcolor: "#44654a" },
                "&.Mui-selected:hover": { bgcolor: "#557a5c" },
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 0, mr: mobileOpen ? 2 : "auto" }}>
                {item.icon}
              </ListItemIcon>
              {mobileOpen && <Typography>{item.text}</Typography>}
            </ListItemButton>
          </Tooltip>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f3ed", minHeight: "100vh" }}>
      {/* Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#2e4631",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "#2e4631",
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton onClick={() => window.history.back()} sx={{ color: "#fff" }}>
                <ArrowBackIcon />
              </IconButton>
              <Avatar src="https://via.placeholder.com/60" sx={{ width: 48, height: 48 }} />
              <Box>
                <Typography variant="h6">Alex Trekker</Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Star sx={{ color: "#ffd700", fontSize: 18 }} />
                  <Typography variant="body2">4.9 • Himalayas, Alps, Rockies</Typography>
                  <Verified sx={{ color: "#80cbc4", fontSize: 18 }} />
                </Box>
              </Box>
            </Box>
            <Button color="inherit" onClick={toggleDrawer}>
              {isMobile ? "Menu" : "Collapse"}
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />

        {/* Dashboard Overview */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          {/* Key Metrics */}
          <Grid container spacing={2}>
            {[
              { label: "Upcoming Tours", value: 5 },
              { label: "Bookings This Month", value: 18 },
              { label: "Average Rating", value: "4.9/5" },
              { label: "Earnings", value: "$3,450" },
              { label: "Availability", value: "Open" },
            ].map((m) => (
              <Grid item xs={12} sm={6} md={2.4} key={m.label}>
                <Card sx={{ bgcolor: "#e8efe7" }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="text.secondary">
                      {m.label}
                    </Typography>
                    <Typography variant="h6">{m.value}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Calendar placeholder */}
          <Card sx={{ mt: 3, p: 2, bgcolor: "#e8efe7" }}>
            <Typography variant="h6">Booking Calendar</Typography>
            <Box sx={{ mt: 1, height: 300, bgcolor: "#fff", borderRadius: 1, p: 2 }}>
              {/* Integrate a real calendar like FullCalendar or react-big-calendar later */}
              Calendar Widget (heritage / cultural / adventure color codes)
            </Box>
          </Card>

          {/* Services Management */}
          <Card sx={{ mt: 3, p: 2, bgcolor: "#e8efe7" }}>
            <Typography variant="h6">Services Management</Typography>
            <Typography variant="body2">
              Add or edit tour packages, pricing, group sizes, and offered languages.
            </Typography>
          </Card>

          {/* Client Communication Center */}
          <Card sx={{ mt: 3, p: 2, bgcolor: "#e8efe7" }}>
            <Typography variant="h6">Client Communication</Typography>
            <Typography variant="body2">
              View upcoming tours, client details, special requests, and message clients.
            </Typography>
          </Card>

          {/* Certifications */}
          <Card sx={{ mt: 3, p: 2, bgcolor: "#e8efe7" }}>
            <Typography variant="h6">Certifications</Typography>
            <Typography variant="body2">
              Guide license, tourism certifications, first aid certificates, and renewal reminders.
            </Typography>
          </Card>

          {/* Partnerships */}
          <Card sx={{ mt: 3, p: 2, bgcolor: "#e8efe7" }}>
            <Typography variant="h6">Partnerships Hub</Typography>
            <Typography variant="body2">
              Collaborations with hotels/bloggers. Offer combined packages.
            </Typography>
          </Card>

          {/* Earnings */}
          <Card sx={{ mt: 3, p: 2, bgcolor: "#e8efe7" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Earnings Trend
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={earningTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis />
                <RTooltip />
                <Line type="monotone" dataKey="earnings" stroke="#2e4631" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Reviews */}
          <Card sx={{ mt: 3, p: 2, bgcolor: "#e8efe7" }}>
            <Typography variant="h6">Reviews & Testimonials</Typography>
            <Typography variant="body2">
              Manage client feedback and showcase positive experiences.
            </Typography>
          </Card>
        </Box>

        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: "#2e4631", textAlign: "center", color: "#fff", py: 1, mt: "auto" }}>
          <Typography variant="body2">© 2025 Guide Portal</Typography>
        </Box>
      </Box>
    </Box>
  );
}
