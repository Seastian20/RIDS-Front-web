import React from "react";
import "./SobreNosotros.css";

export default function SobreNosotros() {
  return (
    <section className="sobrenos-section">
      {/* 🌈 ENCABEZADO */}
      <div className="sobrenos-hero">
        <h1 className="sobrenos-title">Sobre Nosotros</h1>
        <p className="sobrenos-sub">
          En <strong>RIDS</strong> impulsamos el crecimiento tecnológico y digital de las organizaciones
          con soluciones innovadoras, sostenibles y personalizadas.
        </p>
      </div>

      {/* 🔹 FILA 1: MISIÓN Y VISIÓN */}
      <div className="sobrenos-row sobrenos-row--top">
        <div className="sobrenos-card">
          <h2 className="sobrenos-card-title">🎯 Nuestra Misión</h2>
          <p>
            Brindar soluciones tecnológicas de vanguardia que optimicen los procesos
            y potencien el crecimiento digital de nuestros clientes, con compromiso y excelencia.
          </p>
        </div>

        <div className="sobrenos-card">
          <h2 className="sobrenos-card-title">🚀 Nuestra Visión</h2>
          <p>
            Ser reconocidos como el aliado tecnológico líder en innovación, calidad y confianza,
            contribuyendo activamente al desarrollo de un futuro digital sostenible.
          </p>
        </div>
      </div>

      {/* 🔹 FILA 2: VALORES */}
      <div className="sobrenos-row sobrenos-row--bottom">
        <div className="sobrenos-card">
          <h2 className="sobrenos-card-title">💡 Innovación</h2>
          <p>
            Buscamos constantemente nuevas ideas y tecnologías para ofrecer
            soluciones únicas y eficientes que transformen el entorno digital.
          </p>
        </div>

        <div className="sobrenos-card">
          <h2 className="sobrenos-card-title">🤝 Compromiso</h2>
          <p>
            Entregar servicios de calidad a un precio justo.
            Mejorar la productividad de nuestros clientes.
            Consolidar relaciones de largo plazo con nuestros clientes. Mejoramiento Continuo.
          </p>
        </div>

        <div className="sobrenos-card">
          <h2 className="sobrenos-card-title">⭐ Excelencia</h2>
          <p>
            Nos esforzamos por ofrecer la más alta calidad en cada proyecto, superando las expectativas. 
          </p>
        </div>
      </div>
    </section>
  );
}
