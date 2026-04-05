import hospitalimage from "../assets/482A1538.JPG";
import medicalPattern from "../assets/medical-bg-clean.png";

function About() {
  const highlights = [
    {
      icon: "🏥",
      title: "Advanced Scans and Diagnostics",
      desc: "CT Scan, Ultrasound, X-Ray, ECG, Imaging Services & Diagnostics",
    },
    {
      icon: "🦷",
      title: "Dental Care and Implantology",
      desc: "Expert dental care & treatments with implant solutions",
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "4.5rem 1.5rem",
        position: "relative",
        backgroundImage: `url(${medicalPattern})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay — white tint so text is readable */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* All content above overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              color: "#7DDFF5",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            WHO WE ARE
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              color: "white",
              marginTop: "0.5rem",
            }}
          >
            About Vijaya Scans & Diagnostics Centre
          </h2>
          <div
            style={{
              width: "50px",
              height: "3px",
              background: "#7DDFF5",
              margin: "1rem auto",
              borderRadius: "2px",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            A trusted name in healthcare, committed to quality, compassion and
            comprehensive medical services.
          </p>
        </div>

        {/* Content — stacks on mobile, side by side on desktop */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            alignItems: "flex-start",
          }}
        >
          {/* Left text */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <h3
              style={{
                fontSize: "1.4rem",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Caring for Communities Since 2022
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.80)",
                lineHeight: "1.8",
                marginBottom: "1rem",
                fontSize: "0.97rem",
              }}
            >
              Vijaya Scan & Diagnostics and Senthil Dental Care & Implantology
              Center was established with a mission to provide affordable and
              high-quality healthcare to every patient. Located at the heart of
              the city, we combine experienced professionals with advanced
              technology.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.80)",
                lineHeight: "1.8",
                fontSize: "0.97rem",
              }}
            >
              Our state-of-the-art scan center is equipped with modern imaging
              technology to ensure accurate and timely diagnosis — because the
              right diagnosis is the foundation of the right treatment.
            </p>

            {/* Highlights grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
                marginTop: "1.5rem",
              }}
            >
              {highlights.map((h) => (
                <div
                  key={h.title}
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderLeft: "3px solid #7DDFF5",
                    borderRadius: "10px",
                    padding: "1rem",
                  }}
                >
                  <div style={{ fontSize: "20px", marginBottom: "6px" }}>
                    {h.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "white",
                      fontWeight: "500",
                    }}
                  >
                    {h.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.75)",
                      marginTop: "3px",
                    }}
                  >
                    {h.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right hospital image */}
          <div
            style={{
              flex: "1",
              minWidth: "280px",
              borderRadius: "16px",
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.25)",
              minHeight: "320px",
            }}
          >
            <img
              src={hospitalimage}
              alt="Vijaya Hospitals"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "320px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
