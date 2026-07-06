import { useEffect, useState } from "react";
import "./index.css";

const ARO_LOGO =
  "https://res.cloudinary.com/dm20uwmki/image/upload/v1778477218/r2BGYaR01_3_lxjzyg.svg";

const images = {
  hero: "/images/g1-hero.webp",
  product1: "/images/g1-product.png",
  product2: "/images/g1-product-2.png",
  feature1: "/images/g1-feature-1.png",
  feature2: "/images/g1-feature-2.png",
};

const productTabs = ["ARO G1", "Control", "Telemetry"];

const productCards = [
  {
    title: "ARO G1",
    text: ["Autonomous field monitoring", "Live telemetry dashboard", "Smart resource optimization"],
    image: images.product1,
  },
  {
    title: "G1 Control Center",
    text: ["Device pairing", "Sensor status", "Remote operational insights"],
    image: images.product2,
  },
  {
    title: "G1 Intelligence",
    text: ["Agriculture-focused data", "Cleaner decision making", "Built for daily use"],
    image: images.product1,
  },
];

const featureSlides = [
  {
    title: "Live Telemetry",
    subtitle: "Real-time visibility",
    body: "Track G1 status, sensor readings, and operational data through one clear control experience.",
    image: images.feature1,
  },
  {
    title: "Smart Resource Optimization",
    subtitle: "Cleaner agriculture decisions",
    body: "ARO G1 helps turn field data into practical insights for better resource usage.",
    image: images.feature2,
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("ARO G1");
  const [activeFeature, setActiveFeature] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNewsletter = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="site">
      <Header
        scrolled={scrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main>
        <section className="hero" id="top">
          <img className="hero-bg" src={images.hero} alt="ARO G1 hero" />

          <div className="hero-content">
            <h1>ARO G1</h1>
            <p>The smart choice for connected agriculture.</p>
            <a href="#g1" className="btn btn-dark">
              Learn More
            </a>
          </div>

          <div className="hero-dots">
            <span />
            <span className="active" />
            <span />
            <span />
          </div>
        </section>

        <section className="product-overview" id="g1">
          <div className="tabs-wrap">
            <div className="tabs">
              {productTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? "active" : ""}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid">
            {productCards.map((card) => (
              <article className="product-item" key={card.title}>
                <div className="product-image-wrap">
                  <img src={card.image} alt={card.title} />
                </div>

                <h2>{card.title}</h2>

                <p>
                  {card.text.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>

                <a href="#features" className="btn btn-dark small">
                  Learn More
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="intro-section">
          <h2>Introducing ARO G1</h2>

          <div className="feature-carousel" id="features">
            <button
              className="carousel-arrow left"
              onClick={() =>
                setActiveFeature((prev) =>
                  prev === 0 ? featureSlides.length - 1 : prev - 1
                )
              }
              aria-label="Previous feature"
            >
              ‹
            </button>

            <div className="feature-main">
              <img
                src={featureSlides[activeFeature].image}
                alt={featureSlides[activeFeature].title}
              />
            </div>

            <div className="feature-copy">
              <h3>{featureSlides[activeFeature].title}</h3>
              <div className="mini-line" />
              <h4>{featureSlides[activeFeature].subtitle}</h4>
              <p>{featureSlides[activeFeature].body}</p>

              <a href="#control" className="btn btn-outline">
                Learn More
              </a>
            </div>

            <div className="feature-preview">
              <img
                src={featureSlides[(activeFeature + 1) % featureSlides.length].image}
                alt="Next ARO G1 feature"
              />
            </div>

            <button
              className="carousel-arrow right"
              onClick={() =>
                setActiveFeature((prev) => (prev + 1) % featureSlides.length)
              }
              aria-label="Next feature"
            >
              ›
            </button>
          </div>

          <div className="carousel-dots">
            {featureSlides.map((_, index) => (
              <button
                key={index}
                className={activeFeature === index ? "active" : ""}
                onClick={() => setActiveFeature(index)}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="control-section" id="control">
          <div>
            <h2>Control Center</h2>
            <p>
              Access telemetry, pairing, device health, and operational tools
              for your ARO G1.
            </p>
          </div>

          <a href="/control" className="btn btn-dark">
            Open Control Center
          </a>
        </section>

        <section className="subscribe-section">
          <div>
            <h2>Subscribe</h2>
            <p>Get the latest updates from ARO.</p>
          </div>

          <form onSubmit={handleNewsletter}>
            <div className="subscribe-input">
              <input
                type="email"
                value={email}
                placeholder="Email address"
                onChange={(event) => setEmail(event.target.value)}
              />
              <button type="submit">Subscribe</button>
            </div>

            <div className="subscribe-links">
              <a href="#">Privacy Policy</a>
              <a href="#">User Agreement</a>
            </div>

            {subscribed && (
              <p className="subscribed-message">Thank you for subscribing.</p>
            )}
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Header({ scrolled, mobileOpen, setMobileOpen }) {
  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <a href="#top" className="logo-link">
          <img src={ARO_LOGO} alt="ARO logo" />
        </a>

        <div className="desktop-nav">
          <div className="nav-dropdown">
            <button>Products</button>

            <div className="mega-menu">
              <div className="mega-inner">
                <aside className="mega-sidebar">
                  <a href="#g1" className="active">
                    ARO G Series
                  </a>
                  <a href="#features">Telemetry Platform</a>
                  <a href="https://grow-mate-web.onrender.com/">Control Center</a>
                  <a href="#discover">Resource Optimization</a>
                  <a href="#support">Support</a>

                  <div className="mega-divider" />

                  <a href="#g1">Compare</a>
                </aside>

                <section className="mega-products">
                  <div className="mega-products-top">
                    <h3>ARO G Series</h3>

                    <a href="#g1" className="mega-explore">
                      Explore
                    </a>
                  </div>

                  <div className="mega-product-list">
                    <a href="#g1" className="mega-product-card">
                      <img src={images.product1} alt="ARO G1" />
                      <span>ARO G1</span>
                    </a>

                    <a href="https://grow-mate-web.onrender.com/" className="mega-product-card">
                      <img src={images.product2} alt="G1 Control Center" />
                      <span>Control Center</span>
                    </a>

                    <a href="#features" className="mega-product-card">
                      <img src={images.product1} alt="G1 Telemetry" />
                      <span>G1 Telemetry</span>
                    </a>

                    <a href="#discover" className="mega-product-card muted">
                      <div className="coming-soon-product">
                        G2
                      </div>
                      <span>Coming Soon</span>
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <a href="#features">Technology</a>
          <a href="#control">Control Center</a>
          <a href="#support">Support</a>
          <a href="#discover">Discover</a>
        </div>

        <a href="https://grow-mate-web.onrender.com/" target="_blank" className="control-link">
          Control Center
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#g1">Products</a>
          <a href="#features">Technology</a>
          <a href="#control">Control Center</a>
          <a href="#support">Support</a>
          <a href="#discover">Discover</a>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer" id="support">
      <div className="footer-main">
        <div>
          <h3>Product</h3>
          <a href="#g1">ARO G1</a>
          <a href="#features">Technology</a>
          <a href="#control">Control Center</a>
        </div>

        <div>
          <h3>Support</h3>
          <a href="#">Documentation</a>
          <a href="#">Service and Warranty</a>
          <a href="#">Contact</a>
          <a href="#">Software Support Policy</a>
        </div>

        <div>
          <h3>Discover</h3>
          <a href="#">ARO App</a>
          <a href="#">ARO Academy</a>
          <a href="#">Trust Center</a>
        </div>

        <div>
          <h3>About ARO</h3>
          <a href="#">About Us</a>
          <a href="#">Newsroom</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <img src={ARO_LOGO} alt="ARO logo" />
        <p>Copyright ARO. All Rights Reserved.</p>

        <div>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">User Agreement</a>
        </div>
      </div>
    </footer>
  );
}

export default App;