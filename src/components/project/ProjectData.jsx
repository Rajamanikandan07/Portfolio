import html from './project_img/html.png'
import css from './project_img/css.png'
import js from './project_img/js.png'
import bs from './project_img/bootstrap.png'
import react from './project_img/react.png'
import django from './project_img/django.png'
import python from './project_img/python.png'
import postgresql from './project_img/postgresql.png'
import carp from './project_img/carpentery.png'
import job from './project_img/job portal img.png'
import food from './project_img/food application.png'



const project_data=[
    {
        project_title:"Carpentry ( Landing Page )",
        project_img :carp,
        project_github:"https://github.com/Rajamanikandan07/Carpentry",
        project_live:"https://rajamanikandan07.github.io/Carpentry/",
        project_description:"This project invloves building a responsive landing page for a carpentry business using HTML and CSS",
        project_tool: [
            {tool:html},
            {tool:css},
        ],
    },
    {
        project_title:"Job Portal Website (CRUD)",
        project_img :job,
        project_github:"https://github.com/Rajamanikandan07/Job-Portal",
        project_live:"https://rajamanikandan07.github.io/Job-Portal/",
        project_description:"Developing a responsive job portal using HTML, CSS for frontend, The Django Python Framework for the Backend and Postgresql As the Database.",
        project_tool: [
            {tool:html},
            {tool:css},
            {tool:django},
            {tool:postgresql}
        ],
    },
        {
        project_title:"Food Delivery Website",
        project_img :food,
        project_github:"https://github.com/Rajamanikandan07/Food-Delivery-Website",
        project_live:"https://rajamanikandan07.github.io/Food-Delivery-Website/",
        project_description:"Responsive Food Delivery Website using React.Js and CSS. Key features like restaurant browsing, menu viewing,cart management and checkout. Fully responsive design for across all devices. ",
        project_tool: [
            {tool:react},
            {tool:css},
        ],
    },
]
export default project_data