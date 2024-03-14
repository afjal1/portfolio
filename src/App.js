import React from 'react';
import Projects from './components/Projects';
import About from './components/About';
import Header from './components/header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import portfolioData from './data';
import './App.css';
import Testimonials from './components/testimonial';
import GridView from './components/gridview';
import JobView from './components/jobview';

const App = () => (
  <div>
    <Header {...portfolioData.header} />
    <About {...portfolioData.about} />
    <WorkExperience data={portfolioData.workExperience} />
    <Education data={portfolioData.education} />
    <Skills data={portfolioData.skills} />
    <Projects data={portfolioData.projects} />
    <Testimonials data={portfolioData.testimonials} />
    <GridView />
    <JobView />
    <Footer />
  </div>
);

export default App;
