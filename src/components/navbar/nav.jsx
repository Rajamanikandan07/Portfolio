import { useState } from 'react';
import './nav.css'
import R from './R.png'
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Nav(){

    const[Menu,setMenu]=useState(true)

    function open(){
        setMenu(!Menu)
    }
    const [Navcolor, setNavcolor] = useState(false)  //nav bar color change on scroll

    const changecolor = () => {
        if (window.scrollY >= 60) {
            setNavcolor(true)
        }
        else {
            setNavcolor(false)
        }
    }
    window.addEventListener('scroll', changecolor)

    return(
        <>
        <nav className={Navcolor ? "navbar nav-bg" : "navbar"}>
            <img src={R} className='r-logo'/>

            <div className={`menu-link-box ${Menu == true ? "menu-link-box-close"  :  "menu-link-box-open"}`}>
                <a href="#home-page" className='menu-item'>Home</a>
                <a href="#education-page" className='menu-item'>Education</a>
                <a href="#skill-page" className='menu-item'>Skill</a>
                <a href="#service-page" className='menu-item'>Service</a>
                <a href="#project-page" className='menu-item'>Project</a>
                <a href="#contact-page" className='menu-item'>Contact</a>
            </div>
            <button className='icon' onClick={open}>{Menu == true ?<IoMenuSharp />: <IoClose />}</button>
        </nav>
        </>
    )
}