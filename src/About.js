import React from 'react'
import './styles/AboutStyles.css'

function About(props) {
    function handleClick() {
        props.AboutPopUp()
    }
    const { isDarkMode } = props;
    const PageH1Background = isDarkMode ? 'h1Dark' : 'h1Light';
    return (
        <div className='AboutContainer'>
            <i class="fa-light fa-circle-xmark" onClick={handleClick}></i>
            <h1 className={PageH1Background}>
                About
            </h1>
            <p>
                As a web developer, I am extremely passionate about my work and the technologies that I use. My journey to become a web developer has been a long and exciting one, filled with many challenges and opportunities for growth.<br />
                <p></p>
                I started my journey by learning the basics of web development, including HTML, CSS, and JavaScript. As I continued to build my skills, I started to learn more advanced concepts, including how to work with APIs, how to use npm, Git, and GitHub, and how to develop web applications using the MERN stack, which includes MongoDB, Express, React, and Node.js.<br />
                <p></p>
                Over the years, I have honed my skills and become proficient in these technologies, and I am always eager to learn more about new and emerging web development technologies. I believe that my passion for web development and my dedication to staying on top of the latest trends and best practices are what set me apart as a developer.<br />
                <p></p>
                If you are interested in working with a web developer who is committed to excellence and passionate about their work, then look no further. I would love to talk to you about your project and how I can help you bring your vision to life using the latest and greatest web development technologies.
            </p>
        </div>
    )
}

export default About