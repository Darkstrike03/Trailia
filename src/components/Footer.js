import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#4e342e',       // Dark brown background
        color: '#ffffff', 
        py: 4,
        mt: 'auto',            // pushes footer to bottom if using flex layout
      }}
    >
      <Container maxWidth="lg">
        {/* Top Row: Brand / Links */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            TraiLIA
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 3,
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Link href="/terms of service" color="inherit" underline="hover">
              Terms of Service
            </Link>
            <Link href="/privacy policy" color="inherit" underline="hover">
              Privacy Policy
            </Link>
            <Link href="/contact us" color="inherit" underline="hover">
              Contact Us
            </Link>
            <Link href="/about" color="inherit" underline="hover">
              About Us
            </Link>
          </Box>
        </Box>

        {/* Bottom Row: Social + Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/"
              color="inherit"
              size="large"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com/"
              color="inherit"
              size="large"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              href="https://instagram.com/"
              color="inherit"
              size="large"
            >
              <InstagramIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ mt: { xs: 2, sm: 0 } }}>
            © {new Date().getFullYear()} EtherealArchives. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
