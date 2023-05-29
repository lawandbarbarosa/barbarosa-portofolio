import React, { useState } from 'react'
import "./Know.css"
import knowlodge from './knolodge'

function Know() {

  const [focus,setFocus]=useState(false)
  const [filtering,setFiltering]=useState(knowlodge)

  const focusing =()=>{
    setFocus(!focus)
  }

  const filteringcategory = (filters)=>{
    const updating = knowlodge.filter((filtercategory)=>{
     return filtercategory.category === filters
    })
    setFiltering(updating)
  }

  

  return (
    <div className='section__padding'>
      <hr className='drezh' />
      <h1 className='header mt-12'>Knowlodge</h1>
      <div className="app__knowlodge-header">
     <button onClick={()=> filteringcategory('design')}>Design</button>
     <button onClick={()=> filteringcategory('development')}>Deveopment</button>
      </div>
      <div className="app__knowlodge-content">
        {filtering.map((item)=>{
        const {id,image,category}=item
        return(
          <div key={id} className='app__know'>
           <img src={image} alt="" />
          </div>
        )
        })}
      </div>
    </div>
  )
}

export default Know