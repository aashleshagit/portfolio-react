import profile from "./assets/profile.jpg";
import Skills from "./Skills";
import Certification from "./Certification";
import Stats from "./Stats";

function Home() {
  return (
    <>

      <section className="hero">

  <div className="hero-left">

  <p className="hello">👋 Hello, I'm</p>

  <h1>
    Aashlesha Vijay Sawane
  </h1>

  <h2>
    Software Developer | React | Java | Python
  </h2>

  <p>
    I'm a BE Computer Science & Design student passionate about building
    modern, responsive and user-friendly web applications using React,
    Java, Python and SQL.
  </p>

  <div className="hero-buttons">

    <a
      href="https://github.com/aashleshagit"
      target="_blank"
      rel="noreferrer"
    >
      <button className="btn1">🚀 GitHub</button>
    </a>

    <a
      href="https://www.linkedin.com/in/aashlesha-sawane-907aa8319/"
      target="_blank"
      rel="noreferrer"
    >
      <button className="btn2">💼 LinkedIn</button>
    </a>

  </div>

</div>
  <div className="hero-right">

    <img
  src={profile}
  alt="Aashlesha"
/>

  </div>

</section>

      <Skills />

      <Certification />
      <Stats />

    </>
  );
}

export default Home;
