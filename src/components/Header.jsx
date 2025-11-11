import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import LogoRids from "../assets/LOGO_RIDS_blanco.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* 🟦 Logo */}
      <div className="logo-container">
        <RouterLink to="/" onClick={closeMenu}>
          <img
            src={LogoRids}
            alt="Logo RIDS"
            className="logo-img"
            style={{ height: "55px", width: "auto" }}
          />
        </RouterLink>
      </div>

      {/* 🧭 Navegación Desktop */}
      <nav className="nav-links">
        {location.pathname === "/" ? (
          <>
            <ScrollLink to="hero" smooth={true} duration={700} offset={-70}>
              Inicio
            </ScrollLink>
            <RouterLink to="/sobrenosotros">Sobre Nosotros</RouterLink>
            <RouterLink to="/servicios1">Servicios</RouterLink>
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

      {/* 🍔 Botón Hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* 📱 Menú móvil desplegable */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {location.pathname === "/" ? (
          <>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={700}
              offset={-70}
              onClick={closeMenu}
            >
              Inicio
            </ScrollLink>
            <RouterLink to="/sobrenosotros" onClick={closeMenu}>
              Sobre Nosotros
            </RouterLink>
            <RouterLink to="/servicios1" onClick={closeMenu}>
              Servicios
            </RouterLink>
            <RouterLink to="/planes" onClick={closeMenu}>
              Planes
            </RouterLink>
          </>
        ) : (
          <>
            <RouterLink to="/" onClick={closeMenu}>
              Inicio
            </RouterLink>
            <RouterLink to="/sobrenosotros" onClick={closeMenu}>
              Sobre Nosotros
            </RouterLink>
            <RouterLink to="/servicios1" onClick={closeMenu}>
              Servicios
            </RouterLink>
            <RouterLink to="/planes" onClick={closeMenu}>
              Planes
            </RouterLink>
          </>
        )}
      </div>
    </header>
  );
}
