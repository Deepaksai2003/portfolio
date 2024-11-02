/* eslint-disable no-unused-vars */
import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  return (
    <div id='skills' className='services'> {/* Changed ID to skills */}
      <div className="title-box">
        <h1>My Skills</h1> {/* Changed title to My Skills */}
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((skill, index) => {
          return (
            <div key={index} className='services-format'>
              <img src={skill.img} alt={skill.s_name} style={{ width: '50px', height: '50px' }} /> {/* Add logo image */}
              
              <h2>{skill.s_name}</h2>
              <p>{skill.s_desc}</p>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
