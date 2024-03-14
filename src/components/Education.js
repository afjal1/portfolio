import React from 'react';

const Education = ({ data }) => (
    <section>
        <h2>Education</h2>
        {data.map((edu) => (
            <div key={edu.degree}>
                <h3>{edu.degree}</h3>
                <p>{edu.school}</p>
                <p>{edu.date}</p>
            </div>
        ))}
    </section>
);

export default Education;
