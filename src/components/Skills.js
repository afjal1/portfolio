import React from 'react';

const Skills = ({ data }) => (
    <section>
        <h2>Skills</h2>
        <ul>
            {data.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    </section>
);

export default Skills;
