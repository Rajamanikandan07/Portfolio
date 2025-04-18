import './project.css'
import { FaGithub } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import project_data from './ProjectData';

export default function Project() {
    return (
        <>
            <div className="project-overall" id='project-page'>
                <h1 className='project-header'>My Projects</h1>
                <br />
                <div className="project-box">
                    {project_data.map((item) => (
                        <div className="project-card" data-aos='zoom-in'>
                            <div className="project-img-box">
                                <img src={item.project_img} className='project-img' />
                            </div>
                            <div className="tool-box">
                                {item.project_tool.map((tool_img) => (
                                    <img src={tool_img.tool} className='tool-img' />
                                ))}
                            </div>
                            <div className="project-title-box">
                                <p className='project-title'>{item.project_title}</p>
                                <div className="project-link-box">
                                    <a href={item.project_github} target='_blank'><div className="project-link-icon-circle"><FaGithub /></div></a>
                                    <a href={item.project_live} target='_blank'><div className="project-link-icon-circle"><TfiWorld /></div></a>
                                </div>
                            </div>
                            <p>{item.project_description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}