import React from 'react';
import Lottie from 'lottie-react';
import loadingAnim from '../assets/logo-animation.json'; // your Lottie JSON

export default function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1300, // higher than AppBar/Drawer
      }}
    >
      <Lottie
        animationData={loadingAnim}
        loop
        style={{
          width: 150, // Set the width of the animation
          height: 150, // Set the height of the animation
        }}
      />
    </div>
  );
}