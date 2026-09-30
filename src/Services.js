function Services() {
  return (
    <section className="services">

      <h1>My Expertise</h1>

      <div className="service-container">

        {/* Web Development */}
        <div className="service-card">

          <div className="service-icon">💻</div>

          <h2>Web Development</h2>

          <p>
            Responsive websites using React, HTML, CSS and JavaScript.
          </p>

        </div>


        {/* App Development */}
        <div className="service-card">

          <div className="service-icon">📱</div>

          <h2>App Development</h2>

          <p>
            Android applications using Java with clean UI and smooth performance.
          </p>

        </div>


        {/* Data & AI */}
        <div className="service-card">

          <div className="service-icon">🤖</div>

          <h2>Data & AI Solutions</h2>

          <p>
            Python, Pandas, Machine Learning, Data Visualization, RAG and
            AI-based applications for solving real problems.
          </p>

        </div>


        {/* Cybersecurity */}
        <div className="service-card">

          <div className="service-icon">🛡️</div>

          <h2>Cybersecurity</h2>

          <p>
            Security log analysis, threat detection, authentication and
            secure application development.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Services;
