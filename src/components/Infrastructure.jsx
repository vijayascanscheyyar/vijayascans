function Infrastructure() {
  const stats = [
    { num: "3T", label: "MRI Machine Tesla" },
    { num: "64", label: "Slice CT Scanner" },
    { num: "30+", label: "Inpatient Beds" },
    { num: "2", label: "Operation Theatres" },
    { num: "24/7", label: "Emergency Unit" },
    { num: "1", label: "In-House Pharmacy" },
  ];

  return (
    <section
      id="infra"
      style={{ background: "#F7F9FC", padding: "4.5rem 1.5rem" }}
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
            OUR FACILITIES
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              color: "#0B2545",
              marginTop: "0.5rem",
            }}
          >
            World-Class Infrastructure
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
            Modern equipment and a patient-first environment for the best care
            experience.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "white",
                border: "1px solid #dce6f0",
                borderRadius: "12px",
                padding: "1.5rem 1rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "2rem",
                  color: "#1B6CA8",
                  fontWeight: "700",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "#5a6a7e",
                  marginTop: "6px",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Infrastructure;
