import React, { useState } from "react";
import Webcam from "react-webcam";
import { Fab, Box, Typography, Button, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MapIcon from "@mui/icons-material/Map";
import InfoIcon from "@mui/icons-material/Info";
import ShareIcon from "@mui/icons-material/Share";

export default function HeritageQuest() {
  const [showInfo, setShowInfo] = useState(false);
  const [questProgress, setQuestProgress] = useState(40); // Progress percentage
  const [currentPoints, setCurrentPoints] = useState(120); // Points earned
  const [cameraAvailable, setCameraAvailable] = useState(true); // Check if camera is available

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Camera feed or fallback */}
      {cameraAvailable ? (
        <Webcam
          audio={false}
          videoConstraints={{ facingMode: { exact: "environment" } }}
          onUserMediaError={() => setCameraAvailable(false)} // Handle camera errors
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "url('/fallback-image.jpg') center/cover no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Camera not available
        </div>
      )}

      {/* Top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          padding: "8px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <Typography variant="h6">Red Fort — Quest Progress</Typography>
        <div
          style={{
            height: "6px",
            marginTop: "4px",
            background: "#eee",
            borderRadius: "3px",
          }}
        >
          <div
            style={{
              width: `${questProgress}%`,
              height: "100%",
              background: "teal",
              borderRadius: "3px",
            }}
          />
        </div>
        <Typography variant="body2" style={{ marginTop: "4px" }}>
          Points: {currentPoints}
        </Typography>
      </div>

      {/* Hotspot */}
      <div
        onClick={() => setShowInfo(true)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(0, 255, 200, 0.4)",
          border: "2px solid teal",
          animation: "pulse 2s infinite",
          cursor: "pointer",
        }}
      />

      {/* Info popup */}
      {showInfo && (
        <div
          onClick={() => setShowInfo(false)}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "10%",
            right: "10%",
            background: "rgba(255,255,255,0.9)",
            padding: "16px",
            borderRadius: "12px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <h3 style={{ color: "teal", marginBottom: "8px" }}>Did you know?</h3>
          <p>
            The Red Fort was built by Mughal emperor Shah Jahan in the 17th
            century and served as the main residence of the emperors of the
            Mughal dynasty.
          </p>
          <p style={{ color: "coral", marginTop: "8px" }}>Tap anywhere to close</p>
        </div>
      )}

      {/* Bottom toolbar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "8px 0",
        }}
      >
        <IconButton color="inherit" style={{ color: "teal" }}>
          <InfoIcon />
        </IconButton>
        <IconButton color="inherit" style={{ color: "teal" }}>
          <MapIcon />
        </IconButton>
        <IconButton color="inherit" style={{ color: "teal" }}>
          <CameraAltIcon />
        </IconButton>
        <IconButton color="inherit" style={{ color: "teal" }}>
          <ShareIcon />
        </IconButton>
      </div>

      {/* Floating Action Button (FAB) */}
      <Fab
        variant="extended"
        color="primary"
        style={{
          position: "absolute",
          bottom: "80px",
          right: "16px",
          background: "teal",
        }}
      >
        <MapIcon sx={{ mr: 1 }} />
        Objectives
      </Fab>

      {/* Simple pulse keyframes */}
      <style>{`
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
          50% { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
