/* eslint-disable no-unused-vars */
import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="work-item">
              <h2>{work.w_name}</h2>
              <img src={work.w_img} alt={work.w_name} className="work-image" />
              <div className="work-links">
                <a href={work.source} target="_blank" rel="noopener noreferrer">Source</a>
                <a href={work.livedemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  )
}

export default MyWork
