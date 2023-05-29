import React from 'react'
import "./about.css"

const paragraph=`Welcome to my portfolio website! I'm Lawand Barbarosa, also known as Barbarosa, a passionate front-end developer with expertise in React.js and React Native. With a strong background in web design and development, I can create captivating and user-friendly web or mobile applications. I graduated from the Computer Institute of Sulaymaniyah, specializing in web design. Through my education and professional experience, I have honed my skills in crafting visually appealing interfaces and implementing interactive functionalities. I strive to stay up-to-date with the latest trends and technologies in the front-end development world, ensuring that I deliver modern and efficient solutions. Whether you need a stunning website or a feature-rich mobile app, I have the knowledge and expertise to bring your ideas to life. Browse through my projects and experience the seamless blend of creativity and functionality that I bring to each development endeavor. Let's collaborate and create remarkable digital experiences together.`


function About() {
  return (
<div className='section__padding app__about'>
      <h1 className='header'>About</h1>
    <div className="app__about">
  <p>{paragraph}</p>
    </div>
    </div>
  )
}

export default About