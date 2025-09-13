// src/components/Vlogging.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Stack,
  Fab,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

// Dummy GIF feed
const GIF_FEED = [
  {
    id: 1,
    title: "Sunset over Jaipur",
    user: "TravelWithAva",
    avatar: "https://i.pravatar.cc/50?img=11",
    gif: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
  },
  {
    id: 2,
    title: "Backwaters Ride",
    user: "NomadKiran",
    avatar: "https://i.pravatar.cc/50?img=5",
    gif: "https://media.giphy.com/media/3o7TKJqd3Xlzm3Yze0/giphy.gif",
  },
  {
    id: 3,
    title: "Taj Mahal Night Glow",
    user: "LensOfLea",
    avatar: "https://i.pravatar.cc/50?img=32",
    gif: "https://media.giphy.com/media/l0MYOUI5XfRkMi3RK/giphy.gif",
  },
];

export default function Vlogging() {
  const [likes, setLikes] = useState({}); // track liked state

  const toggleLike = (id) =>
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <Box
      sx={{
        bgcolor: "#111",
        color: "#fff",
        minHeight: "100vh",
        p: { xs: 1, sm: 3 },
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Vlogging Shorts
      </Typography>

      {/* Feed */}
      <Stack spacing={3} alignItems="center">
        {GIF_FEED.map((item) => (
          <Card
            key={item.id}
            sx={{
              position: "relative",
              width: { xs: "95%", sm: "400px" },
              borderRadius: 4,
              bgcolor: "#000",
              boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
              overflow: "hidden",
            }}
          >
            {/* GIF as video placeholder */}
            <CardMedia
              component="img"
              image={item.gif}
              alt={item.title}
              sx={{ height: 500, objectFit: "cover" }}
            />

            {/* Overlay actions */}
            <Box
              sx={{
                position: "absolute",
                right: 8,
                bottom: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <IconButton
                onClick={() => toggleLike(item.id)}
                sx={{ color: likes[item.id] ? "red" : "#fff" }}
              >
                {likes[item.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <ShareIcon />
              </IconButton>
            </Box>

            {/* User + title bar */}
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: "rgba(0,0,0,0.5)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Avatar src={item.avatar} alt={item.user} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  @{item.user}
                </Typography>
                <Typography variant="body2">{item.title}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Floating button for “Full Videos” */}
      <Fab
        variant="extended"
        color="primary"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          bgcolor: "#00bfa6",
          color: "#fff",
          "&:hover": { bgcolor: "#00a08e" },
        }}
      >
        <PlayCircleOutlineIcon sx={{ mr: 1 }} />
        Long Videos
      </Fab>
    </Box>
  );
}
