import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Project from './components/Project.jsx'
import {BrowserRouter, Routes,Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>    
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  )
}

export default App
