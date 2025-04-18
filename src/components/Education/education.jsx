import './education.css';

export default function Education() {
    return (
        <>
            <div className="education-overall" id='education-page'>
                <h1 className="education-header">Education</h1>
                <br />
                <div className="education-container" >
                    <div className="vericatl-timeline" data-aos="fade-down"></div>
                    <div className="education-box education-box-left" data-aos="fade-right">
                        <h3 className='degree-header'>High School Degree</h3>
                        <h4 className='institute-name'>Govt Higher Secondary School - Vedanthangal</h4>
                        <h4 className='degree-name'>HSC</h4>
                        <h4 className='grade'>Grade : <span>68%</span></h4>
                        <div className="year">2019-2020</div>
                    </div>
                    <div className="education-box education-box-right" data-aos="fade-left">
                    <h3 className='degree-header'>Bachelor's Degree</h3>
                        <h4 className='institute-name'>Dhanalakshmi Srinivasan College of Engineering and Technology - Mamallapuram</h4>
                        <h4 className='degree-name'>B.Tech - Information Technology</h4>
                        <h4 className='grade'>Cgpa : <span>8.1</span></h4>
                        <div className="year">2020-2024</div>
                    </div>
                    <div className="education-box education-box-left" data-aos="fade-right">
                    <h3 className='degree-header'>Course</h3>
                        <h4 className='institute-name'>Code99 IT Academy - Velachery</h4>
                        <h4 className='degree-name'>Full Stack Development (Python)</h4>
                        <div className="year">2024-2025</div>
                    </div>
                </div>
            </div>
        </>
    )
}