import profile from "./assets/profile.jpg";

function About() {
  return (
    <div className="about">

      <div className="about-left">
        <img src={profile} alt="Aashlesha" />
      </div>

      <div className="about-right">

        <h1>About Me 👋</h1>

        <h2>Aashlesha Vijay Sawane</h2>

        <h3>
          BE Computer Science & Design Engineering <br />
          Savitribai Phule Pune University <br />
          Graduation: 2027
        </h3>

        <p>
          I am a passionate Computer Science & Design Engineering student
          with a strong interest in Full Stack Development and Java Programming.
          I enjoy building responsive web applications using React, Java,
          Python and SQL.
        </p>

        <p>
          I am currently looking for a Software Development Internship
          where I can learn, contribute and grow as a software engineer.
        </p>

        <div className="about-info">
          <p>📍 Pune, Maharashtra</p>
          <p>💻 Java | React | Python | SQL</p>
          <p>🎯 Looking for Internship</p>
        </div>

        <a href="/Resume.pdf" download>
  <button className="btn1">
    📄 Download Resume
  </button>
</a>

        <a href="mailto:aashleshasawane1@gmail.com">
  <button className="btn2">
    📧 Contact Me
  </button>
</a>

      </div>

    </div>
  );
}

export default About;