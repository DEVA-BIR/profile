import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-content">
            <div className="footer-left">
                <h2>Let's connect.</h2>
                <p>Open for opportunities, collaborations, and engineering discussions.</p>
            </div>
            <div className="social-links">
                <a href="https://github.com/DEVA-BIR" className="social-icon" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/dawit-birhanu-4b2b2b2b2/" className="social-icon" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:dawitbirhanu2323@gmail.com" className="social-icon"><i className="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        <div className="footer-bottom">
            <div>&copy; 2026 Dawit. All Rights Reserved.</div>
            <div>Built with Elegance</div>
        </div>
    </footer>
    </div>
  )
}
