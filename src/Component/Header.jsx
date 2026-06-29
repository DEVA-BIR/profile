import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <div className="nav-container">
            <div className="logo">Dawit<span>.</span></div>
            <nav>
                <ul>
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#certification">Certifications</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
            <a href="mailto:your-email@domain.com" className="cta-nav">Let's Talk <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "0.75rem" }}></i></a>
        </div>
    </header>
    </div>
  )
}

