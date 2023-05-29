import React, { useState } from 'react'
import "./Project.css"
import Projects from './projects'
import { Link } from 'react-router-dom'
function Project() {

  const [filtering,setFiltering]=useState(Projects)

  const filteringItems= (filtering)=>{
    const updating = Projects.filter((project)=>{
      return project.category === filtering
    })
    setFiltering(updating)
  }

  return (
    <div className='section__padding'>
      <hr className='drezh' />
      <div className="header">Project</div>
      <div className="app__project-header">
        <button onClick={()=> filteringItems('design')}>Design</button>
        <button onClick={()=> filteringItems('development')}>Development</button>
      </div>
      <div className="app__project-contnt">
        {filtering.map((project)=>{
 const {id,image,title,category}=project
 return(
  <div key={id} className='app__prject-content__item'>
    <img src={image} alt="" />
    <div className="app__project-content__description">
      <Link className='h1' to={`/detail/${project.id}`} >{title}</Link>
    </div>
  </div>
 )
        })}
      </div>
      </div>
  )
}

export default Project