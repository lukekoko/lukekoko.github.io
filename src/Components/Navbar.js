import React from "react";

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav class="navbar is-black is-fixed-top">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="https://github.com/lukekoko"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="icon is-large">
            <i class="fab fa-lg fa-github"></i>
          </span>
        </a>
        <a
          class="navbar-item"
          href="https://www.linkedin.com/in/lukekoko/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="icon is-large">
            <i class="fab fa-lg fa-linkedin"></i>
          </span>
        </a>
        <a
          class="navbar-item"
          href="mailto:luke.d.kokoftopoulos@student.uts.edu.au"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span class="icon is-large">
            <i class="fas fa-lg fa-envelope"></i>
          </span>
        </a>
        <div
          onClick={() => {
            setisActive(!isActive);
          }}
          class={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          data-target="navbar"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbar" class={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div class="navbar-end">
          <a class="navbar-item" href="#home">
            <span class="icon">
              <i class="fas fa-home"></i>
            </span>
            <span>Home</span>
          </a>
          <a class="navbar-item" href="#about">
            <span class="icon">
              <i class="fas fa-info"></i>
            </span>
            <span>About</span>
          </a>
          <a
            class="navbar-item"
            href={process.env.PUBLIC_URL + "Luke_Kokoftopoulos_Resume.pdf"}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span class="icon">
              <i class="fas fa-file"></i>
            </span>
            <span>Resume</span>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#academic">
              Academic
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="#academic">
                <span class="icon">
                  <i class="fas fa-graduation-cap"></i>
                </span>
                <span>Academic Experience</span>
              </a>
              <a class="navbar-item" href="#research">
                <span class="icon">
                  <i class="fas fa-book"></i>
                </span>
                <span>Research</span>
              </a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#capabilities">
              Professional
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="#capabilities">
                <span class="icon">
                  <i class="fas fa-tools"></i>
                </span>
                <span>Professional Capabilities</span>
              </a>
              <a class="navbar-item" href="#professional">
                <span class="icon">
                  <i class="fas fa-briefcase"></i>
                </span>
                <span>Professional Experience</span>
              </a>
            </div>
          </div>
          <a class="navbar-item" href="#leadership">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
            <span>Leadership</span>
          </a>
          <a class="navbar-item" href="#goals">
            <span class="icon">
              <i class="fas fa-bullseye"></i>
            </span>
            <span>Goals</span>
          </a>
          <a class="navbar-item" href="#contact">
            <span class="icon">
              <i class="fas fa-address-book"></i>
            </span>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
