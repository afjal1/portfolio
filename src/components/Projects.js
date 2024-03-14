// Projects.js
import React from 'react';

const Projects = ({ data }) => (
    <section>
        <h2>Projects</h2>
        {data?.map((project) => (
            <div key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {/* Add more details as needed */}
            </div>
        ))}
    </section>
);

export default Projects;
