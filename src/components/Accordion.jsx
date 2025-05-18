import { useState } from "react";
import "../styles/accordion.css";
import aero from "../assets/images/aerodynamics.png";
import vd from "../assets/images/VD.png";
import electronics from "../assets/images/electronics.jpg";
import powertrain from "../assets/images/powertrain.jpg";
import business from "../assets/images/business.jpg";
import autonomous from "../assets/images/autonomous.jpg";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    { title: "Vehicle Dynamics", img: vd, desc: "This sub-team is responsible for designing the vehicle’s structural framework and dynamic behavior. The chassis must be lightweight yet strong enough to handle high loads and meet safety regulations. Meanwhile, the vehicle dynamics component focuses on suspension geometry, steering systems, ride height, weight distribution, and overall handling characteristics. Their goal is to ensure that the car is responsive, stable, and predictable under all driving conditions. They use simulations and real-world testing to tune performance and maintain optimal tire contact with the road." },
    { title: "Aerodynamics", img: aero, desc: "The Aerodynamics team designs the aerodynamic package of the car, including the front and rear wings, undertray, sidepods, and diffusers. Their goal is to generate downforce to improve grip without significantly increasing drag. This involves extensive CFD (Computational Fluid Dynamics) simulations, wind tunnel testing, and optimization of airflow management across the car. For electric and autonomous vehicles, they may also consider thermal management and airflow to cooling systems. Their work directly influences speed, cornering ability, and overall efficiency." },
    { title: "Powertrain", img: powertrain, desc: "The Powertrain sub-team is in charge of everything that delivers power from the energy source to the wheels. For internal combustion cars, this includes the engine, fuel system, intake/exhaust, and transmission. For electric cars, they focus on electric motors, inverters, battery packs, and cooling systems. They are also responsible for drivetrain integration, efficiency tuning, and ensuring thermal and mechanical reliability. Their design choices significantly impact acceleration, top speed, and energy consumption." },
    { title: "Electronics", img: electronics, desc: "The Electronics team manages the car’s electrical architecture, including wiring harnesses, sensors, ECUs (Electronic Control Units), dashboards, and data acquisition systems. In autonomous cars, they also develop or integrate systems for perception (e.g., LiDAR, cameras), compute units, localization, and real-time control algorithms. They work closely with other teams to ensure that electrical components interface smoothly and reliably. This sub-team plays a vital role in diagnostics, telemetry, and driver feedback systems." }, 
    { title: "Autonomous", img: autonomous, desc: "They are responsible for enabling the car to operate without human intervention in the Driverless (DV) class of Formula Student. They integrate a range of technologies across perception, localization, planning, and control. Perception involves processing data from sensors like LiDAR, cameras, and GPS to detect track boundaries and obstacles. Localization ensures the car knows its precise position on the track in real time, often using sensor fusion techniques. The planning and control components generate a safe and efficient path around the track and convert it into actionable commands (steering, throttle, braking). Collaboration with the Electronics team is key to successfully integrating autonomous systems into the car."},
    { title: "Business", img: business, desc: "The Business sub-team ensures the team is financially viable and professionally presented. They are responsible for budgeting, cost tracking, and securing funding through sponsorships, partnerships, and grants. They also manage marketing, public relations, social media presence, and team branding. In competition, they prepare a Business Presentation event where they simulate pitching the car as a viable commercial product to investors. This involves developing a full business plan covering market analysis, manufacturing strategy, cost structure, and profitability. Their work showcases the team's real-world readiness and project management skills."} 
  ];

  const handleCardClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // toggle
  };

  return (
    <div className="acc-container">
    <h1 className="accordion-title">SUB-TEAMS:</h1>
    <p className="details">Click on the subteam card to know more</p>
    <div className="accordion">
    {cards.map((card, index) => (
      <div
        key={index}
        className={`card ${activeIndex === index ? "active" : ""}`}
        onClick={() => handleCardClick(index)}
      >
        <img src={card.img} alt={card.title} className="background" />
        <div className="accordion-content">
          <h3 className="title">{card.title}</h3>
        </div>
        <div className="backdrop"></div>
      </div>
    ))}
    </div>

  <div className={`accordion-description ${activeIndex !== null ? "open" : ""}`}>
    <h3 className="title">{activeIndex !== null ? cards[activeIndex].title : ""}</h3>
    <p>{activeIndex !== null ? cards[activeIndex].desc : ""}</p>
</div>

</div>

  );
}
