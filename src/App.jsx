import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import HeroText from './components/HeroText';
import WhatsAppButton from './components/WhatsAppButton';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactCTA from './components/ContactCTA';
import ContactForm from './components/ContactForm';
import Technologies from './components/Technologies.jsx';

import Footer from './components/Footer';
import Faq from './components/Faq';
import Blog from './components/Blog';

const App = () => (
  <div className="App">
    <CssBaseline />
    <Header />
    <HeroSection />
    <HeroText />
    <WhyChooseUs />
    <WhatsAppButton />
    <Services />
    <Faq />
    <Technologies />
    <Blog />
    <ContactCTA />
    <AboutUs />
    <ContactForm />
    <Footer />
  </div>
);

export default App;
