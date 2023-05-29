import React, { useState } from 'react'
import "./header.css"
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import ar from "../../language/ar.json"
import ku from "../../language/ku.json"
import en from "../../language/en.json"


function Header() {

  const [toggle,setToggle]=useState(false)

  const { t, i18n } = useTranslation();

  const [language,setLanguage]=useState('ku')

  const navbar = ()=>{
    setToggle(!toggle)
  }

  const handleLanguageChange =(language)=>{
    i18n.changeLanguage(language)
  } 

  return (
    <div className='section__padding app__navbar'>
      <div className="app__navbar-untoggle">
   <div className="app__navbar-left">
 <a className='h11' href='http://localhost:5173/'>barbarosa</a>
   </div>
   <div className="app__navbar-middle">
    <ul>
      <li><a href="/">Main</a></li>
      <li><a href="/">{t('About')}</a></li>
      <li><a href="">Knowlodge</a></li>
      <li><a href="/">Project</a></li>
    </ul>
    </div>
    <div className="app__navbar-right">
    <select name="" id="" value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
  <option value="en">English</option>
  <option value="ku">Kurdish</option>
  <option value="ar">Arabic</option>
</select>

    </div>
      </div>
      <div className="app__toggle-icon" onClick={navbar}>
     {toggle ? <IoClose /> : <HiOutlineMenuAlt1 /> }
      </div>

      { toggle && (<div className="app__navbar-toggle">
        <div className="app-ul bg-#27374D absolute">
        <ul className=''>
      <li><a href="">Main</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Knowlodge</a></li>
      <li><a href="">Project</a></li>
    </ul>
        </div>
        </div>)}
      </div>
  )
}

export default Header