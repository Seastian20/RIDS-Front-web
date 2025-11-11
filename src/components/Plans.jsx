import React from "react";
import "./Plans.css";

const plans = [
  {
    name: "Esencial",
    price: "CLP $49.990",
    discount: "50% OFF",
    subprice: "CLP $24.995 / mes",
    description: "Tu primer paso hacia un soporte confiable.",
    features: [
      "1 usuario / 1 equipo",
      "Configuración y software esencial",
      "Preventivo mensual: antivirus y actualizaciones",
      "Respaldo local básico",
    ],
    highlight: false,
    link: "https://app.reveniu.com/checkout-custom-link/ZjPI1JBKALQhhmIycGKyj6UVlzUdIVNl",
  },
  {
    name: "Avanza",
    price: "CLP $99.990",
    discount: "50% OFF",
    subprice: "CLP $49.995 / mes",
    description: "El impulso que tu negocio necesita para crecer seguro.",
    features: [
      "Hasta 3 usuarios / equipos",
      "Soporte remoto esencial",
      "Continuidad operativa y mantenimiento",
      "Asesoría remota en configuración",
    ],
    highlight: false,
    link: "https://app.reveniu.com/checkout-custom-link/v5oX9p7FN2dsbLiABP6bEJClWBmid9oT",
  },
  {
    name: "Premium",
    price: "CLP $499.900",
    discount: "50% OFF",
    subprice: "CLP $229.950 / mes",
    description:
      "Soporte integral con presencia en terreno cuando lo requieras.",
    features: [
      "Soporte remoto ilimitado",
      "Mantenimiento correctivo",
      "1 visita presencial mensual incluida",
      "Gestión de licencias corporativas",
    ],
    highlight: true,
    link: "https://app.reveniu.com/checkout-custom-link/DoaO5SkMPRKxv2tocnp4EXndD8YYUpgd",
  },
  {
    name: "Infinity",
    price: "Cotización / según alcance",
    discount: "50% OFF",
    description: "Un plan sin límites, 100% a medida.",
    features: [
      "Cobertura ajustada al tamaño de la empresa",
      "Soporte remoto y presencial a convenir",
      "Técnico residente opcional",
      "Servicios extra: licencias, monitoreo, ciberseguridad, web, consultoría TI",
    ],
    highlight: false,
    link: "https://api.whatsapp.com/send/?phone=56988076593&text=Hola+RIDS%2C+quiero+informaci%C3%B3n+del+Plan+Infinity&type=phone_number&app_absent=0",
  },
];

export default function Plans() {
  return (
    <section className="plans-section">
      <div className="plans-header">
        <h2>Nuestros Planes de Suscripción</h2>
        <p>
          Escoge el plan que mejor se adapta a tu empresa. Soporte TI confiable,
          seguro y con respaldo profesional.
        </p>
      </div>

      <div className="plans-container">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`plan-card ${plan.highlight ? "highlight" : ""}`}
          >
            {plan.discount && <span className="discount">{plan.discount}</span>}

            <h3>{plan.name}</h3>
            <p className="description">“{plan.description}”</p>

            <div className="price-block">
              <p className="price">{plan.price}</p>
              {plan.subprice && <p className="subprice">{plan.subprice}</p>}
            </div>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="plan-button"
            >
              {plan.name === "Infinity"
                ? "WhatsApp / Llamar"
                : plan.highlight
                ? "Empezar ahora"
                : "Contratar"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
