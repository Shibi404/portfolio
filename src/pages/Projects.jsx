import React from 'react'
import '../styles/projects.css';
import Card from '../components/Card';
import projects from '../data/projects.json';

const Projects = () => {
  return (
    <>
    <section className='projects-header'>
        <div className='container projects-header-container'>
            <h2>Projects</h2>
        </div>
    </section>

    <section className="project-preview">
      <div className='container'>
        <div className='cards-container-1'>
          {projects.map((project, index) => (
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
      </div>
    </section>
    </>
  )
}

export default Projects