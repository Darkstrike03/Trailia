import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Avatar, Box, Button,
  Drawer, List, ListItemButton, ListItemIcon, Tooltip,
  Grid, Card, CardContent, IconButton, Divider, useMediaQuery
} from '@mui/material';
import {
  Dashboard, AddCircle, LibraryBooks, BarChart, Group,
  MonetizationOn, Settings, ArrowBack
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Blog() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(!isSmall); // collapsed on small by default
  const [selected, setSelected] = useState('Dashboard');


  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  // Dummy stats
  const quickStats = [
    { title: 'Total Content', value: 42 },
    { title: 'Followers', value: '8.4k' },
    { title: 'Earnings (This Month)', value: '$1,250' },
  ];

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard /> },
    { text: 'Create', icon: <AddCircle /> },
    { text: 'Library', icon: <LibraryBooks /> },
    { text: 'Analytics', icon: <BarChart /> },
    { text: 'Collabs', icon: <Group /> },
    { text: 'Earnings', icon: <MonetizationOn /> },
    { text: 'Settings', icon: <Settings /> },
  ];

  // Analytics dummy
  const viewTrend = [
    { month: 'Jan', views: 4000 }, { month: 'Feb', views: 6000 },
    { month: 'Mar', views: 5500 }, { month: 'Apr', views: 8000 }
  ];
  const audienceDemo = [
    { name: '18-24', value: 35 }, { name: '25-34', value: 40 },
    { name: '35-44', value: 15 }, { name: '45+', value: 10 }
  ];
  const pieColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'];

  const drawerWidth = mobileOpen ? 200 : 64; // collapsed width

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: '#1e1e1e' }}>
      {/* Back / Collapse control for small screens */}
      {isSmall && (
        <IconButton onClick={toggleDrawer} sx={{ color: '#fff', alignSelf: 'flex-end', m: 1 }}>
          <ArrowBack />
        </IconButton>
      )}
      <Divider sx={{ borderColor: '#333' }} />
      <List sx={{ flexGrow: 1, pt: 1 }}>
        {menuItems.map((item) => (
          <Tooltip key={item.text} title={!mobileOpen ? item.text : ''} placement="right">
            <ListItemButton
              selected={selected === item.text}
              onClick={() => setSelected(item.text)}
              sx={{
                justifyContent: mobileOpen ? 'flex-start' : 'center',
                px: mobileOpen ? 2 : 1,
                '&.Mui-selected': { bgcolor: '#333' },
                '&.Mui-selected:hover': { bgcolor: '#444' },
              }}
            >
              <ListItemIcon sx={{ color: '#fff', minWidth: 0, mr: mobileOpen ? 2 : 'auto' }}>
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
    <Box sx={{ display: 'flex', bgcolor: '#121212', minHeight: '100vh', color: '#fff' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant={isSmall ? 'temporary' : 'permanent'}
        open={mobileOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            transition: 'width 0.3s',
            overflowX: 'hidden',
            boxSizing: 'border-box',
            bgcolor: '#1e1e1e',
            color: '#fff',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
          <AppBar
    position="fixed"
    sx={{
      bgcolor: '#1e1e1e',
      width: { md: `calc(100% - ${drawerWidth}px)` },
      ml: { md: `${drawerWidth}px` }
    }}
  >
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {/* ← Back arrow */}
        <IconButton
          onClick={() => window.history.back()}            // go to previous page
          sx={{ color: '#fff', mr: 1 }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h6">Blogger Studio</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography variant="body1">John Doe</Typography>
        <Avatar src="https://via.placeholder.com/40" alt="Profile" />
      </Box>
    </Toolbar>
  </AppBar>
        <Toolbar /> {/* header offset */}

        {/* Scrollable content */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <Grid container spacing={2}>
            {quickStats.map((s) => (
              <Grid item xs={12} sm={4} key={s.title}>
                <Card sx={{ bgcolor: '#1e1e1e', textAlign: 'center' }}>
                  <CardContent>
                    <Typography variant="subtitle1">{s.title}</Typography>
                    <Typography variant="h5">{s.value}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Simple analytics demo */}
          <Card sx={{ bgcolor: '#1e1e1e', mt: 3, p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>View Trends</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={viewTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <RTooltip />
                <Line type="monotone" dataKey="views" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card sx={{ bgcolor: '#1e1e1e', mt: 3, p: 2 }}>
            <Typography variant="h6">Audience Demographics</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={audienceDemo} dataKey="value" nameKey="name" outerRadius={80} label>
                  {audienceDemo.map((e, i) => <Cell key={i} fill={pieColors[i % pieColors.length]} />)}
                </Pie>
                <RTooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Box>

        {/* Footer */}
        <Box component="footer"
          sx={{
            bgcolor: '#1e1e1e',
            textAlign: 'center',
            py: 1,
            mt: 'auto'
          }}
        >
          <Typography variant="body2">© 2025 Blogger Studio</Typography>
        </Box>
      </Box>
    </Box>
  );
}
