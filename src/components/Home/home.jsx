import './home.css'
import mani from '../heroimg/manikandan.png';
import { useTypewriter } from 'react-simple-typewriter'

export default function Home() {

    const [text] = useTypewriter({
        words: ["Full Stack Developer.", "UI/UX Designer.", "Back-end Developer."],
        loop: true,
        typeSpeed: 25,
        deleteSpeed: 10,
        delaySpeed: 3000,
    });
    return (
        <>
            <div className="home-overall" id='home-page'>
                <div className="user-info-box">
                    <h1 className='user-name'>Hi, I am <span className='name'>Rajamanikandan</span></h1>
                    <br />
                    <h1 className='type-text'>I am <span className='typerwirtter-text'>{text}</span></h1>
                    <br />
                    <p>Expertise in building dynamic web applications. Skilled in front-end technologies like Html, Css, Bootstrap, Javascript, React, and back-end frameworks such as Python and Django, I create seamless, user-friendly experiences. I have experience with databases like PostgreSQL, and I focus on writing clean, scalable code. Passionate about learning and staying up-to-date with new technologies, I strive to deliver high-quality, performant web solutions.</p>
                    <br />
                    <a href="" target='_blank'><button className='resume-btn'>Resume</button></a>
                </div>
                <div className="user-img-box">
                    <div className="img-box">
                        <img src={mani} className='hero-img' />
                    </div>
                </div>
            </div>
        </>
    )
}