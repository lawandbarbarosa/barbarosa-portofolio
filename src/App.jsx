import './App.css'
import Header from './components/header/Header'
import Home from "./screens/home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectDetail from './screens/projectDetail/ProjectDetail'
import Projects from './screens/project/projects'

function App() {
  return (
    <BrowserRouter>
      <div className='app__'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<ProjectDetail project={Projects} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
