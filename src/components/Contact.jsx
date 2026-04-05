function Contact() {
  const timings = [
    { days: "Saturday", time: "7:00 AM – 9:00 PM" },
    { days: "Sunday", time: "7:00 AM – 3:00 PM" },
    { days: "Monday", time: "7:00 AM – 9:00 PM" },
    { days: "Tuesday", time: "7:00 AM – 9:00 PM" },
    { days: "Wednesday", time: "7:00 AM – 9:00 PM" },
    { days: "Thursday", time: "7:00 AM – 9:00 PM" },
    { days: "Friday", time: "7:00 AM – 9:00 PM" },
  ];

  return (
    <section
      id="contact"
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
            GET IN TOUCH
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              color: "#0B2545",
              marginTop: "0.5rem",
            }}
          >
            Contact & Location
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
            Book an appointment or visit us. We are always here to help.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2.5rem",
            alignItems: "flex-start",
          }}
        >
          {/* Contact details */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            {[
              {
                icon: "📍",
                title: "Address",
                detail: "[No.5, Arcot Road], [Cheyyar, Tamil Nadu, 604407]",
              },
              {
                icon: "📞",
                title: "Phone / Appointment",
                detail: "+91 [7418328577]\n+91 [6382692220]",
              },
              {
                icon: "📧",
                title: "Email",
                detail: "vijayascanscheyyar@gmail.com",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1.4rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    background: "#EAF4FB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      color: "#0B2545",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#5a6a7e",
                      lineHeight: "1.7",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}

            {/* Timings table */}
            <h3
              style={{
                fontSize: "1.1rem",
                color: "#0B2545",
                margin: "1.5rem 0 1rem",
              }}
            >
              Service Timings
            </h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.82rem",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      background: "#EAF4FB",
                      color: "#0B2545",
                      padding: "8px 12px",
                      textAlign: "left",
                      fontWeight: "500",
                    }}
                  >
                    Days
                  </th>
                  <th
                    style={{
                      background: "#EAF4FB",
                      color: "#0B2545",
                      padding: "8px 12px",
                      textAlign: "left",
                      fontWeight: "500",
                    }}
                  >
                    Timings
                  </th>
                </tr>
              </thead>
              <tbody>
                {timings.map((t) => (
                  <tr key={t.days}>
                    <td
                      style={{
                        padding: "8px 12px",
                        color: "#5a6a7e",
                        borderBottom: "1px solid #dce6f0",
                      }}
                    >
                      {t.days}
                    </td>
                    <td
                      style={{
                        padding: "8px 12px",
                        color: "#5a6a7e",
                        borderBottom: "1px solid #dce6f0",
                      }}
                    >
                      {t.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Google Map */}
          <div style={{ flex: "1", minWidth: "280px" }}>
            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #dce6f0",
                height: "520px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.6589937609815!2d79.53589697483599!3d12.670349687618023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52d74bd14b70bd%3A0x42527493bd879f3d!2sVIJAYA%20SCANS%20%26%20DIAGNOSTICS%20AND%20SENTHIL%20DENTAL%20CARE%20%26%20IMPLANTOLOGY%20CENTRE!5e0!3m2!1sen!2sin!4v1774717829892!5m2!1sen!2sin"
                height="100%"
                width="100%"
                style={{ border: "none" }}
                allowFullScreen=""
                loading="lazy"
                title="Hospital Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
