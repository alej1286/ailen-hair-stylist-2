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
import Sitemap from "./components/Sitemap";

function App({ signOut }) {
  useEffect(() => {
    setTimeout(() => {
      const links = document.querySelectorAll('a');
      links.forEach(link => {
        if (link.href.match(/.*elfsight.*/)) {
          link.style.display = 'none';
        }
      });
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []);

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
            <Route path="/sitemap.xml" element={<Sitemap />} />
          </Routes>
        {/* <Carousel businessKey={"ChIJQw1FNwa_-------------"} apiKey={"AIzaSyC7j----------------------"}/> */}
          
          <div className="elfsight-app-4495d092-b640-4aa1-88ec-ab5fb0a2961a" data-elfsight-app-lazy></div>
          <Footer />
        </Router>
        {/* <Button onClick={signOut}>Sign Out</Button> */}
      </View>
    </HelmetProvider>
  );
}

//export default withAuthenticator(App);
export default App;
