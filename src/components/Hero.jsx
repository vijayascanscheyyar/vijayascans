// import medicalBg from "../assets/medical-bg-clean.png";
import medicalBg from "../assets/hero-bg.jpg";

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "4rem 1.5rem",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${medicalBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(11,37,69,0.75) 0%, rgba(26,58,107,0.75) 60%, rgba(27,108,168,0.70) 100%)",

          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* All content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
        }}
      >
        {/* Top content */}
        <div style={{ textAlign: "center", maxWidth: "680px" }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(201,148,58,0.15)",
              border: "1px solid #C9943A",
              color: "#C9943A",
              padding: "5px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "1px",
              marginBottom: "1.2rem",
            }}
          >
            TRUSTED HEALTHCARE SINCE 2022
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "white",
              lineHeight: "1.2",
              marginBottom: "1rem",
            }}
          >
            Your Health, <span style={{ color: "#C9943A" }}>Our Priority</span>
          </h1>

          <p
            style={{
              color: "#c0d4e8",
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              lineHeight: "1.8",
              marginBottom: "2rem",
            }}
          >
            Vijaya Scans & Diagnostics and Senthil Dental Care & Implantology
            Centre provides compassionate, world-class medical care with
            advanced diagnostics and dental solutions — all under one roof.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "#C9943A",
                color: "white",
                border: "none",
                padding: "13px 28px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "500",
                cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Book Appointment
            </button>
            <button
              onClick={() => scrollTo("services")}
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.4)",
                padding: "13px 28px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "500",
                cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {[
            { num: "4+", label: "Years of Excellence" },
            { num: "2+", label: "Specialist Doctors" },
            { num: "1K+", label: "Patients Served" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "12px",
                padding: "1.2rem 1.5rem",
                textAlign: "center",
                flex: "1",
                minWidth: "130px",
                maxWidth: "200px",
              }}
            >
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "2rem",
                  color: "#C9943A",
                  fontWeight: "700",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#a8c4dc",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
