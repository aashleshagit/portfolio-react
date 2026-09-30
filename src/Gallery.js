function Gallery() {
  return (
    <section className="projects">

      <h1>🚀 My Projects</h1>

      <p className="project-title">
        Here are some projects that showcase my technical skills.
      </p>

      <div className="project-container">

        {/* Smart Personal Password Manager */}
        <div className="project-card">

          <div className="project-icon">
            🔐
          </div>

          <h2>Smart Personal Password Manager</h2>

          <p>
            Secure desktop password manager for storing, managing and generating
            passwords with encryption, authentication and password strength analysis.
          </p>

          <h3>Tech Stack</h3>

          <div className="tech">
            <span>Python</span>
            <span>Tkinter</span>
            <span>SQLite</span>
            <span>bcrypt</span>
            <span>Fernet</span>
          </div>

          <a
            href="https://github.com/aashleshagit/Smart-Personal-Password-Manager"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>

        </div>


        {/* AI Financial Coach */}
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


        {/* Ashhbot – AI PDF RAG Chatbot */}
        <div className="project-card">

          <div className="project-icon">
            🤖
          </div>

          <h2>Ashhbot – AI PDF RAG Chatbot</h2>

          <p>
            AI-powered PDF chatbot that uses RAG, semantic search and vector
            embeddings to retrieve relevant document content and answer user questions.
          </p>

          <h3>Tech Stack</h3>

          <div className="tech">
            <span>Python</span>
            <span>Streamlit</span>
            <span>LangChain</span>
            <span>Hugging Face</span>
            <span>FAISS</span>
            <span>PyPDF2</span>
          </div>

          <a
            href="https://github.com/aashleshagit/Ashhbot-PDF-RAG-Chatbot"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>

        </div>


        {/* LogSentinel */}
        <div className="project-card">

          <div className="project-icon">
            🛡️
          </div>

          <h2>LogSentinel</h2>

          <p>
            Security log analytics and threat detection dashboard for analyzing
            server traffic, identifying suspicious activity and generating security
            reports using rule-based detection.
          </p>

          <h3>Tech Stack</h3>

          <div className="tech">
            <span>Python</span>
            <span>Streamlit</span>
            <span>Pandas</span>
            <span>Regex</span>
            <span>JSON</span>
            <span>CSV</span>
            <span>Unit Testing</span>
          </div>

          <a
            href="https://github.com/aashleshagit/LogSentinel"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>

        </div>


        {/* Expense Dashboard */}
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


        {/* Java JDBC Project */}
        <div className="project-card">

          <div className="project-icon">
            🧩
          </div>

          <h2>Java JDBC Project</h2>

          <p>
            Java application implementing CRUD operations using JDBC and MySQL
            with proper database connectivity.
          </p>

          <h3>Tech Stack</h3>

          <div className="tech">
            <span>Java</span>
            <span>JDBC</span>
            <span>MySQL</span>
          </div>

          <a
            href="https://github.com/aashleshagit/SimpleJDBCProject"
            target="_blank"
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