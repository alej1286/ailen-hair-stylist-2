/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Authe from "./components/Authe";
import { Auth } from "aws-amplify";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import Instagram from "./components/Instagram";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { Login } from "./components/Login";


import ElfsightWidget from "./components/ElfsightWidget";


import WhatsAppChat from "./components/WhatsAppChat";
import AdminPanel from "./components/AdminPanel";
import InstallPrompt from "./components/InstallPrompt";


function App({ signOut }) {

  return (
    <HelmetProvider>
      <View className="App bg-gray-200 min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/authe" element={<Authe />} />
            <Route path="/admin" element={<AdminPanel />} />




          </Routes>
        {/* <Carousel businessKey={"ChIJQw1FNwa_-------------"} apiKey={"AIzaSyC7j----------------------"}/> */}
          
          <ElfsightWidget />
          <Footer />

          <WhatsAppChat />
          <InstallPrompt />
        </Router>
        {/* <Button onClick={signOut}>Sign Out</Button> */}
      </View>
    </HelmetProvider>
  );
}

//export default withAuthenticator(App);
export default App;
