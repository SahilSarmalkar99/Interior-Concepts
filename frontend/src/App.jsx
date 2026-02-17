import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Blogs from './pages/Blogs.jsx'
import Contact from './pages/Contact.jsx'
import { Routes, Route } from "react-router-dom"
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import ProjectDetails from "./pages/ProjectDetails";
import ProjectDetails2 from "./pages/ProjectDetails2";
import FloatingPhone from './components/FloatingPhone.jsx'

const App = () => {
  return (
    <div >
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <FloatingWhatsApp />
        <FloatingPhone />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/project2/:id" element={<ProjectDetails2 />} />

      </Routes>
    </div>
  )
}

export default App