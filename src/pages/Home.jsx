import React from 'react'
import '../styles/home.css';
import picture from '../images/picture.jpg'
const Home = () => {
  return (
    <>
    <section className='home-container'>
      <div className='container'>
        <div className='home-text'>
            <span id='name'>Shibi Krishna</span>
            <span id='heading'>Full Stack Developer</span>
            <span id='paragraph'>I am a passionate and motivated developer currently learning full stack web development. I enjoy building clean and responsive websites while continuously improving my skills in both frontend and backend technologies. I am focused on growing my knowledge and creating projects that reflect my progress.</span>

            <div className='social-icons-container'>
              <a href=""><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin" className='social-icon'><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg></a>
              <a href=""><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github" className='social-icon'><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg></a>
              <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="envelope" className='social-icon'><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"></path></svg></a>
              <a href=""><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram" className='social-icon'><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg></a>
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
        <button className='button' id='learn-more-btn'>Learn More</button>
      </div>
    </section>

    <section className="project-preview">
      <div className='container'>
        <h2 className='hero-heading'>Featured Work</h2>

        <div className='cards-container'>
          <div className='cards'>
            <h3 className='card-title'>AtmaYoga</h3>
            <p className='card-para'>AtmaYoga is a responsive web application built with React that offers personalized yoga asana recommendations based on user well-being. The site features a custom testimonial slider, responsive navigation, and clean UI design. Development is ongoing, with plans to integrate an ML model for pose recognition, add a chatbot, and expand content with pages like Podcasts and Community.</p>
            <div className='card-button-container'>
              <button className='button'>View Site</button>
              <button className='button'>View Source</button>
            </div>
          </div>
          <div className='cards'>
            <h3 className='card-title'>Noire</h3>
            <p className='card-para'>Noire is a fashion-focused e-commerce platform for dresses and jewelry, combining sleek design with seamless functionality. It features secure authentication, session management, dual navigation bars, interactive banners, detailed product pages, and newsletter sign-ups. With a logo-based loader and polished UI, Noire delivers a premium shopping experience for fashion enthusiasts.</p>
            <div className='card-button-container'>
              <button className='button'>View Site</button>
              <button className='button'>View Source</button>
            </div>
          </div>
          <div className='cards'>
            <h3 className='card-title'>FashionFusion</h3>
            <p className='card-para'>Designed and developed a fully responsive e-commerce website
for a fictional fashion brand using HTML, CSS, and JavaScript. Built
entirely without frameworks to demonstrate mastery of core web
technologies. Features include product showcase, category layout,
and interactive navigation.</p>
            <div className='card-button-container'>
              <button className='button'>View Site</button>
              <button className='button'>View Source</button>
            </div>
          </div>
        </div>

        <div className="view-all-container">
          <button className="button" id="view-all-btn">View All</button>
        </div>
      </div>
    </section>

    <section className="skills-preview">

      <div className='container'>
        <h2 className="hero-heading">Tech Stack</h2>

        <div className='marquee-container'>
          <marquee behavior="scroll" direction="left" scrollamount="6" className="marquee">
            <img src="/logos/html.png" alt="HTML" className="tech-logo" />
            <img src="/logos/css-3.png" alt="CSS" className="tech-logo" />
            <img src="/logos/js.png" alt="JavaScript" className="tech-logo" />
            <img src="/logos/react.png" alt="React" className="tech-logo" />
            <img src="/logos/node-js.png" alt="Node.js" className="tech-logo" />
            <img src="/logos/MongoDB.png" alt="MongoDB" className="tech-logo" />
            <img src="/logos/git.png" alt="Git" className="tech-logo" />
          </marquee>
        </div>
        <div className="view-all-container">
          <button className="button view-all-btn" onClick={() => navigate('/skills')}>
            View All Skills
          </button>
        </div>
      </div>
    </section>

    </>
    
  )
}

export default Home