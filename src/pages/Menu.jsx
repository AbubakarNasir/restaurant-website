import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./menu.css";

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

const IconPlus = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

const CATEGORIES = ["All", "Starters", "Main Courses", "Pasta", "Local Dishes", "Desserts", "Drinks"];

// Unsplash — free to use, no attribution required (Unsplash License)
// Items flagged "placeholder: true" reuse a crop from a different dish's photo — swap these for real shots when you have them.
const MENU_SECTIONS = [
  {
    name: "Starters",
    subtitle: "Perfect for sharing or starting your journey.",
    items: [
      {
        name: "Spicy Chicken Wings",
        description: "Crispy wings with house sauce",
        price: "₦8,000",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
      },
      {
        name: "Mozzarella Sticks",
        description: "Golden fried with marinara sauce",
        price: "₦7,000",
        image: "https://images.unsplash.com/photo-1556008531-57e6eefc7be4?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
        placeholder: true,
      },
      {
        name: "Garlic Bread",
        description: "Freshly baked with herbs",
        price: "₦5,000",
        image: "https://images.unsplash.com/photo-1556008531-57e6eefc7be4?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
      },
      {
        name: "Bruschetta",
        description: "Tomatoes, basil, olive oil",
        price: "₦6,000",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
        placeholder: true,
      },
    ],
  },
  {
    name: "Main Courses",
    subtitle: "Our signature dishes, made with the finest ingredients.",
    items: [
      {
        name: "Grilled Ribeye Steak",
        description: "Served with mashed potatoes & vegetables",
        price: "₦28,000",
        image: "https://images.unsplash.com/photo-1543900348-f03d06be7653?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
      },
      {
        name: "Chicken Alfredo",
        description: "Creamy pasta with grilled chicken",
        price: "₦18,000",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
      },
      {
        name: "Jollof Rice & Chicken",
        description: "Classic Nigerian favorite",
        price: "₦15,000",
        image: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: true,
      },
      {
        name: "Grilled Salmon",
        description: "With roasted vegetables",
        price: "₦26,000",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
      },
    ],
  },
  {
    name: "Pasta",
    subtitle: "Classic recipes, modern twist.",
    items: [
      {
        name: "Spaghetti Bolognese",
        description: "Rich meat sauce, parmesan",
        price: "₦16,000",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
        placeholder: true,
      },
      {
        name: "Penne Arrabbiata",
        description: "Spicy tomato sauce",
        price: "₦14,000",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
        placeholder: true,
      },
    ],
  },
  {
    name: "Desserts",
    subtitle: "A sweet way to end your meal.",
    items: [
      {
        name: "Chocolate Lava Cake",
        description: "Warm molten center, vanilla ice cream on the side",
        price: "₦10,000",
        image: "https://images.unsplash.com/photo-1588195542907-a0c0a2ac3312?auto=format&fit=crop&w=300&h=300&q=70",
        isLocal: false,
      },
    ],
  },
];

const HEADER_IMAGE = "https://images.unsplash.com/photo-1543900348-f03d06be7653?auto=format&fit=crop&w=1600&q=70";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [added, setAdded] = useState({});
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

  const toggleAdded = (key) => {
    setAdded((a) => ({ ...a, [key]: !a[key] }));
  };

  const visibleSections = MENU_SECTIONS.map((section) => {
    let items = section.items;
    if (activeTab === "Local Dishes") {
      items = section.items.filter((i) => i.isLocal);
    } else if (activeTab !== "All" && activeTab !== section.name) {
      items = [];
    }
    return { ...section, items };
  }).filter((section) => section.items.length > 0);

  const noResults = visibleSections.length === 0;

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
        <img className="zs-page-header__bg" src={HEADER_IMAGE} alt="Plated steak dish with garnish" />
        <div className="zs-page-header__scrim" />
        <div className="zs-page-header__inner">
          <h1>Our Menu</h1>
          <p>Fresh ingredients. Bold flavors. Carefully crafted.</p>
        </div>
      </section>

      {/* -------------------------------- Filters -------------------------------- */}
      <section className="zs-menu">
        <div className="zs-container">
          <div className="zs-tabs" role="tablist" aria-label="Filter menu by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeTab === cat}
                className={`zs-tab ${activeTab === cat ? "is-active" : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {noResults && (
            <p className="zs-menu__empty">
              Nothing listed under {activeTab} yet — check back soon or browse another category.
            </p>
          )}

          {visibleSections.map((section) => (
            <div className="zs-menu-section" key={section.name}>
              <h2>{section.name}</h2>
              <p className="zs-menu-section__subtitle">{section.subtitle}</p>

              <div className="zs-menu-section__grid">
                {section.items.map((item) => {
                  const key = `${section.name}-${item.name}`;
                  const isAdded = !!added[key];
                  return (
                    <div className="zs-menu-item" key={key}>
                      <div className="zs-menu-item__image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="zs-menu-item__body">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span className="zs-menu-item__price">{item.price}</span>
                      </div>
                      <button
                        className={`zs-menu-item__add ${isAdded ? "is-added" : ""}`}
                        aria-label={isAdded ? `Remove ${item.name}` : `Add ${item.name}`}
                        onClick={() => toggleAdded(key)}
                      >
                        {isAdded ? <IconCheck width="16" height="16" /> : <IconPlus width="16" height="16" />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
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