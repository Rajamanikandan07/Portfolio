import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import Home from './components/Home/home'
import Nav from './components/navbar/nav'
import Service from './components/service/service'
import Project from './components/project/project';
import Contact from './components/contact/contact';
import Skill from './components/skill/skill';
import Education from './components/Education/education';


export default function App() {

  return (
    <>
    <div className='overall'>
     <Nav />
     <Home />
     <Education />
     <Skill />
     <Service />
     <Project />
     <Contact />
    </div>
    </>
  )
}
