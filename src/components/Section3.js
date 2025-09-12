import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

const services = [
  {
    id: 1,
    name: 'Heritage Quest',
    image: `${process.env.PUBLIC_URL}/heritage1.png`,
    description: 'Embark on a journey and uncover hidden stories.',
  },
  {
    id: 2,
    name: 'Budget Travel',
    image: `${process.env.PUBLIC_URL}/heritage2.png`,
    description: 'Discover scenic hiking routes with expert local guides.',
  },
  {
    id: 3,
    name: 'Festival Explorer',
    image: `${process.env.PUBLIC_URL}/heritage3.png`,
    description: 'Never miss any festivals and events around you.',
  },
];

export default function Section3() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to left, #000000 0%, #1976d2 100%)',
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
          Services
        </Typography>

        {/* alignItems="stretch" ensures all Grid items match tallest card */}
        <Grid container spacing={4} alignItems="stretch">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card
                sx={{
                  minHeight: 360,             // ✅ fixed minimum height
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'white',
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              >
                <CardMedia
                  component="img"
                  image={service.image}
                  alt={service.name}
                  sx={{
                    height: 180,
                    objectFit: 'cover',
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,              // ✅ stretch content area
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {service.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="grey.300"
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    sx={{ mt: 2, alignSelf: 'flex-start' }}
                  >
                    Go
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
