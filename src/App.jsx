import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Services from './pages/services';
import Experiences from './pages/experiences';


function App() {

  return (
    <>    
      <Router>
      <Routes>
        <Route path="/" element={<Home />} exact /> {/* Home page */}
        <Route path="/about-me" element={<AboutMe />} /> {/* About Me page */}
        <Route path="/experiences" element={<Experiences />} /> 
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page */}
        <Route path="/services" element={<Services />} /> {/* Services page */}
      </Routes>
    </Router>  
    </>
  )
}

export default App