// src/components/Destinations.js
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  TextField,
  InputAdornment,
  Chip,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import ExploreIcon from "@mui/icons-material/Explore";
import ArticleIcon from "@mui/icons-material/Article";
import jaipurimg from '../assets/jaipur.jpg';
import agraimg from '../assets/agra.jpeg';
import keralaimg from '../assets/kerala.jpeg';

// Sample data – replace with API/DB data
const DESTINATIONS = [
  {
    id: 1,
    name: "Jaipur",
    image: jaipurimg,
    specialty: "Pink City, Palaces & Forts",
    blogs: 5,
    hotels: 12,
  },
  {
    id: 2,
    name: "Agra",
    image: agraimg,
    specialty: "Taj Mahal & Mughal Heritage",
    blogs: 8,
    hotels: 15,
  },
  {
    id: 3,
    name: "Kerala Backwaters",
    image: keralaimg,
    specialty: "Houseboats & Lagoons",
    blogs: 6,
    hotels: 20,
  },
];

export default function Destinations() {
  const [query, setQuery] = useState("");

  const filtered = DESTINATIONS.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "#fafafa", minHeight: "100vh" }}>
      {/* Header */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center", color: "teal" }}
      >
        Explore Destinations
      </Typography>

      {/* Search bar */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search places, hotels, blogs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{
          mb: 4,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 1,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      {/* Destination grid */}
      <Grid container spacing={4}>
        {filtered.map((dest) => (
          <Grid item xs={12} sm={6} md={4} key={dest.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.25s",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={dest.image}
                  alt={dest.name}
                  sx={{ borderRadius: "12px 12px 0 0" }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1 }}
                    color="primary"
                  >
                    {dest.name}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {dest.specialty}
                  </Typography>

                  {/* Quick stats */}
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    <Chip
                      icon={<ArticleIcon />}
                      label={`${dest.blogs} Blogs`}
                      size="small"
                      color="secondary"
                      variant="outlined"
                    />
                    <Chip
                      icon={<LocalHotelIcon />}
                      label={`${dest.hotels} Hotels`}
                      size="small"
                      color="success"
                      variant="outlined"
                    />
                  </Box>

                  {/* Call-to-action */}
                  <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<ExploreIcon />}
                      size="small"
                    >
                      View
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<LocalHotelIcon />}
                    >
                      Hotels
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
