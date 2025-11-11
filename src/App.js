import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesCarousel from "./components/ServicesCarousel";
import Plans from "./components/Plans";
import SponsorsCarousel from "./components/SponsorsCarousel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Servicios1 from "./components/Servicios1";
import Planes from "./components/Planes";
import SobreNosotros from "./components/SobreNosotros";
import WhatsAppButton from "./components/WhatsAppButton";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Navbar / Encabezado principal */}
      <Header />

      {/* Rutas principales */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ServicesCarousel />
              <Plans />
              <SponsorsCarousel />
              <Contact />
            </>
          }
        />

        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/servicios1" element={<Servicios1 />} />
        <Route path="/planes" element={<Planes />} />
      </Routes>

      {/* ✅ Footer global visible en TODAS las páginas */}
      <Footer />
<WhatsAppButton />

    </Router>
  );
}

export default App;
