import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Loader from './components/Loader';
import Section1 from './components/Section1';
import Header from './components/Header';
import Footer from './components/Footer';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Profile from './components/Profile';
import Blog from './components/Blog';
import HotelDash from './components/Hotel';
import Guide from './components/Guide';
import HeritageQuest from './components/HeritageQuest';
import Destinations from './components/Destinations';
import Vlogging from './components/Vloggin';

function App() {
    const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loader on every route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); // simulate network / allow transition
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <>
    {loading && <Loader />}
    <Header />
    <Routes>
      <Route path="/" element={<><Section1 /><Section2/><Section3/><Section4/></>} />
      <Route path="/profile" element={<Profile
  user={{
    name: "Aarav Mehta",
    role: "Vlogger",
    location: "Jaipur, India",
    memberSince: "2022",
    verified: true,
    avatar: "/images/sample-avatar.jpg",
    email: "aarav@example.com",
    phone: "+91 9876543210",
    details: "Passionate travel vlogger exploring hidden gems.",
  }}
/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/hotel" element={<HotelDash />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="HeritageQuest" element={<HeritageQuest />} />
      <Route path="Destinations" element={<Destinations />} />
      <Route path="Vlogging" element={<Vlogging />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

