import React from 'react'
import '../styles/about.css';

const About = () => {
  return (
    <>
    <section className='about-header'>
        <div className='container about-header-container'>
            <h2>About</h2>
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