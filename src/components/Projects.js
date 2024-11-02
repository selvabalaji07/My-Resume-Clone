import React from 'react';
import Section from './Section'; 
import resumeData from '../data/resumeData'; 

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
        {resumeData.Projects.map((project,index)=>
        (
            <div key={index} className='project'>
                <h2>
                    <a href={project.link} target='_blank' rel="noopener noreferrer">
                    {project.title}     
                    </a>       
                </h2>
            <p>{project.duration}</p>
            <Section title="Details" items={project.details} />
            </div>
        )
    )}
    </div>
  );
}
export default Projects;