import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./about.css";

/* ---------------------------- Icon components ---------------------------- */

const IconLeaf = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 20c8-1 14-7 15-15-8 1-14 7-15 15z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6 18c3-4 7-8 12-11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconClose = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconChefHat = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7 10.5a3.5 3.5 0 0 1 1.3-6.7c.4-1 1.5-1.8 2.7-1.8s2.3.8 2.7 1.8a3.5 3.5 0 0 1 1.3 6.7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M7 10.5h10V16H7v-5.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M6 16h12v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconBell = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 16c2-1 2.5-3 2.5-5.5C6.5 6.9 8.9 4 12 4s5.5 2.9 5.5 6.5c0 2.5.5 4.5 2.5 5.5H4z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M9.5 18.5a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconShieldHeart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 3l7 3v5.5c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6l7-3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 15s-2.7-1.6-2.7-3.5c0-1 .8-1.7 1.6-1.7.5 0 1 .3 1.1.7.1-.4.6-.7 1.1-.7.8 0 1.6.7 1.6 1.7C14.7 13.4 12 15 12 15z"
      fill="currentColor"
    />
  </svg>
);

const IconUsers = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 19c.8-3 3-4.6 6-4.6s5.2 1.6 6 4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8.3a3 3 0 1 1 3.3 4.4M15.5 14.6c2.3.3 3.9 1.8 4.5 4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* footer icons */
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V19c0 .6-.4 1-1 1C10.6 20 4 13.4 4 5c0-.6.4-1 1-1h3c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.3 1l-2 2z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 21s7-6.3 7-11.5C19 5.9 15.9 3 12 3S5 5.9 5 9.5C5 14.7 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9.5c0-.3.2-.5.5-.5z" fill="currentColor" />
  </svg>
);

const IconX = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconTiktok = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15 3c.4 2.2 1.9 3.7 4 4v3c-1.5 0-2.9-.4-4-1.2V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v3.1a2.4 2.4 0 1 0 1.7 2.3V3H15z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

/* --------------------------------- Data ---------------------------------- */

const VALUES = [
  { icon: IconChefHat, title: "Quality Food", text: "Fresh, premium ingredients" },
  { icon: IconBell, title: "Great Service", text: "Friendly, attentive staff" },
  { icon: IconShieldHeart, title: "Warm Atmosphere", text: "Comfortable & elegant space" },
  { icon: IconUsers, title: "Community", text: "Supporting local farmers & suppliers" },
];

// Unsplash — free to use, no attribution required (Unsplash License)
const HEADER_IMAGE = "https://images.unsplash.com/photo-1744561249162-c597c1670032?auto=format&fit=crop&w=1600&q=70";
const STORY_IMAGE = "https://images.unsplash.com/photo-1713547174010-b53fa1cc4b98?auto=format&fit=crop&w=900&h=650&q=70";
const CHEF_IMAGE = "https://images.unsplash.com/photo-1750943082452-c714763f73b2?auto=format&fit=crop&w=700&h=800&q=70";
const QUOTE_IMAGE = "https://images.unsplash.com/photo-1770902971693-8d638e97a496?auto=format&fit=crop&w=1600&q=70";

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerLocation = useLocation();

  const isActive = (path) =>
    path === "/" ? routerLocation.pathname === "/" : routerLocation.pathname.startsWith(path);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="zs-page">
      {/* ----------------------------- Navbar ----------------------------- */}
      <header className={`zs-nav ${scrolled ? "zs-nav--scrolled" : ""}`}>
        <div className="zs-nav__inner">
          <Link to="/" className="zs-logo">
            <span className="zs-logo__mark" aria-hidden="true">
              <IconLeaf width="18" height="18" />
            </span>
            <span className="zs-logo__text">Zestora</span>
          </Link>

          <nav className="zs-nav__links" aria-label="Primary">
            <Link to="/" className={`zs-nav__link${isActive("/") ? " is-active" : ""}`}>Home</Link>
            <Link to="/menu" className={`zs-nav__link${isActive("/menu") ? " is-active" : ""}`}>Menu</Link>
            <Link to="/about" className={`zs-nav__link${isActive("/about") ? " is-active" : ""}`}>About</Link>
            <Link to="/gallery" className={`zs-nav__link${isActive("/gallery") ? " is-active" : ""}`}>Gallery</Link>
            <Link to="/reservations" className={`zs-nav__link${isActive("/reservations") ? " is-active" : ""}`}>Reservations</Link>
            <Link to="/contact" className={`zs-nav__link${isActive("/contact") ? " is-active" : ""}`}>Contact</Link>
          </nav>

          <div className="zs-nav__actions">
            <Link to="/reservations" className="zs-btn zs-btn--primary zs-btn--sm">
              Book a Table
            </Link>
            <button className="zs-menu-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
              <IconMenu width="24" height="24" />
            </button>
          </div>
        </div>
      </header>

      {/* -------------------------- Mobile menu -------------------------- */}
      <div className={`zs-mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="zs-mobile-menu__header">
          <span className="zs-logo__text zs-logo__text--dark">Zestora</span>
          <button className="zs-icon-btn" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <IconClose width="22" height="22" />
          </button>
        </div>
        <nav className="zs-mobile-menu__links" aria-label="Mobile">
          <Link to="/" className={isActive("/") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/menu" className={isActive("/menu") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/about" className={isActive("/about") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/gallery" className={isActive("/gallery") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/reservations" className={isActive("/reservations") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Reservations</Link>
          <Link to="/contact" className={isActive("/contact") ? "is-active" : ""} onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
        <Link to="/reservations" className="zs-btn zs-btn--primary zs-mobile-menu__cta" onClick={() => setMenuOpen(false)}>
          Book a Table
        </Link>
      </div>
      <button
        className={`zs-mobile-scrim ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      {/* ----------------------------- Page header ----------------------------- */}
      <section className="zs-page-header">
        <img className="zs-page-header__bg" src={HEADER_IMAGE} alt="Zestora restaurant interior" />
        <div className="zs-page-header__scrim" />
        <div className="zs-page-header__inner">
          <h1>About Us</h1>
          <p>A story of passion, flavor and people.</p>
        </div>
      </section>

      {/* -------------------------------- Story -------------------------------- */}
      <section className="zs-story-section">
        <div className="zs-container zs-story__grid">
          <div className="zs-story__content">
            <h2>Our Story</h2>
            <p>
              Zestora was born from a simple belief — that great food brings people together. What started as a
              small dream has grown into a destination where delicious cuisine, warm hospitality and unforgettable
              experiences meet.
            </p>
            <p>
              We source the freshest ingredients, work with talented chefs, and create a space where every meal
              feels like a celebration. Whether you're here for a casual lunch, a romantic dinner, or a special
              event, you're always welcome at Zestora.
            </p>
          </div>
          <div className="zs-story__image">
            <img src={STORY_IMAGE} alt="Zestora dining room" />
          </div>
        </div>

        <div className="zs-container">
          <h2 className="zs-values__heading">Our Values</h2>
          <div className="zs-values__grid">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div className="zs-value-card" key={title}>
                <span className="zs-value-card__icon">
                  <Icon width="20" height="20" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- Our Chef -------------------------------- */}
      <section className="zs-chef">
        <div className="zs-container zs-chef__grid">
          <div className="zs-chef__content">
            <h2>Our Chef</h2>
            <p>
              With over 15 years of experience, our head chef brings creativity, skill and a deep love for food to
              every dish.
            </p>
            <p className="zs-chef__signature">Chef Daniel Okafor</p>
            <span className="zs-chef__role">Head Chef</span>
            <Link to="/contact" className="zs-btn zs-btn--primary zs-chef__btn">
              Meet Our Team
            </Link>
          </div>
          <div className="zs-chef__image">
            <img src={CHEF_IMAGE} alt="Chef Daniel Okafor plating a dish" />
          </div>
        </div>
      </section>

      {/* -------------------------------- Quote -------------------------------- */}
      <section className="zs-quote">
        <img className="zs-quote__bg" src={QUOTE_IMAGE} alt="Plated food with wine glasses" />
        <div className="zs-quote__scrim" />
        <div className="zs-container zs-quote__inner">
          <p>&ldquo;Good food is not just about taste, it's about creating memories.&rdquo;</p>
          <span>— Zestora</span>
        </div>
      </section>

      {/* --------------------------------- Footer -------------------------------- */}
      <footer className="zs-footer">
        <div className="zs-container zs-footer__grid">
          <div className="zs-footer__brand">
            <Link to="/" className="zs-logo">
              <span className="zs-logo__mark" aria-hidden="true">
                <IconLeaf width="18" height="18" />
              </span>
              <span className="zs-logo__text">Zestora</span>
            </Link>
            <p>Good food. Great vibes. Memorable moments.</p>
          </div>

          <div className="zs-footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="zs-footer__col zs-footer__contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <IconPhone width="16" height="16" /> <span>+234 801 234 5678</span>
              </li>
              <li>
                <IconMail width="16" height="16" /> <span>hello@zestora.com</span>
              </li>
              <li>
                <IconPin width="16" height="16" /> <span>Victoria Island, Lagos, Nigeria</span>
              </li>
            </ul>
            <div className="zs-footer__social">
              <Link to="/" aria-label="Facebook"><IconFacebook width="16" height="16" /></Link>
              <Link to="/" aria-label="X"><IconX width="16" height="16" /></Link>
              <Link to="/" aria-label="TikTok"><IconTiktok width="16" height="16" /></Link>
            </div>
          </div>
        </div>

        <div className="zs-container zs-footer__bottom">
          <p>© 2025 Zestora. All rights reserved.</p>
          <div className="zs-footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}