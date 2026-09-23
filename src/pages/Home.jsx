import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home.css";

/* ---------------------------- Icon components ---------------------------- */

const IconLeaf = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4 20c8-1 14-7 15-15-8 1-14 7-15 15z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
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

const IconArrowRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconStar = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 6 6.6.7-4.9 4.5 1.3 6.5L12 16.9 6.1 20.2l1.3-6.5-4.9-4.5 6.6-.7L12 2.5z" />
  </svg>
);

const IconPlay = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path d="M10 8.5l6 3.5-6 3.5v-7z" fill="currentColor" />
  </svg>
);

const IconTrophy = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M7 6H4v1a4 4 0 0 0 4 4M17 6h3v1a4 4 0 0 1-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 14v3M9 20h6M9.5 17.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 20.5s-7.5-4.6-9.8-9.3C.6 7.7 2.2 4.5 5.4 3.9c2-.4 3.9.5 5 2.2 1.1-1.7 3-2.6 5-2.2 3.2.6 4.8 3.8 3.2 7.3-2.3 4.7-9.8 9.3-9.8 9.3v0z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMedal = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9.5 8.5L7 3M14.5 8.5L17 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 11.5l1 2.2 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3 1-2.2z" fill="currentColor" />
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

const DISHES = [
  {
    title: "Grilled Ribeye Steak",
    price: "₦28,000",
    rating: "4.8",
    reviews: 234,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1543900348-f03d06be7653?auto=format&fit=crop&w=400&h=320&q=70",
  },
  {
    title: "Creamy Pasta Alfredo",
    price: "₦18,000",
    rating: "4.8",
    reviews: 86,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=400&h=320&q=70",
  },
  {
    title: "Jollof Rice & Chicken",
    price: "₦15,000",
    rating: "4.7",
    reviews: 86,
    category: "Local Favorite",
    image: "https://images.unsplash.com/photo-1664992960082-0ea299a9c53e?auto=format&fit=crop&w=400&h=320&q=70",
  },
  {
    title: "Chocolate Lava Cake",
    price: "₦10,000",
    rating: "4.8",
    reviews: 72,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1588195542907-a0c0a2ac3312?auto=format&fit=crop&w=400&h=320&q=70",
  },
];

const STATS = [
  { icon: IconTrophy, value: "10+", label: "Years of Excellence" },
  { icon: IconHeart, value: "5k+", label: "Happy Customers" },
  { icon: IconMedal, value: "4.8★", label: "Average Rating" },
];

const REVIEWS = [
  {
    quote: "The food was absolutely amazing! The atmosphere is perfect and the service is top-notch.",
    name: "Aminu Yusuf",
    photo: "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?auto=format&fit=crop&w=100&h=100&q=70",
  },
  {
    quote: "Best restaurant in Lagos! The jollof rice and chicken is to die for. I'll definitely be coming back.",
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1573496527892-904f897eb744?auto=format&fit=crop&w=100&h=100&q=70",
  },
  {
    quote: "Great experience overall. The ambience, food and staff were all excellent.",
    name: "David Okafor",
    photo: "https://images.unsplash.com/photo-1742518424481-b39a7cb4c80e?auto=format&fit=crop&w=100&h=100&q=70",
  },
];

const HERO_IMAGE = "https://images.unsplash.com/photo-1770902971693-8d638e97a496?auto=format&fit=crop&w=1600&q=70";
const STORY_IMAGE = "https://images.unsplash.com/photo-1744561249162-c597c1670032?auto=format&fit=crop&w=1000&q=70";
const CTA_IMAGE = "https://images.unsplash.com/photo-1770902971693-8d638e97a496?auto=format&fit=crop&w=1600&q=70";

export default function Home() {
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

      {/* --------------------------------- Hero --------------------------------- */}
      <section className="zs-hero">
        <img className="zs-hero__bg" src={HERO_IMAGE} alt="Elegant restaurant table setting with wine" />
        <div className="zs-hero__scrim" />
        <div className="zs-hero__inner">
          <p className="zs-hero__eyebrow zs-anim zs-anim--1">GOOD FOOD &nbsp;•&nbsp; GREAT VIBES &nbsp;•&nbsp; MEMORABLE MOMENTS</p>
          <h1 className="zs-hero__title zs-anim zs-anim--2">Exceptional Food For Every Occasion</h1>
          <p className="zs-hero__text zs-anim zs-anim--3">
            Experience the perfect blend of rich flavors, fresh ingredients and a warm, inviting atmosphere at
            Zestora.
          </p>
          <div className="zs-hero__actions zs-anim zs-anim--4">
            <Link to="/menu" className="zs-btn zs-btn--primary">
              View Menu
            </Link>
            <Link to="/reservations" className="zs-btn zs-btn--outline">
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------- Dishes ------------------------------- */}
      <section className="zs-dishes">
        <div className="zs-container">
          <div className="zs-dishes__head">
            <div>
              <h2>Our Signature Dishes</h2>
              <p>A taste of what makes us special.</p>
            </div>
            <Link to="/menu" className="zs-link-arrow">
              View Full Menu <IconArrowRight width="14" height="14" />
            </Link>
          </div>

          <div className="zs-dishes__grid">
            {DISHES.map((dish) => (
              <Link to="/menu" className="zs-dish-card" key={dish.title}>
                <div className="zs-dish-card__image">
                  <img src={dish.image} alt={dish.title} />
                </div>
                <div className="zs-dish-card__body">
                  <h3>{dish.title}</h3>
                  <p className="zs-dish-card__price">{dish.price}</p>
                  <p className="zs-dish-card__rating">
                    <IconStar width="13" height="13" /> {dish.rating} ({dish.reviews})
                  </p>
                  <p className="zs-dish-card__category">{dish.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------- More Than a Meal --------------------------- */}
      <section className="zs-story">
        <img className="zs-story__bg" src={STORY_IMAGE} alt="Zestora restaurant interior with warm lighting" />
        <div className="zs-story__scrim" />
        <div className="zs-container zs-story__inner">
          <div className="zs-story__content">
            <h2>More Than Just a Meal</h2>
            <p>
              At Zestora, we don't just serve food, we create experiences. From intimate dinners to group
              celebrations, we're here to make every moment special.
            </p>
            <div className="zs-story__actions">
              <Link to="/about" className="zs-btn zs-btn--primary">
                Our Story
              </Link>
              <button className="zs-watch-link" type="button">
                <IconPlay width="30" height="30" /> Watch Video
              </button>
            </div>
          </div>

          <div className="zs-story__stats">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div className="zs-story__stat" key={label}>
                <Icon width="20" height="20" />
                <span className="zs-story__stat-value">{value}</span>
                <span className="zs-story__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- Reviews -------------------------------- */}
      <section className="zs-reviews">
        <div className="zs-container">
          <div className="zs-reviews__head">
            <div>
              <h2>What Our Guests Say</h2>
              <p>Real reviews from our amazing customers.</p>
            </div>
            <Link to="/about" className="zs-link-arrow">
              View All Reviews <IconArrowRight width="14" height="14" />
            </Link>
          </div>

          <div className="zs-reviews__grid">
            {REVIEWS.map((review) => (
              <div className="zs-review-card" key={review.name}>
                <p className="zs-review-card__quote">&ldquo;{review.quote}&rdquo;</p>
                <div className="zs-review-card__footer">
                  <img src={review.photo} alt={review.name} />
                  <div>
                    <strong>{review.name}</strong>
                    <span className="zs-review-card__stars">
                      <IconStar width="12" height="12" />
                      <IconStar width="12" height="12" />
                      <IconStar width="12" height="12" />
                      <IconStar width="12" height="12" />
                      <IconStar width="12" height="12" />
                    </span>
                    <span className="zs-review-card__score">5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------- CTA ---------------------------------- */}
      <section className="zs-cta">
        <img className="zs-cta__bg" src={CTA_IMAGE} alt="Beautifully set dinner table" />
        <div className="zs-cta__scrim" />
        <div className="zs-container zs-cta__inner">
          <div>
            <h2>Ready to Dine With Us?</h2>
            <p>Make a reservation and let us take care of the rest.</p>
          </div>
          <Link to="/reservations" className="zs-btn zs-btn--primary">
            Book a Table
          </Link>
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