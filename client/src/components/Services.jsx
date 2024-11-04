import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import "../styles/Services.css";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="serviceCardMain whiteGlassmorphism">
    <div className={`serviceCardIcon ${color}`}>
      {icon}
    </div>
    <div className="serviceCardTextContainer">
      <h3 className="serviceCardHeading">{title}</h3>
      <p className="serviceCardDesctiption">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="servicesMainContainer gradientBgServices">
    <div className="servicesInner">
      <div className="servicesInfoContainer">
        <h1 className="servicesInfoHeading textGradient ">
          Services that we
          <br />
          continue to improve
        </h1>
        <p className="servicesInfoDescription">
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="servicesCardMainContainer">
        <ServiceCard
          color="blue"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="serviceCardIconTextColor" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="purple"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="serviceCardIconTextColor" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="red"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="serviceCardIconTextColor" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </div>
);

export default Services;
