import React from 'react'
import { useParams } from 'react-router'
import "./projectDetail.css"
function ProjectDetail({project}) {

  const {id}=useParams()

  const projects = project.find((item)=> item.id == parseInt(id))


  if(!project){
    return <h1>item not found</h1>
    
  }

  return (
    <div className='section__padding'>
      <div className="app__projectDetail-content">
      <h1 className='header-detail'>{projects.name}</h1>
      <h1 className='work'>{projects.work}</h1>
      <h1 className='work'>{projects.development}</h1>
      <a href={projects.link} className='text-2xl text-white font-light border-b hover:text-orange-500'>
        The link</a>
      </div>
       <div className="app__images">
        <img src={projects.image} alt="" />
       </div>
    </div>
  )
}

export default ProjectDetail