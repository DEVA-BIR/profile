
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

            <a href="https://t.me/@zltan7" className="cta-nav">Let's Talk <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: "0.75rem" }}></i></a>
            <div className="social-links">
                <a href="https://github.com/DEVA-BIR" className="social-icon" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/dawit-birhanu-b26a78300?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-icon" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:dawitbirhanu2323@gmail.com" className="social-icon"><i className="fa-solid fa-envelope"></i></a>
            </div>
        </div>
    </header>
    </div>
  )
}

