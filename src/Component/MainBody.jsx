import React from 'react'
import last from "../Images/last.png"
import Cert3 from "../Images/CERT-3.png"
import cert4 from "../Images/CERT-4.jpg"
import apple from "../Images/Apples.jpeg"
import netflix from "../Images/netflix.png"
import amazon from "../Images/AMAZON.jpg"
import garage from "../Images/garage.png"
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Main() {
    const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) { current = section.getAttribute('id'); }
            });
            navLinks.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').includes(current)) { a.classList.add('active'); }
            });
        });
  return (
    <div>
      {/* 1. HOME / HERO SECTION */}
    <section id="home">
        <div className="hero-image-wrapper">
            <div className="image-frame">
                {/* User's reference picture */}
                <img src={last} alt="Dawit Profile Picture" />
            </div>
        </div>
        <div className="hero-content">
            <h1>Hi, I'm Dawit.
                 I Build Robust Modern Web Systems.</h1>
            <p>Electrical &amp; Computer Engineering graduate specializing in responsive front-end designs alongside robust backend systems. I balance interface details with complex structural logic.</p>
            <div className="btn-container">
                <a href="#projects" className="btn btn-primary">View My Work <i className="fa-solid fa-arrow-down"></i></a>
                <a href="mailto:your-email@domain.com" className="btn btn-secondary">Contact Me</a>
            </div>
        </div>
    </section>

    {/* 2. ABOUT ME & TECHNICAL LANGUAGES SECTION */}
    <section id="about">
        <h2 className="section-title">About Me &amp; <span>Skills</span></h2>
        <div className="about-grid">
            <div className="about-text">
                <p>I'm Dawit, an Electrical and Computer Engineering graduate and passionate junior front-end developer dedicated to crafting fast, responsive, and intuitive websites. I specialize in React, JavaScript, and CSS, and thrive on transforming ideas into clean, functional code.</p>
                <p>Driven by curiosity, I've built several real-world project clones including Netflix, Amazon, and Apple website interfaces — experiences that have sharpened my eye for design patterns, performance optimization, and clean code architecture. Though early in my professional journey, I continuously expand my knowledge through hands-on experimentation.</p>
            </div>
            <div className="skills-container">
                <div className="skill-card">
                    <div className="skill-info"><i className="fa-brands fa-react"></i><h4>React</h4></div>
                    <span className="skill-tag">Frontend</span>
                </div>
                <div className="skill-card">
                    <div className="skill-info"><i className="fa-brands fa-js"></i><h4>JavaScript</h4></div>
                    <span className="skill-tag">Language</span>
                </div>
                <div className="skill-card">
                    <div className="skill-info"><i className="fa-brands fa-node-js"></i><h4>Node.js / Express</h4></div>
                    <span className="skill-tag">Backend</span>
                </div>
                <div className="skill-card">
                    <div className="skill-info"><i className="fa-solid fa-database"></i><h4>MySQL</h4></div>
                    <span className="skill-tag">Database</span>
                </div>
                <div className="skill-card">
                    <div className="skill-info"><i className="fa-brands fa-html5"></i><h4>HTML5 / CSS3</h4></div>
                    <span className="skill-tag">Core UI</span>
                </div>
                <div className="skill-card">
                    <div className="skill-info"><i className="fa-brands fa-bootstrap"></i><h4>Bootstrap / jQuery</h4></div>
                    <span className="skill-tag">Libraries</span>
                </div>
            </div>
        </div>
    </section>

    {/* 3. CERTIFICATION SECTION */}
    <section id="certification">
        <h2 className="section-title">Verified <span>Credentials</span></h2>
        <div className="cert-grid">
            
            {/* Cert 1 */}
            <div className="cert-card">
                <div className="cert-image-wrapper">
                    {/* PLACEHOLDER FOR CERTIFICATE IMAGE: Replace src with your image path */}
                    <img src={Cert3} alt="freeCodeCamp Certificate Document" />
                </div>
                <div className="cert-content">
                    <h3>Full-Stack Development</h3>
                    <p>freeCodeCamp Beta Certification</p>
                    <div className="cert-actions">
                        {/* Update href with your actual verify or document links */}
                        <a href="#" className="cert-link"><i className="fa-solid fa-shield-check"></i> Verify</a>
                        <a href="https://freecodecamp.org/certification/Dev-7/javascript-algorithms-and-data-structures-v8" className="cert-link"><i className="fa-solid fa-file-pdf"></i> View Doc</a>
                    </div>
                </div>
            </div>

            {/* Cert 2 */}
            <div className="cert-card">
                <div className="cert-image-wrapper">
                    {/* PLACEHOLDER FOR CERTIFICATE IMAGE: Replace src with your image path */}
                    <img src={cert4} alt="Sololearn Certificate Document" / >
                </div>
                <div className="cert-content">
                    <h3>Web Technologies Integration</h3>
                    <p>Sololearn Certification Path</p>
                    <div className="cert-actions">
                        {/* Update href with your actual verify or document links */}
                        <a href="#" className="cert-link"><i className="fa-solid fa-shield-check"></i> Verify</a>
                        <a href="https://www.sololearn.com/certificates/CC-DIVPVMNC" className="cert-link"><i className="fa-solid fa-file-pdf"></i> View Doc</a>
                    </div>
                </div>
            </div>

        </div>
    </section>

    {/* 4. PROJECTS SECTION */}
    <section id="projects">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="projects-grid">
            
            {/* Abe Garage */}
            <div className="project-card">
                <div className="project-visual">
                    {/* PLACEHOLDER FOR PROJECT SCREENSHOT */}
                    <img src={garage} alt="Abe Garage Screenshot" />
                </div>
                <div className="project-content">
                    <h3>Management System</h3>
                    <p>Comprehensive garage operational platform handling client ordering, relational database workflows, and optimized input API validation layers.</p>
                    <div className="project-tags"><span>Node.js</span><span>MySQL</span><span>Express</span></div>
                    
                    <div className="project-links">
                        {/* Replace '#' with your actual URLs */}
                        <a href="https://managementclone.netlify.app/" className="project-link" target="_blank"><i className="fa-solid fa-globe"></i> Live Demo</a>
                        <a href="https://github.com/DEVA-BIR/Garage.git" className="project-link" target="_blank"><i className="fa-brands fa-github"></i> Code</a>
                    </div>
                </div>
            </div>

            {/* Apple Clone */}
            <div className="project-card">
                <div className="project-visual">
                     {/* PLACEHOLDER FOR PROJECT SCREENSHOT */}
                    <img src={apple} alt="Apple Clone Screenshot" />
                </div>
                <div className="project-content">
                    <h3>Apple Interface Clone</h3>
                    <p>High-fidelity visual clone emphasizing clean UI architecture, micro-interactions, and complex, smooth front-end CSS transitions.</p>
                    <div className="project-tags"><span>React</span><span>HTML5</span><span>CSS Advanced</span></div>
                    
                    <div className="project-links">
                        <a href="https://apppless.netlify.app/" className="project-link" target="_blank"><i className="fa-solid fa-globe"></i> Live Demo</a>
                        <a href="https://github.com/DEVA-BIR/Apple.git" className="project-link" target="_blank"><i className="fa-brands fa-github"></i> Code</a>
                    </div>
                </div>
            </div>

            {/* Netflix Clone */}
            <div className="project-card">
                <div className="project-visual">
                     {/* PLACEHOLDER FOR PROJECT SCREENSHOT */}
                    <img src={netflix} alt="Netflix Clone Screenshot" />
                </div>
                <div className="project-content">
                    <h3>Netflix Workspace Clone</h3>
                    <p>Dynamic platform model focused on asynchronous media API integration, sleek media streaming grids, and lazy loading performance optimization.</p>
                    <div className="project-tags"><span>React</span><span>API Integration</span><span>CSS</span></div>
                    
                    <div className="project-links">
                        <a href="https://nettttt.netlify.app/" className="project-link" target="_blank"><i className="fa-solid fa-globe"></i> Live Demo</a>
                        <a href="https://github.com/DEVA-BIR/netflix.git" className="project-link" target="_blank"><i className="fa-brands fa-github"></i> Code</a>
                    </div>
                </div>
            </div>

            {/* Amazon Clone */}
            <div className="project-card">
                <div className="project-visual">
                     {/* PLACEHOLDER FOR PROJECT SCREENSHOT */}
                    <img src={amazon} alt="Amazon Clone Screenshot" />
                </div>
                <div className="project-content">
                    <h3>Amazon E-commerce Model</h3>
                    <p>Fully functional interface mimicking extensive layout grids, item filtering arrays, and responsive card systems using Bootstrap frameworks.</p>
                    <div className="project-tags"><span>React</span><span>Bootstrap</span><span>JavaScript</span></div>
                    
                    <div className="project-links">
                        <a href="https://amzonfrontend.netlify.app/" className="project-link" target="_blank"><i className="fa-solid fa-globe"></i> Live Demo</a>
                        <a href="https://github.com/DEVA-BIR/Amazon-carousel.git" className="project-link" target="_blank"><i className="fa-brands fa-github"></i> Code</a>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </div>
  )
}
