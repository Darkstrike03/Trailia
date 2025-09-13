import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

const latestPosts = [
  {
    id: 1,
    title: 'Exploring the Hidden Trails of the Alps',
    image: `${process.env.PUBLIC_URL}/sample1.png`,
    views: 324,
    likes: 56,
    username: 'AlpineWanderer',
  },
  {
    id: 2,
    title: 'City Lights: Night Photography Tips',
    image: `${process.env.PUBLIC_URL}/sample2.png`,
    views: 210,
    likes: 48,
    username: 'UrbanLens',
  },
  {
    id: 3,
    title: 'A Foodie’s Guide to Coastal Spain',
    image: `${process.env.PUBLIC_URL}/sample3.png`,
    views: 145,
    likes: 33,
    username: 'SeaBites',
  },
];

export default function Section2() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #000000 100%)',
        py: 8,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          gutterBottom
        >
          Latest Posts
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          {latestPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                sx={{
                  height: '100%', // Ensures all cards have the same height
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                {/* Card Image */}
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    height: 180, // Fixed height for the image
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />

                {/* Card Content */}
                <CardContent
                  sx={{
                    flex: 1, // Ensures content fills the remaining space
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="grey.300" gutterBottom>
                      by {post.username}
                    </Typography>
                  </Box>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <VisibilityIcon fontSize="small" />
                      <Typography variant="body2">{post.views}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <FavoriteIcon fontSize="small" />
                      <Typography variant="body2">{post.likes}</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
