import './skill.css';
import Frontend from './FrontendData';
import Backend from './BackendData';
import Others from './othersData';

export default function Skill() {
    return (
        <>
            <div className="skill-overall" id='skill-page'>
                <h1 className="skill-header">My Skills</h1>
                <div className="skill-box">
                    <div className="frontend-box" data-aos="fade-right">
                        <h1>Frontend</h1>
                        <div className="skills-box">
                            {Frontend.map((item) => (
                                <div className="skill-name-box">
                                    <img src={item.frontend_img} className='skills_img' />
                                    <h5>{item.skill_name}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="backend-box" data-aos="fade-left">
                        <h1>Backend & Database</h1>
                        <div className="skills-box">
                        {Backend.map((item) => (
                                <div className="skill-name-box">
                                    <img src={item.backend_img} className='skills_img' />
                                    <h5>{item.backend_name}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="other-box" data-aos="fade-right">
                        <h1>Others</h1>
                        <div className="skills-box">
                        {Others.map((item) => (
                                <div className="skill-name-box">
                                    <img src={item.other_img} className='skills_img' />
                                    <h5>{item.Other_name}</h5>
                                </div>
                            ))}
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    )
}