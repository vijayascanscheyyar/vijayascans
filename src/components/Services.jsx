function Services() {
  const services = [
    {
      icon: "🩺",
      title: "General Medicine",
      desc: "Expert consultation for all general health concerns.",
    },
    {
      icon: "📡",
      title: "CT Scan",
      desc: "Fast and precise CT imaging for internal diagnostics.",
    },
    {
      icon: "🔊",
      title: "Ultrasound",
      desc: "Real-time ultrasound including obstetric and abdominal.",
    },
    {
      icon: "🩻",
      title: "X-Ray",
      desc: "Digital X-Ray imaging for bones, chest and spine with instant results.",
    },
    {
      icon: "❤️",
      title: "ECG",
      desc: "Electrocardiogram to monitor and detect heart rhythm and activity.",
    },
    {
      icon: "🔬",
      title: "Laboratory",
      desc: "Comprehensive blood, urine and pathology tests.",
    },
    {
      icon: "🦷",
      title: "Dental",
      desc: "Dental care and treatment with implant solutions.",
    },
  ];

  return (
    <section
      id="services"
      style={{ background: "#0B2545", padding: "4.5rem 1.5rem" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              color: "#C9943A",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "2px",
            }}
          >
            WHAT WE OFFER
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              color: "white",
              marginTop: "0.5rem",
            }}
          >
            Our Services
          </h2>
          <div
            style={{
              width: "50px",
              height: "3px",
              background: "#C9943A",
              margin: "1rem auto",
              borderRadius: "2px",
            }}
          />
          <p style={{ color: "#a8c4dc", maxWidth: "500px", margin: "0 auto" }}>
            Comprehensive medical and diagnostic services for all your
            healthcare needs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                padding: "1.4rem",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "0.8rem" }}>
                {s.icon}
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  marginBottom: "6px",
                }}
              >
                {s.title}
              </div>
              <div
                style={{
                  color: "#7fa4c0",
                  fontSize: "0.82rem",
                  lineHeight: "1.6",
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
