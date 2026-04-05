import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#0B2545",
        boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
      }}
    >
      {/* Main bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          height: "64px",
        }}
      >
        {/* Logo + Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="Vijaya Hospitals Logo"
            style={{
              width: "40px",
              height: "40px",
              background: "#ffffffce",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #8bc4fa",
              flexShrink: 0,
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "3px" }}
            >
              <div
                style={{
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "clamp(9px, 2.2vw, 17px)",
                  fontWeight: "700",
                  letterSpacing: "clamp(0.5px, 0.3vw, 2px)",
                  whiteSpace: "nowrap",
                }}
              >
                VIJAYA SCANS & DIAGNOSTICS
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <div
                  style={{
                    width: "1px",
                    height: "10px",
                    background: "#C9943A",
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    color: "#C9943A",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "clamp(6px, 1.3vw, 10px)",
                    fontWeight: "700",
                    letterSpacing: "clamp(0.5px, 0.4vw, 2.55px)",
                    whiteSpace: "nowrap",
                  }}
                >
                  SENTHIL DENTAL CARE & IMPLANTOLOGY
                </div>
              </div>
            </div>

            {/* Gold vertical divider */}
            <div
              style={{
                width: "1.5px",
                height: "34px",
                background: "rgba(201,148,58,0.4)",
                flexShrink: 0,
              }}
            />

            {/* CENTRE */}
            <div
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "clamp(12px, 2.5vw, 22px)",
                fontWeight: "700",
                color: "#C9943A",
                letterSpacing: "1px",
                whiteSpace: "nowrap",
              }}
            >
              CENTRE
            </div>
          </div>
        </div>

        {/* Desktop nav — hidden on tablet and mobile */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "1.2rem",
            alignItems: "center",
          }}
        >
          {["about", "doctors", "services", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              style={{
                background: "none",
                border: "none",
                color: "#a8c4dc",
                fontSize: "13px",
                fontWeight: "500",
                cursor: "pointer",
                textTransform: "capitalize",
                fontFamily: "DM Sans, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: "#C9943A",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "500",
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Book Appointment
          </button>
        </div>

        {/* Hamburger — shown on tablet and mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
            marginLeft: "8px",
            borderRadius: "6px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "white",
              borderRadius: "2px",
              transform: menuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
              transition: "transform 0.3s, opacity 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "white",
              borderRadius: "2px",
              opacity: menuOpen ? 0 : 1,
              transition: "transform 0.3s, opacity 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "white",
              borderRadius: "2px",
              transform: menuOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
              transition: "transform 0.3s, opacity 0.3s",
            }}
          />
        </button>
      </div>

      {/* Mobile + Tablet dropdown menu */}
      <div
        className="mobile-menu"
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          background: "#0d2d54",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "0.5rem 0",
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {["about", "doctors", "services", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollTo(section)}
            style={{
              background: "none",
              border: "none",
              color: "#a8c4dc",
              fontSize: "15px",
              fontWeight: "500",
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
              textAlign: "left",
              padding: "14px 1.5rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              textTransform: "capitalize",
              width: "100%",
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
        <div style={{ padding: "1rem 1.5rem" }}>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              background: "#C9943A",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              fontFamily: "DM Sans, sans-serif",
              width: "100%",
            }}
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Responsive breakpoints */}
      <style>{`

        /* Large desktop — show nav links */
        @media (min-width: 1025px) {
          .desktop-nav { display: flex !important; }
          .hamburger { display: none !important; }
        }

        /* iPad Pro, tablets landscape (768px–1024px) */
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }

        /* iPad portrait, large phones (481px–768px) */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }

        /* iPhone SE, small phones (up to 480px) */
        @media (max-width: 480px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }

        /* iOS Safari fix — prevent tap highlight */
        button {
          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
        }

        /* Smooth scrolling for iOS */
        html {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
