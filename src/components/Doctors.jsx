function Doctors() {
  const doctors = [
    {
      name: "Dr.K.Rajalakshmi",
      spec: "Radiologist",
      qual: "MBBS, MD",
      exp: "10+ Years",
      initial: "R",
    },
    {
      name: "Dr.S.Senthil Nathan",
      spec: "Facio-maxillary Surgeon",
      qual: "BDS, MDS",
      exp: "10+ Years",
      initial: "S",
    },
  ];

  return (
    <section
      id="doctors"
      style={{ background: "white", padding: "4.5rem 1.5rem" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              color: "#1B6CA8",
              fontSize: "12px",
              fontWeight: "500",
              letterSpacing: "2px",
            }}
          >
            OUR TEAM
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              color: "#0B2545",
              marginTop: "0.5rem",
            }}
          >
            Meet Our Doctors
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
          <p style={{ color: "#5a6a7e", maxWidth: "500px", margin: "0 auto" }}>
            Experienced specialists dedicated to your health and well-being.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {doctors.map((doc, i) => (
            <div
              key={i}
              style={{
                background: "#F7F9FC",
                borderRadius: "14px",
                padding: "1.5rem",
                textAlign: "center",
                border: "1px solid #dce6f0",
              }}
            >
              <div
                style={{
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1B6CA8, #0B2545)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "1.6rem",
                  color: "white",
                  fontWeight: "700",
                  fontFamily: "Playfair Display, serif",
                  border: "3px solid #C9943A",
                }}
              >
                {doc.initial}
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  color: "#0B2545",
                  fontWeight: "500",
                }}
              >
                {doc.name}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "#1B6CA8",
                  fontWeight: "500",
                  margin: "4px 0",
                }}
              >
                {doc.spec}
              </div>
              <div style={{ fontSize: "0.78rem", color: "#5a6a7e" }}>
                {doc.qual}
              </div>
              <div style={{ fontSize: "0.78rem", color: "#5a6a7e" }}>
                {doc.exp} Experience
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
