import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./gallery.css";

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

const IconChevronLeft = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconChevronRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

const FILTER_TABS = ["All", "Food", "Interior", "Events"];

// Unsplash — free to use, no attribution required (Unsplash License)
const PHOTOS = [
  {
    caption: "Grilled ribeye steak",
    category: "Food",
    image: "https://images.unsplash.com/photo-1543900348-f03d06be7653?auto=format&fit=crop&w=700&h=700&q=70",
  },
  {
    caption: "Creamy pasta alfredo",
    category: "Food",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=700&h=700&q=70",
  },
  {
    caption: "Dining room with warm lighting",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1744561249162-c597c1670032?auto=format&fit=crop&w=700&h=700&q=70",
  },
  {
    caption: "Colorful house cocktails",
    category: "Food",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&h=700&q=70",
  },
  {
    caption: "Zestora dining area",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1713547174010-b53fa1cc4b98?auto=format&fit=crop&w=700&h=700&q=70",
  },
  {
    caption: "Chocolate lava cake with berries",
    category: "Food",
    image: "https://images.unsplash.com/photo-1588195542907-a0c0a2ac3312?auto=format&fit=crop&w=700&h=700&q=70",
  },
  {
    caption: "Table set for wine service",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1770902971693-8d638e97a496?auto=format&fit=crop&w=700&h=700&q=70",
  },
  {
    caption: "Grilled seafood plate",
    category: "Food",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=700&h=700&q=70",
  },
  {
    caption: "Guests celebrating together",
    category: "Events",
    image: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=700&h=700&q=70",
  },
];

const HEADER_IMAGE = "https://images.unsplash.com/photo-1543900348-f03d06be7653?auto=format&fit=crop&w=1600&q=70";

export default function Gallery() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const routerLocation = useLocation();

  const isActive = (path) =>
    path === "/" ? routerLocation.pathname === "/" : routerLocation.pathname.startsWith(path);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, lightboxIndex]);

  const visiblePhotos = activeTab === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === activeTab);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    (e) => {
      e.stopPropagation();
      setLightboxIndex((i) => (i - 1 + visiblePhotos.length) % visiblePhotos.length);
    },
    [visiblePhotos.length]
  );
  const showNext = useCallback(
    (e) => {
      e.stopPropagation();
      setLightboxIndex((i) => (i + 1) % visiblePhotos.length);
    },
    [visiblePhotos.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + visiblePhotos.length) % visiblePhotos.length);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % visiblePhotos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, visiblePhotos.length, closeLightbox]);

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
        <img className="zs-page-header__bg" src={HEADER_IMAGE} alt="Plated dish close-up" />
        <div className="zs-page-header__scrim" />
        <div className="zs-page-header__inner">
          <h1>Gallery</h1>
          <p>A glimpse of the moments, flavors and spaces that make Zestora special.</p>
        </div>
      </section>

      {/* --------------------------------- Grid --------------------------------- */}
      <section className="zs-gallery">
        <div className="zs-container">
          <div className="zs-tabs" role="tablist" aria-label="Filter gallery">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`zs-tab ${activeTab === tab ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="zs-gallery__grid">
            {visiblePhotos.map((photo, index) => (
              <button
                key={photo.image}
                className="zs-gallery__item"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Open photo: ${photo.caption}`}
              >
                <img src={photo.image} alt={photo.caption} loading="lazy" />
                <span className="zs-gallery__item-overlay" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- Lightbox -------------------------------- */}
      {lightboxIndex !== null && (
        <div className="zs-lightbox" onClick={closeLightbox}>
          <button className="zs-lightbox__close" aria-label="Close" onClick={closeLightbox}>
            <IconClose width="22" height="22" />
          </button>
          <button className="zs-lightbox__nav zs-lightbox__nav--prev" aria-label="Previous photo" onClick={showPrev}>
            <IconChevronLeft width="22" height="22" />
          </button>
          <figure className="zs-lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img
              key={visiblePhotos[lightboxIndex].image}
              src={visiblePhotos[lightboxIndex].image.replace("w=700&h=700", "w=1400&h=1400")}
              alt={visiblePhotos[lightboxIndex].caption}
              className="zs-lightbox__image"
            />
            <figcaption>{visiblePhotos[lightboxIndex].caption}</figcaption>
          </figure>
          <button className="zs-lightbox__nav zs-lightbox__nav--next" aria-label="Next photo" onClick={showNext}>
            <IconChevronRight width="22" height="22" />
          </button>
        </div>
      )}

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