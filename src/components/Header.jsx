import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import "./Header.css";
import LogoRids from "../assets/LOGO_RIDS_blanco.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* 🟦 Logo */}
      <div className="logo-container">
        <RouterLink to="/">
          <img
            src={LogoRids}
            alt="Logo RIDS"
            className="logo-img"
            style={{ height: "55px", width: "auto" }}
          />
        </RouterLink>
      </div>

      {/* 🧭 Navegación */}
      <nav className="nav-links">
        {location.pathname === "/" ? (
          <>
            <ScrollLink to="hero" smooth={true} duration={700} offset={-70}>
              Inicio
            </ScrollLink>
            <RouterLink to="/sobrenosotros">Sobre Nosotros</RouterLink>
            <RouterLink to="/servicios1">Servicios</RouterLink>

            {/* ✅ Nuevo link de Planes */}
            <RouterLink to="/planes">Planes</RouterLink>
          </>
        ) : (
          <>
            <RouterLink to="/">Inicio</RouterLink>
            <RouterLink to="/sobrenosotros">Sobre Nosotros</RouterLink>
            <RouterLink to="/servicios1">Servicios</RouterLink>
            <RouterLink to="/planes">Planes</RouterLink>
          </>
        )}
      </nav>
    </header>
  );
}
