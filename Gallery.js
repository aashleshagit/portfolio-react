function Gallery() {
  return (
    <section className="projects">

      <h1>🚀 My Projects</h1>

      <p className="project-title">
        Here are some projects that showcase my technical skills.
      </p>

      <div className="project-container">

        <div className="project-card">

          <div className="project-icon">
            🤖
          </div>

          <h2>AI Financial Coach</h2>

          <p>
            AI-powered finance assistant for students with expense tracking,
            budgeting and savings analysis.
          </p>

          <h3>Tech Stack</h3>

          <div className="tech">

            <span>React</span>

            <span>Python</span>

            <span>Chart.js</span>

          </div>

          <a
            href="https://github.com/aashleshagit/ai-financial-coach"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>

        </div>

        <div className="project-card">

          <div className="project-icon">
            📊
          </div>

          <h2>Expense Dashboard</h2>

          <p>
            Financial dashboard created using Python, Excel and Power BI
            for expense analysis.
          </p>

          <h3>Tech Stack</h3>

          <div className="tech">

            <span>Python</span>

            <span>Power BI</span>

            <span>Excel</span>

          </div>

          <a
            href="https://github.com/aashleshagit/financial-expense-analytics-dashboard"
            target="_blank"
            rel="noreferrer"
          >

          <button>GitHub</button>

          </a>

        </div>

        <div className="project-card">

          <div className="project-icon">
            🧩
          </div>

          <h2>Java JDBC Project</h2>

          <p>
           Java application implementing CRUD operations using JDBC and MySQL with proper database connectivity.
          </p>

          <h3>Tech Stack</h3>

          <div className="tech">

            <span>Java</span>

            <span>JDBC</span>

            <span>MySQL</span>

          </div>
          
          <a
            href="https://github.com/aashleshagit/SimpleJDBCProject"
            rel="noreferrer"
          >
          <button>GitHub</button>

          </a>

        </div>

      </div>

    </section>
  );
}

export default Gallery;