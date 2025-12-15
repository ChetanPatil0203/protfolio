function Home() {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <h1>
          Hi, I'm <span>Chetan Mangal Patil</span>
        </h1>
        <h2>Frontend / React Developer</h2>

        <p>
          I specialize in building modern, fast, and responsive web applications.
          Passionate about clean UI, performance, and real-world problem solving
          using React JS and JavaScript.
        </p>

        

        <div className="home-buttons">
          <a href="#contact" className="btn">Hire Me</a>
          <a href="#skill" className="btn-outline">My Skills</a>
        </div>
      </div>

      <div className="home-right">
        <img src="/profile.jpg" alt="profile" className="profile-img" />
      </div>
    </section>
  );
}

export default Home;
