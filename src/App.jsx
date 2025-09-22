import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { Login } from "./components/Login";
import Authe from "./components/Authe";
import AdminPanel from "./components/AdminPanel";
import ElfsightWidget from "./components/ElfsightWidget";
import WhatsAppChat from "./components/WhatsAppChat";
import InstallPrompt from "./components/InstallPrompt";
import GoogleAnalyticsWrapper from "./components/GoogleAnalyticsWrapper";


function App({ signOut }) {
  return (
    <HelmetProvider>
      <View className="App bg-gray-200 min-h-screen">
        <Router>
          <GoogleAnalyticsWrapper>
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
          </GoogleAnalyticsWrapper>
        </Router>
        {/* <Button onClick={signOut}>Sign Out</Button> */}
      </View>
    </HelmetProvider>
  );
}

//export default withAuthenticator(App);
export default App;
