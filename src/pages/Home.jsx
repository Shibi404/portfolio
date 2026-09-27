import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/home.css';
import '../styles/about.css';
import Card from '../components/Card';
import picture from '../images/picture.jpg'
import projects from '../data/projects.json';

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
    <section className='home-container'>
      <div className='container'>
        <div className='home-text'>
            <h1 id='name'>Shibi Krishna</h1>
            <p id='heading'>Full Stack Developer</p>

            <div className='social-icons-container'>
              <a href="https://www.linkedin.com/in/shibi-krishna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin" className='social-icon'><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg></a>
              <a href="https://github.com/Shibi404/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github" className='social-icon'><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg></a>
              <a href="mailto:shibikrishna10@gmail.com" aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="envelope" className='social-icon'><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"></path></svg></a>
            </div>
        </div>

        <div className="home-picture">
            <img src={picture} alt="" />
        </div>
      </div>

    </section>

    <section className="about-preview">
      <div className='container'>
        <h2 className='hero-heading'>About Me</h2>
        <p className='hero-para'>
          I'm S Shibi Krishna Ram, a passionate and curious developer focused on creating clean, user-centric web experiences. I enjoy blending creativity with code to build applications that are both functional and elegant.
        </p>
        <p className='hero-para'>
          From crafting responsive UIs to exploring full-stack projects, I thrive on solving real-world problems through technology. Currently exploring React, Node.js, and beyond.
        </p>
      </div>
    </section>

    <section className='education'>
      <div className='container'>
        <h2 className='hero-heading'>Education</h2>
        <div className='education-card-container'>
          <div className='timeline'>
            <div className='education-card'>
              <div className='timeline-dot'></div>
              <div className='edu-card-text'>
                <h3>BTech Computer Science & Engineering</h3>
                <p>Amrita Vishwa Vidyapeetham, Coimbatore</p>
                <p>CGPA: 7.13</p>
              </div>
              <div className='duration'>
                <p>2023 August - 2027 August</p>
              </div>
            </div>
            <div className='education-card'>
              <div className='timeline-dot'></div>
              <div className='edu-card-text'>
                <h3>Senior Higher Secondary</h3>
                <p>Vyasa Vidyapeetham, Palakkad</p>
                <p>Percentage: 90%</p>
              </div>
              <div className='duration'>
                <p>2021 June - 2023 May</p>
              </div>
            </div>
            <div className='education-card'>
              <div className='timeline-dot'></div>
              <div className='edu-card-text'>
                <h3>Higher Secondary</h3>
                <p>Chinmaya Vidyalaya, Kollengode</p>
                <p>Percentage: 78.1%</p>
              </div>
              <div className='duration'>
                <p>2022 June - 2023 May</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="project-preview">
      <div className='container'>
        <h2 className='hero-heading'>Featured Work</h2>

        <div className='cards-container'>
          {projects.slice(0, 2).map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              siteLink={project.siteLink}
              sourceLink={project.sourceLink}
            />
          ))}
        </div>

        <div className="view-all-container">
          <button className="button" id="view-all-btn" onClick={() =>navigate('/projects')}>View All</button>
        </div>
      </div>
    </section>

    <section className="skills-preview">

      <div className='container'>
        <h2 className="hero-heading">Tech Stack</h2>

        <div className='marquee-container'>
          <div className="marquee">
            <img src="/logos/html.png" alt="HTML" className="tech-logo-marquee" />
            <img src="/logos/css-3.png" alt="CSS" className="tech-logo-marquee" />
            <img src="/logos/js.png" alt="JavaScript" className="tech-logo-marquee" />
            <img src="/logos/react.png" alt="React" className="tech-logo-marquee" />
            <img src="/logos/node-js.png" alt="Node.js" className="tech-logo-marquee" />
            <img src="/logos/MongoDB.png" alt="MongoDB" className="tech-logo-marquee" />
            <img src="/logos/git.png" alt="Git" className="tech-logo-marquee" />
          </div>
        </div>
        {/* 
        <div className="view-all-container">
          <button className="button view-all-btn" onClick={() => navigate('/skills')}>
            View All Skills
          </button>
        </div>
        */}
      </div>
    </section>
    </>
  )
}

export default Home