/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/myphoto_11zon.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const resumeLink = "https://drive.google.com/file/d/1gxgiqaQcDs7VMjUPvsKp-U8-PXeugMCB/view?usp=sharing"; // Replace with your actual Google Drive link

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Deepaksai Srivatsa</span> full stack developer.</h1>
      <p>I am a full stack developer from India with experience in various technologies, including Java full stack, AWS Cloud, and React.js, gained through internships and projects during my final year of B.Tech in Computer Science and Engineering.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
        <div className="hero-resume">
          My resume
        </div>
        </a>
        
      </div>
    </div>
  )
}

export default Hero
