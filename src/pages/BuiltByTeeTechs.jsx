import "../styles/BuiltByTeeTechs.css";
import FAQ from "../components/builtbyteetechs/FAQ";

function BuiltByTeeTechs() {
  return (
    <div className="teetechs-page">
      {/* Hero Section */}

      <section className="teetechs-hero">
        <div className="teetechs-brand">
          <h2>TeeTechs</h2>

          <p>Building Digital Solutions That Inspire Growth.</p>
        </div>
        <h1>
          Building Modern Websites
          <br />
          For Churches & Ministries
        </h1>

        <p>
          We help churches establish a professional digital presence through
          beautiful, responsive, and purpose-driven websites that communicate
          their vision, connect people, and support ministry growth.
        </p>

        <div className="teetechs-buttons">
          <a href="/" className="primary-btn">
            View Church Demo
          </a>

          <a href="#contact" className="secondary-btn">
            Request Your Website
          </a>
        </div>
      </section>

      {/* About Section */}

      <section className="teetechs-about">
        <h2>About TeeTechs</h2>

        <p>
          TeeTechs is a web design and development brand founded by{" "}
          <strong>Udungeri Phymbarr Talentz</strong> dedicated to helping
          churches, ministries, and organizations build modern digital
          experiences that reflect their vision and mission.
        </p>

        <p>
          We combine creativity, technology, and strategic thinking to create
          websites that are beautiful, functional, and easy for people to use.
        </p>
      </section>

      {/* Why Choose Us */}

      <section className="teetechs-why">
        <h2>Why Choose TeeTechs?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Modern Design</h3>
            <p>
              Clean and professional websites that represent your ministry with
              excellence.
            </p>
          </div>

          <div className="why-card">
            <h3>Mobile Friendly</h3>
            <p>
              Optimized experiences that work beautifully on phones, tablets,
              and computers.
            </p>
          </div>

          <div className="why-card">
            <h3>Custom Branding</h3>
            <p>
              Your website is designed around your church's unique identity.
            </p>
          </div>

          <div className="why-card">
            <h3>Reliable Support</h3>
            <p>Guidance from design to launch and beyond.</p>
          </div>
        </div>
      </section>

      {/* Services */}

      <section className="teetechs-services">
        <h2>Our Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Church Website Development</h3>

            <p>
              From vision to launch, we create professional digital platforms
              that help churches connect with members and reach new audiences.
            </p>
          </div>

          <div className="service-card">
            <h3>Website Redesign</h3>

            <p>Transform outdated websites into modern digital experiences.</p>
          </div>

          <div className="service-card">
            <h3>Event Landing Pages</h3>

            <p>
              Dedicated pages for conferences, programs, and special events.
            </p>
          </div>

          <div className="service-card">
            <h3>Website Support</h3>

            <p>Continuous updates, maintenance, and technical assistance.</p>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <h2>Why Partner With TeeTechs</h2>

        <div className="trust-grid">
          <p>✓ Understanding of ministry needs</p>

          <p>✓ Modern and responsive designs</p>

          <p>✓ Personalized church branding</p>

          <p>✓ Support from design to launch</p>
        </div>
      </section>

      {/* Process */}

      <section className="teetechs-process">
        <h2>Our Process</h2>

        <div>
          <h3>01. Discovery</h3>

          <p>Understanding your church, vision, and goals.</p>

          <h3>02. Design</h3>

          <p>Creating a professional website concept.</p>

          <h3>03. Development</h3>

          <p>Building and optimizing your website.</p>

          <h3>04. Launch</h3>

          <p>Deploying your website and providing support.</p>
        </div>
      </section>

      <section className="portfolio-section">

<h2>
Featured Project
</h2>


<div className="portfolio-card">


<div className="portfolio-content">

<h3>
Kingdom Community Church Website Demo
</h3>


<p>
A modern church website template designed to help ministries
showcase their vision, services, events, ministries, and connect
with their community online.
</p>


<a
href="https://YOUR-VERCEL-LINK.vercel.app"
className="portfolio-btn"
target="_blank"
rel="noopener noreferrer"
>
View Live Demo
</a>



</div>


</div>

</section>

      <FAQ />

      {/* CTA */}

      <section className="teetechs-cta" id="contact">
        <h2>Let's Build Your Church Website</h2>

        <p>
          Give your ministry a professional digital presence that reaches more
          people.
        </p>

        <a href="mailto:udungeriphymbarr@gmail.com">Contact TeeTechs</a>
      </section>
    </div>
  );
}

export default BuiltByTeeTechs;
