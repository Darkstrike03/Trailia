import React from 'react';
import { Box, Grid, Typography, Button, Container } from '@mui/material';

export default function WelcomeSection() {
  return (
    <Box sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="lg" disableGutters sx={{ px: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left: Welcome Text */}
          <Grid item xs={12} md={7} >  {/* wider on md+ */}
            <Box   sx={{
    width: { xs: '100%', sm: '90%', md: 520 },  // full/90% on small, 520px on md+
    maxWidth: '100%',                            // never exceed screen
    mx: 'auto',                                  // center horizontally
  }}>
              <Typography variant="h3" fontWeight={700} gutterBottom>
                Your Adventure <br />Awaits with <br /> Augmented Reality
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }} display="block">
                Trailia transforms how you travel, <br />
                combining local knowledge and technology.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="/signup"
              >
                Get Started
              </Button>
            </Box>
          </Grid>

          {/* Right: Image */}
          <Grid item xs={12} md={1}> {/* slightly narrower on md+ */}
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/welcome-image.png`}
              alt="Welcome"
              sx={{
                width: '100%',
                height: { xs: 240, md: 400 },
                objectFit: 'cover',
                borderRadius: 2,
                display: 'block',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
