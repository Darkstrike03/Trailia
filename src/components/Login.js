import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  Modal,
  Alert,
} from "@mui/material";
import { supabase } from "../supabaseClient"; // adjust the path to your client

export default function AuthModal({ open, handleClose }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleMode = () => {
    setError("");
    setIsSignup((prev) => !prev);
  };

  const handleAuth = async () => {
    setError("");
    setLoading(true);
    try {
      if (isSignup) {
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }
        // Sign up with username stored in user_metadata
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { display_name: username },
          },
        });
        if (error) throw error;
        // You might want to show a message that email verification is sent.
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
      handleClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 3,
          p: 4,
          width: { xs: "90%", sm: 400 },
          boxShadow: 24,
        }}
      >
        <Typography variant="h5" fontWeight={700} gutterBottom>
          {isSignup ? "Create Account" : "Welcome Back"}
        </Typography>

        <Stack spacing={2}>
          {error && <Alert severity="error">{error}</Alert>}
          {isSignup && (
            <TextField
              label="Display Name"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignup && (
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            onClick={handleAuth}
          >
            {loading
              ? "Processing..."
              : isSignup
              ? "Sign Up"
              : "Sign In"}
          </Button>
        </Stack>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 2, cursor: "pointer", color: "primary.main" }}
          onClick={toggleMode}
        >
          {isSignup
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Typography>
      </Box>
    </Modal>
  );
}
