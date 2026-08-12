import React from 'react'
import last from "../Images/last.png"
import Cert3 from "../Images/CERT-3.png"
import cert4 from "../Images/CERT-4.jpg"
import apple from "../Images/Apples.jpeg"
import netflix from "../Images/netflix.png"
import amazon from "../Images/AMAZON.jpg"
import garage from "../Images/garage.png"
import Desu from "../Images/Dessus.png"
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
            <h1>
                        Hi, I'm Dawit.
                        <br />

                        I Build
                        <span> Reliable Digital Solutions.</span>
                    </h1>

                   <p>
                        I am a Full-Stack Developer who builds practical web
                        applications that solve real business problems.
                        I work across React, Node.js, Express, and MySQL
                        to turn ideas and business requirements into
                        reliable digital systems.
                    </p>
            <div className="btn-container">
                <a
                            href="../Images/Dawit_Birhanu_CV.pdf"
                            download="Dawit_Birhanu_CV.pdf"
                            className="btn btn-primary"
                            aria-label="Download Dawit Birhanu CV"
                        >
                            <i className="fa-solid fa-download"></i>
                            My Resume
                        </a>
                <a href="#projects" className="btn btn-primary">View My Work <i className="fa-solid fa-arrow-down"></i></a>
                <a href="https://www.linkedin.com/in/dawit-birhanu-b26a78300?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="btn btn-secondary">Contact Me</a>
            </div>
        </div>
    </section>

    {/* 2. ABOUT ME & TECHNICAL LANGUAGES SECTION */}
    <section id="about">
        <h2 className="section-title">About Me &amp; <span>Skills</span></h2>
        <div className="about-grid">
            <div className="about-text">
               <p>I am a graduate in Electrical and Computer Engineering and have experience as a Full-Stack Developer, having worked in the fields of software development, banking, and IT application support. This diverse background has given me the ability to understand not only the technical aspects of system building but also the people and business processes that make use of such systems. My interest lies in creating practical software that can enhance actual business processes. I place great importance on teamwork, clear communication, problem-solving, attention to detail, and a commitment to continuous learning, and I like to take on complex problems by breaking them down into smaller, practical solutions. At the moment, I am working on improving my knowledge of backend architecture, database design, deployment, software engineering practices, and AI-powered applications.</p>
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
                    <div className="skill-info"><i className="fa-brands fa-html5"></i><h4>Responsive Design</h4></div>
                    <span className="skill-tag">Core UI</span>
                </div>
                <div className="skill-card">
                    <div className="skill-info"><i className="fa-brands fa-bootstrap"></i><h4>Bootstrap / jQuery</h4></div>
                    <span className="skill-tag">Libraries</span>
                </div>
                <div className="skill-card">
                    <div className="skill-info">
                            <i className="fa-solid fa-code"></i>
                               <h4>REST APIs</h4>
                               </div>
                           <span className="skill-tag">
                                Integration
                            </span>
                           </div>
                           <div className="skill-card">

                            <div className="skill-info">

                                <i className="fa-brands fa-git-alt"></i>

                                <h4>Git / GitHub</h4>

                            </div>
                          <span className="skill-tag">
                                Version Control
                            </span>
                         </div>
            </div>
        </div>
        <div className="availability-box">

                            <i className="fa-solid fa-circle-check"></i>

                            <div>

                                <strong>
                                    Open to Opportunities
                                </strong>

                                <p>
                                    Full-stack development • Software
                                    engineering • IT applications •
                                    Remote work • Hybrid work •
                                    Freelance projects
                                </p>

                            </div>

                        </div>
    </section>

    {/* 3. CERTIFICATION SECTION */}
   <section id="certification">

                <h2 className="section-title">
                    Verified <span>Credentials</span>
                </h2>


                <div className="cert-grid">


                    {/* =================================================
                        CERTIFICATE 1
                    ================================================== */}

                    <div className="cert-card">

                        <div className="cert-image-wrapper">

                            <img
                                src={Cert3}
                                alt="Dawit Birhanu Full Stack Development certificate"
                            />

                        </div>


                        <div className="cert-content">

                            <h3>
                                Full-Stack Development
                            </h3>

                            <p>
                                freeCodeCamp Certification
                            </p>


                            <div className="cert-actions">


                                {/* VERIFY */}

                                <a
                                    href="https://freecodecamp.org/certification/Dev-7/javascript-algorithms-and-data-structures-v8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-link"
                                    aria-label="Verify freeCodeCamp certification"
                                >

                                    <i className="fa-solid fa-circle-check"></i>

                                    Verify

                                </a>


                                {/* VIEW ACTUAL DOCUMENT */}

                                <a
                                    href={Cert3}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-link"
                                    aria-label="View Full Stack Development certificate"
                                >

                                    <i className="fa-solid fa-file-lines"></i>

                                    View Document

                                </a>


                                {/* DOWNLOAD DOCUMENT */}


                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        CERTIFICATE 2
                    ================================================== */}

                    <div className="cert-card">

                        <div className="cert-image-wrapper">

                            <img
                                src={cert4}
                                alt="Dawit Birhanu Web Technologies certificate"
                            />

                        </div>


                        <div className="cert-content">

                            <h3>
                                Web Technologies Integration
                            </h3>

                            <p>
                                Sololearn Certification
                            </p>


                            <div className="cert-actions">


                                {/* VERIFY */}

                                <a
                                    href="https://www.sololearn.com/certificates/CC-DIVPVMNC"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-link"
                                    aria-label="Verify Sololearn certification"
                                >

                                    <i className="fa-solid fa-circle-check"></i>

                                    Verify

                                </a>


                                {/* VIEW DOCUMENT */}

                                <a
                                    href={cert4}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-link"
                                    aria-label="View Web Technologies certificate"
                                >

                                    <i className="fa-solid fa-file-lines"></i>

                                    View Document

                                </a>
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
            <div className="project-card featured-project">


                        <div className="project-visual">

                            <img
                                src={garage}
                                alt="Garage Management System"
                                loading="lazy"
                            />

                        </div>


                        <div className="project-content">

                            <h3>
                                Garage Management System
                            </h3>


                            <p>
                                A full-stack management platform for
                                organizing customers, vehicles,
                                employees, services, service orders,
                                and operational workflows.
                            </p>


                            <div className="project-tags">

                                <span>React</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MySQL</span>
                                <span>JWT</span>

                            </div>


                            <div className="project-learning">

                                <strong>

                                    <i className="fa-solid fa-lightbulb"></i>

                                    Challenges & What I Learned

                                </strong>


                                <p>
                                    This project strengthened my
                                    understanding of CRUD operations,
                                    relational data, authentication,
                                    API validation, state management,
                                    and connecting frontend
                                    applications with backend services.
                                </p>

                            </div>


                            <div className="project-links">

                                <a
                                    href="https://garage-management-rho.vercel.app/"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Garage Management live demo"
                                >

                                    <i className="fa-solid fa-globe"></i>

                                    Live Demo

                                </a>


                                <a
                                    href="https://github.com/DEVA-BIR/Garage.git"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View Garage Management source code"
                                >

                                    <i className="fa-brands fa-github"></i>

                                    Source Code

                                </a>

                            </div>

                        </div>

                    </div>

            {/* Apple Clone */}
            <div className="project-card">
                 <div className="project-visual">
                             <img
                                src={apple}
                                alt="Apple inspired responsive interface rebuild"
                                loading="lazy"
                            />

                        </div>


                        <div className="project-content">

                            <h3>
                                Apple Interface Rebuild
                            </h3>


                            <p>
                                A frontend interface recreation inspired
                                by Apple's design language, focused on
                                responsive layouts, reusable components,
                                visual hierarchy, and CSS interactions.
                            </p>


                            <div className="project-tags">

                                <span>React</span>
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>Responsive UI</span>

                            </div>


                            <div className="project-learning">

                                <strong>

                                    <i className="fa-solid fa-lightbulb"></i>

                                    Focus

                                </strong>


                                <p>
                                    Practiced responsive design,
                                    reusable components, layout
                                    structure, visual consistency,
                                    and frontend interaction patterns.
                                </p>

                            </div>


                            <div className="project-links">

                                <a
                                    href="https://transcendent-dango-c9e83c.netlify.app/"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Apple interface live demo"
                                >

                                    <i className="fa-solid fa-globe"></i>

                                    Live Demo

                                </a>


                                <a
                                    href="https://github.com/DEVA-BIR/Apple.git"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View Apple interface source code"
                                >

                                    <i className="fa-brands fa-github"></i>

                                    Source Code

                                </a>

                            </div>

                        </div>

                    </div>

            <div className="project-card featured-project">
                <div className="project-visual">

                            <img
                                src={Desu}
                                alt="Desu Computer Solution management platform"
                                loading="lazy"
                            />

                        </div>


                        <div className="project-content">

                            <h3>
                                Desu Computer Solution
                            </h3>


                            <p>
                                A full-stack computer service management
                                platform designed to manage customers,
                                devices, employees, service orders,
                                authentication, and business workflows
                                in one system.
                            </p>


                            <div className="project-tags">

                                <span>React</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MySQL</span>
                                <span>JWT</span>
                                <span>Vite</span>

                            </div>


                            {/* CHALLENGE / LEARNING */}

                            <div className="project-learning">

                                <strong>

                                    <i className="fa-solid fa-lightbulb"></i>

                                    Challenges & What I Learned

                                </strong>

                                <p>
                                    I worked with authentication,
                                    relational database design,
                                    REST APIs, frontend/backend
                                    integration, validation,
                                    deployment, and debugging
                                    production database issues.
                                </p>

                            </div>


                            <div className="project-links">


                                <a
                                    href="https://computer-solution-psi-self.vercel.app/"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Desu Computer Solution live demo"
                                >

                                    <i className="fa-solid fa-globe"></i>

                                    Live Demo

                                </a>


                                <a
                                    href="https://github.com/DEVA-BIR/Computer-Solution.git"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View Desu Computer Solution source code"
                                >

                                    <i className="fa-brands fa-github"></i>

                                    Source Code

                                </a>

                            </div>

                        </div>

                    </div>

            {/* Netflix Clone */}
             <div className="project-card">
                        <div className="project-visual">
                             <img
                                src={netflix}
                                alt="Netflix inspired media interface rebuild"
                                loading="lazy"
                            />

                        </div>


                        <div className="project-content">

                            <h3>
                                Netflix Interface Rebuild
                            </h3>


                            <p>
                                A React-based media interface recreation
                                focused on API integration, dynamic
                                content rendering, reusable components,
                                and responsive media layouts.
                            </p>


                            <div className="project-tags">

                                <span>React</span>
                                <span>API Integration</span>
                                <span>JavaScript</span>
                                <span>CSS</span>

                            </div>


                            <div className="project-learning">

                                <strong>

                                    <i className="fa-solid fa-lightbulb"></i>

                                    Focus

                                </strong>


                                <p>
                                    Practiced asynchronous API requests,
                                    dynamic rendering, reusable
                                    components, media grids, and
                                    frontend performance concepts.
                                </p>

                            </div>


                            <div className="project-links">

                                <a
                                    href="https://nettttt.netlify.app/"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Netflix interface live demo"
                                >

                                    <i className="fa-solid fa-globe"></i>

                                    Live Demo

                                </a>


                                <a
                                    href="https://github.com/DEVA-BIR/netflix.git"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View Netflix interface source code"
                                >

                                    <i className="fa-brands fa-github"></i>

                                    Source Code

                                </a>

                            </div>

                        </div>

                    </div>

            {/* Amazon Clone */}
              <div className="project-card">

                        <div className="project-visual">
                            <img
                                src={amazon}
                                alt="Amazon inspired ecommerce interface rebuild"
                                loading="lazy"
                            />

                        </div>


                        <div className="project-content">

                            <h3>
                                Amazon E-commerce Interface
                            </h3>


                            <p>
                                A frontend e-commerce interface
                                recreation focused on product layouts,
                                reusable cards, responsive grids,
                                filtering concepts, and interactive
                                UI components.
                            </p>


                            <div className="project-tags">

                                <span>React</span>
                                <span>Bootstrap</span>
                                <span>JavaScript</span>
                                <span>Responsive UI</span>

                            </div>


                            <div className="project-learning">

                                <strong>

                                    <i className="fa-solid fa-lightbulb"></i>

                                    Focus

                                </strong>


                                <p>
                                    Practiced reusable UI components,
                                    product rendering, responsive
                                    layouts, and organizing frontend
                                    data.
                                </p>

                            </div>
                            <div className="project-links">

                                <a
                                    href="https://amazonenfake-carousel.vercel.app/"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open Amazon ecommerce interface live demo"
                                >

                                    <i className="fa-solid fa-globe"></i>

                                    Live Demo

                                </a>


                                <a
                                    href="https://github.com/DEVA-BIR/Amazon-carousel.git"
                                    className="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="View Amazon interface source code"
                                >

                                    <i className="fa-brands fa-github"></i>

                                    Source Code

                                </a>

                            </div>

                        </div>

                    </div>
        </div> 
         <div className="projects-cta">

                    <p>
                        Want to see how I approach real-world
                        software problems?
                    </p>


                    <a
                        href="#contact"
                        className="btn btn-primary"
                        aria-label="Contact Dawit about a project"
                    >

                        <i className="fa-solid fa-arrow-right"></i>

                        Let's Work Together

                    </a>

                </div>
    </section>
    </div>
   
  )
}
