// Testimonials.js
import React from 'react';

const Testimonials = ({ data }) => (
    <section>
        <h2>What People Say</h2>
        {
            data.map((testimonial) => (
                <div key={testimonial.name}>
                    <h1>{testimonial.name}</h1>
                    <p>{testimonial.title}</p>
                    <p>{testimonial.content}</p>
                </div>
            ))
        }
    </section>
);

export default Testimonials;
