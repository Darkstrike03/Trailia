import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from '@mui/material';

export default function Section3() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #FFB74D 0%, #F57C00 100%)',
        color: 'black',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Journey
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 700 }}>
            Trailia is a pioneering tourism platform, connecting tourists, travel vloggers, hotels, and local guides in one seamless experience. With innovative features like 'Heritage Quest' and 'Budget Jugaad', we redefine how you explore and enjoy travel.
          </Typography>

          <Typography variant="body1" sx={{ maxWidth: 700 }}>
            Our aim is to continually enhance travel experiences and simplify planning, ensuring you connect with diverse cultures and events across India.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              bgcolor: '#8FBC8F',           // rich dark-brown
              '&:hover': { bgcolor: '#4E342E' } // slightly darker on hover
            }}
            href="/about"
          >
            Learn More
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
