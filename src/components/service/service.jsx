import './service.css';
import { FaCode } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";


export default function Service() {

    const service_data = [
        {
            service_logo: <SiAffinitydesigner />,
            service_name: "UI/UX Design",
            servive_description: "Creating the visual layout,componentd,and overall structure of the website using HTML,CSS,Javascript and React Js. Ensuring the interface is intutive, responsiive,and easy to navigate,based on UX priciples and designs.",
        },
        {
            service_logo: <FaCode />,
            service_name: "Web Development",
            servive_description: "Building dynamic web applications. Skilled in front-end technologies like Html, Css, Javascript, React, and back-end frameworks such as Python and Django, I create seamless, user-friendly experiences. I have experience with databases like PostgreSQL.",
        },
        {
            service_logo: <FaServer />,
            service_name: "Backend",
            servive_description: "Desingning and implementing backend systems that can handle increasing user loads and ensure fast response times through techniques like cashing, load balancing, and database optimization. using Python, django, Postgresql.",
        },
    ]


    return (
        <>
            <div className="service-overall" id='service-page'>
                <br />
                <h1 className='service-header'>My Services</h1>
                <div className="service-container">
                    {service_data.map((item) => (
                        <div className="service-card" data-aos="fade-zoom-in">
                            <h1 className='service-logo'>{item.service_logo}</h1>
                            <h1 className='service-name'>{item.service_name}</h1>
                            <p>{item.servive_description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}