import React, { useState, useEffect } from 'react';

const Intro: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Crafting digital products that matter.";
  const typingSpeed = 70;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro">
      <div className="intro-overlay"></div>
      
      <div className="intro-content">
        <p className="hero-intro">Hi, I'm</p>
        <h1 className="hero-name">DANIEL M JAMES.</h1>
        <h2 className="hero-position">Software Engineer @ Google</h2>
        <p className="intro-typing">
          <span className="typing-text">{text}</span>
        </p>
        
        <ul className="intro-social">
          <li>
            <a href="https://github.com/danieljames-dj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://danieljames.in/#contact" aria-label="Contact">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/in/danieljames-dj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/djdany444" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="scrolldown">
        <a href="#coder" className="smoothscroll" aria-label="Scroll Down">
          <i className="fa fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Intro;
