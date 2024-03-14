import React from 'react';

const WorkExperience = ({ data }) => (
    <section>
        <h2>Work Experience</h2>
        {data.map((exp) => (
            <div key={exp.title}>
                <h3>{exp.title}</h3>
                <p>{exp.company}, {exp.location}</p>
                <p>{exp.date}</p>
                <ul>
                    {exp.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        ))}
    </section>
);

export default WorkExperience;
