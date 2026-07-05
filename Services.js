function Services() {
  return (
<section className="services">

    <h1>My Expertise</h1>

    <div className="service-container">

        <div className="service-card">
            <div className="service-icon">💻</div>

            <h2>Web Development</h2>

            <p>
                Responsive websites using React, HTML, CSS and JavaScript.
            </p>
        </div>

        <div className="service-card">
            <div className="service-icon">📱</div>

            <h2>App Development</h2>

            <p>
                Android applications using Java with clean UI and smooth performance.
            </p>
        </div>

        <div className="service-card">
            <div className="service-icon">🤖</div>

            <h2>AI Solutions</h2>

            <p>
                Python, Machine Learning and AI-based applications for solving real problems.
            </p>
        </div>

    </div>

</section>
  );
}

export default Services;