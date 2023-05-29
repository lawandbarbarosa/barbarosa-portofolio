import React from 'react'
import "./home.css"
import barbarosa from "../../assets/barbarosa.jpg"
import {BsFacebook,} from "react-icons/bs"
import {AiFillInstagram,AiFillBehanceCircle,AiFillDribbbleCircle} from "react-icons/ai"
import About from '../about/About'
import Know from '../knowlodge/Know'
import Project from '../project/project'

function Home() {
  return (
    <>
     <div className='section__padding app__homeborder'>
   <div className="app__home-content-border">
<div className="app__home-content-left">
<div className="app__image">
  <img src={barbarosa} alt="" />
</div>
<div className="app__title">
  <h1>Lawand Barbarosa</h1>
  <p>Ui,Ux designer & Frontend Developer</p>
  <blockquote>
   My name is lawand known as barbarosa,
   iam frontend Developer and ui,ux designer 
   and iam so glad to  if i can work with you on your idea about designing or 
   developing web development or moile application development
  </blockquote>
</div>
</div>
<div className="app__home-content-right">
  <li> <a href="https://www.facebook.com/lawan.dta.1/"><BsFacebook /></a>  </li>
   <li> <a href="https://www.instagram.com/lawand.barbaros/"><AiFillInstagram /></a> </li>
   <li> <a href="https://www.behance.net/lawandata14"><AiFillBehanceCircle /></a></li>
  <li> <a href="https://dribbble.com/lawand_1"><AiFillDribbbleCircle /></a>  </li>
</div>
   </div>
   
    </div>
  <About />
  <Know />
  <Project />
    </>
   
  )
}

export default Home