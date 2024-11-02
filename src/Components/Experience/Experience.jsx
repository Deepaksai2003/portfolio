/* eslint-disable no-unused-vars */
import React from 'react';
import './Experience.css';
import Internship_Data from '../../assets/internship_data'; // Update the path as necessary
import theme_pattern from '../../assets/theme_pattern.svg';

const InternshipExperience = () => {
  return (
    <div id='internship-experience' className='internship-experience'>
      <div className="title-box">
        <h1>My Experience</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <br/>
      <br/>
      <br/>

      <div className="experience-timeline">
        {Internship_Data.map((internship, index) => (
          <div key={index} className='experience-item'>
            <div className='timeline-dot' />
            <div className='experience-content'>
              <img src={internship.image} alt={`${internship.company} logo`} className='company-logo' />
              <div className='experience-details'>
                <h2>{internship.company}</h2>
                <h3>{internship.position}</h3>
                <p>{internship.duration}</p>
                <p>{internship.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipExperience;

