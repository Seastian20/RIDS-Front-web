import React from "react";
import "./SobreNosotros.css";

// IMPORTA LAS IMÁGENES (asegúrate que los nombres coincidan con los archivos en src/assets)
import compromisoIcon from "../assets/compromiso.png";
import excelenciaIcon from "../assets/excelencia.png";
import innovacionIcon from "../assets/innovacion.png";
import misionIcon from "../assets/mision.png";
import visionIcon from "../assets/vision.png";

export default function SobreNosotros() {
  return (
    <section className="sobrenos-section">
      <div className="sobrenos-hero">
        <h1 className="sobrenos-title">Sobre Nosotros</h1>
        <p className="sobrenos-sub">
          En <strong>RIDS</strong> impulsamos el crecimiento tecnológico y digital de las organizaciones
          con soluciones innovadoras, sostenibles y personalizadas.
        </p>
      </div>

      <div className="sobrenos-row sobrenos-row--top">
        <div className="sobrenos-card">
          <div className="card-icon-wrap">
            <img src={misionIcon} alt="Misión" className="card-icon" />
          </div>
          <h2 className="sobrenos-card-title">Nuestra Misión</h2>
          <p className="sobrenos-card-text">
            Brindar soluciones tecnológicas de vanguardia que optimicen los procesos
            y potencien el crecimiento digital de nuestros clientes, con compromiso y excelencia.
          </p>
        </div>

        <div className="sobrenos-card">
          <div className="card-icon-wrap">
            <img src={visionIcon} alt="Visión" className="card-icon" />
          </div>
          <h2 className="sobrenos-card-title">Nuestra Visión</h2>
          <p className="sobrenos-card-text">
            Ser reconocidos como el aliado tecnológico líder en innovación, calidad y confianza,
            contribuyendo activamente al desarrollo de un futuro digital sostenible.
          </p>
        </div>
      </div>

      <div className="sobrenos-row sobrenos-row--bottom">
        <div className="sobrenos-card">
          <div className="card-icon-wrap">
            <img src={innovacionIcon} alt="Innovación" className="card-icon" />
          </div>
          <h2 className="sobrenos-card-title">Innovación</h2>
          <p className="sobrenos-card-text">
            Buscamos constantemente nuevas ideas y tecnologías para ofrecer
            soluciones únicas y eficientes que transformen el entorno digital.
          </p>
        </div>

        <div className="sobrenos-card">
          <div className="card-icon-wrap">
            <img src={compromisoIcon} alt="Compromiso" className="card-icon" />
          </div>
          <h2 className="sobrenos-card-title">Compromiso</h2>
          <p className="sobrenos-card-text">
            Entregar servicios de calidad a un precio justo, mejorar productividad y consolidar relaciones a largo plazo.
          </p>
        </div>

        <div className="sobrenos-card">
          <div className="card-icon-wrap">
            <img src={excelenciaIcon} alt="Excelencia" className="card-icon" />
          </div>
          <h2 className="sobrenos-card-title">Excelencia</h2>
          <p className="sobrenos-card-text">
            Nos esforzamos por ofrecer la más alta calidad en cada proyecto, superando las expectativas.
          </p>
        </div>
      </div>
    </section>
  );
}
