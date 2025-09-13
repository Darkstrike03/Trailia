// src/pages/Profile.js
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Profile = ({ user }) => {
  const [tab, setTab] = useState(0);

  const brandTeal = "#008C95";
  const brandCoral = "#FF6F61";

  const handleTabChange = (_e, newValue) => setTab(newValue);

  /** Role-specific dashboard section */
  const renderDashboard = () => {
    switch (user.role) {
      case "Tourist":
        return (
          <>
            <Typography variant="h6" gutterBottom>Heritage Quest</Typography>
            <Typography color="text.secondary">Visited 12 / 30 locations</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Travel Stats</Typography>
            <Typography color="text.secondary">Countries: 5 | Trips: 14</Typography>
          </>
        );
      case "Vlogger":
        return (
          <>
            <Typography variant="h6">Content Stats</Typography>
            <Typography color="text.secondary">Videos: 120 | Followers: 25k</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Earnings</Typography>
            <Typography color="text.secondary">$3,200 this month</Typography>
          </>
        );
      case "Hotel Owner":
        return (
          <>
            <Typography variant="h6">Property Overview</Typography>
            <Typography color="text.secondary">3 active listings</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Bookings</Typography>
            <Typography color="text.secondary">25 upcoming bookings</Typography>
          </>
        );
      case "Local Guide":
        return (
          <>
            <Typography variant="h6">Tour Stats</Typography>
            <Typography color="text.secondary">Tours hosted: 48</Typography>
            <Typography variant="h6" sx={{ mt: 2 }}>Availability</Typography>
            <Typography color="text.secondary">Available next week</Typography>
          </>
        );
      default:
        return <Typography color="text.secondary">No dashboard data</Typography>;
    }
  };

  /** Overview Tab Content */
  const overview = (
    <Grid container spacing={3}>
      {/* Basic Info */}
      <Grid item xs={12} md={6}>
        <Card sx={{ boxShadow: 2, height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Basic Information</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Typography>Details: {user.details}</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Role Dashboard */}
      <Grid item xs={12} md={6}>
        <Card sx={{ boxShadow: 2, height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>{user.role} Dashboard</Typography>
            <Divider sx={{ mb: 2 }} />
            {renderDashboard()}
          </CardContent>
        </Card>
      </Grid>

      {/* Recent Activity */}
      <Grid item xs={12}>
        <Card sx={{ boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Recent Activity</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography color="text.secondary">No recent activity yet.</Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Reviews & Ratings */}
      <Grid item xs={12}>
        <Card sx={{ boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>Reviews & Ratings</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography color="text.secondary">No reviews yet.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        {/* Profile Info */}
        <Box sx={{ display: "flex", alignItems: "center", mb: { xs: 2, sm: 0 } }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {user.name}
              </Typography>
              {user.verified && (
                <CheckCircleIcon sx={{ color: brandTeal, fontSize: 22 }} />
              )}
            </Box>
            <Chip
              label={user.role}
              sx={{
                mt: 1,
                backgroundColor: brandCoral,
                color: "#fff",
                fontWeight: "bold",
              }}
            />
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {user.location} • Member since {user.memberSince}
            </Typography>
          </Box>
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<MailOutlineIcon />}
            sx={{ borderColor: brandTeal, color: brandTeal }}
          >
            Message
          </Button>
          <Button
            variant="outlined"
            startIcon={<FavoriteBorderIcon />}
            sx={{ borderColor: brandCoral, color: brandCoral }}
          >
            Follow
          </Button>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            sx={{ backgroundColor: brandTeal }}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={handleTabChange}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          mb: 3,
          "& .MuiTab-root": { textTransform: "none", fontWeight: "bold" },
          "& .Mui-selected": { color: brandTeal },
        }}
      >
        <Tab label="Overview" />
        <Tab label="Portfolio / Gallery" />
        <Tab label="Reviews" />
        <Tab label="Settings" />
      </Tabs>

      {/* Tab Content */}
      {tab === 0 && overview}
      {tab === 1 && <Typography>Portfolio or Gallery content goes here.</Typography>}
      {tab === 2 && <Typography>All reviews and ratings go here.</Typography>}
      {tab === 3 && <Typography>Settings form goes here.</Typography>}
    </Box>
  );
};

export default Profile;
