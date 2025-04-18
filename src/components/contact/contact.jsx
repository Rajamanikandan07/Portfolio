import './contact.css'
import {FaLinkedinIn} from "react-icons/fa"; 
import { Emailbox } from './mailbox';
import mani from '../heroimg/mani.png';


export  default function Contact(){
    return(
        <>
        <div className="contact-overall" id='contact-page'>
            <h1 className='contact-header'>Contact with me</h1>
            <div className="contact-box">
                <div className="contact-about-box">
                    <div className="contact-img-box">
                        <img src={mani} className='contact-img'/>
                    </div>
                    <h2 className="contact-name">Rajamanikandan</h2>
                    <p className='contact-details'>Full Stack Developer</p>
                    <p>Experienced in building dynamic web applications with HTML, CSS, Bootstrap, JavaScript, React, Python, and Django. Skilled in PostgreSQL and writing clean, scalable code. Passionate about learning and delivering high-quality, performant web solutions</p>
                    <p>Phone : <span className='contact-details'>+91 9150674587</span></p>
                    <p>Email : <span className='contact-details'>rajamanikandankit@gmail.com</span></p>
                    <h3>Find Me In</h3>
                    <div className="find-link-box">
                        <a href="https://www.linkedin.com/in/rajamanikandan-k-a3552a358/" target='_blank'><div className="link-circle"><FaLinkedinIn /></div></a>
                    </div>
                </div>
                <Emailbox />
            </div>
        </div>
        </>
    )
}