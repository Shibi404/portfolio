import React from 'react'
import '../styles/about.css';

const About = () => {
  return (
    <>
    <section className='about-header'>
        <div className='container about-header-container'>
            <h2>About Me</h2>
        </div>
    </section>

    <section>
        <div className='container'>
            <div className='about-me-para-container'>
                <p>
                    I’m a <strong>full-stack developer</strong> who enjoys building 
                    <strong> practical</strong>, <strong> user-friendly</strong>, and 
                    <strong> clean</strong> web applications. I love exploring both 
                    <strong> frontend and backend technologies</strong>, and I’m always 
                    <strong> learning new tools, frameworks, and concepts</strong> to improve my skills.
                </p>
                <br />
                <p>
                    I’m someone who is <strong>determined to complete any task</strong> I take on—
                    whether it’s fixing a difficult bug, experimenting with new features, 
                    or diving into something completely new. I believe in 
                    <strong> consistent growth</strong>, and I’m still in my 
                    <strong> learning stage</strong>, sharpening my abilities through real projects 
                    and hands-on practice.
                </p>
                <br />
                <p>
                    My goal is to <strong>keep improving</strong>, take on 
                    <strong> challenging projects</strong>, and become 
                    <strong> better every day</strong> as a developer.
                </p>
            </div>
            </div>
    </section>

    <section className='education'>
        <div className='container'>
            <h2 className='hero-heading'>Education</h2>
            <div className='education-card-container'>
                <div className='timeline'>
                    <div className='education-card'>
                        <div className="timeline-dot"></div>
                        <div className='edu-card-text'>
                            <h3>BTech Computer Science & Engineering</h3>
                            <p>Amrita Vishwa Vidyapeetham, Coimbatore</p>
                            <p>CGPA: 7.11</p>
                        </div>
                        <div className='duration'>
                            <p>2023 August - 2027 August</p>
                        </div>
                    </div>
                    <div className='education-card'>
                        <div className="timeline-dot"></div>
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
                        <div className="timeline-dot"></div>
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
    </>
  )
}

export default About