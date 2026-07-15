import { Link } from "react-router-dom";
import church from "../../data/church";
import "./Footer.css";
import logo from "../../assets/images/logo/doxa-logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
<div className="footer-brand">

<img
src={logo}
alt={`${church.name} logo`}
className="footer-logo"
/>

<h3>{church.name}</h3>

<p>{church.motto}</p>

</div>

        {/* Navigation */}
        <div>
          <h3>Quick Links</h3>

          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/ministries">Ministries</Link>
            </li>

            <li>
              <Link to="/sermons">Sermons</Link>
            </li>

            <li>
              <Link to="/events">Events</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3>Service Times</h3>

          <p>
            <strong>Calabar Centre</strong>
          </p>

          {church.locations.calabar.services.map((service) => (
            <p key={service}>{service}</p>
          ))}

          <p>
            <strong>Lagos Centre</strong>
          </p>

          {church.locations.lagos.services.map((service) => (
            <p key={service}>{service}</p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h3>Contact</h3>

          <p>
            <strong>Calabar Location</strong>
          </p>
          <p>{church.locations.calabar.address}</p>

          <p>
            <strong>Lagos Location</strong>
          </p>
          <p>{church.locations.lagos.address}</p>

          <p><a href={`tel:${church.contact.phone}`}>
  {church.contact.phone}
</a></p>

          <p><a href={`mailto:${church.contact.email}`}>
  {church.contact.email}
</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} {church.name}. All Rights Reserved.
        </p>

        <p>Designed & Developed by TeeTechs.</p>
      </div>
    </footer>
  );
}

export default Footer;