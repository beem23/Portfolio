import React from 'react'
import './styles/ProjectComponentStyles.css'
import { v4 as uuid } from 'uuid';


function ProjectComponent(props) {
    const handleClick = (selector) => {
        const url = `https://github.com/beem23/${selector}`;
        if (selector !== 'disabled') {
            window.open(url, '_blank');
        }
    }
    const handleWebClick = (event, url) => {
        window.open(url, '_blank');
    }

    const { isDarkMode } = props;
    const ProjectComponentTheme = `card_content ${isDarkMode ? 'ProjectDark' : 'ProjectLight'}`;

    let data = props.data;
    let allProjects = data[0].Projects;
    let Projects = [];

    Object.keys(allProjects).forEach(key => {
        const title = allProjects[key].title;
        const description = allProjects[key].description;
        const src = allProjects[key].src;
        const selector = allProjects[key].selector;
        const website = allProjects[key].website;
        const url = allProjects[key].url;

        Projects.push(
            <li className="cards_item" key={uuid()}>
                <div className="card">
                    <div className="card_image"><img src={src} /></div>
                    <div className={ProjectComponentTheme}>
                        <h2 className="card_title">{title}</h2>
                        <p className="card_text">{description}</p>
                        <div className='btn_container'>
                            {website ? (
                                <>
                                    <button disabled={selector === 'disabled'} className={`btn card_btn https://isitmalware-production.up.railway.app/`} onClick={(event) => handleWebClick(event, url)}><i className="fa-regular fa-globe"></i></button>
                                    <button disabled={selector === 'disabled'} className="btn card_btn" onClick={(event) => handleClick(selector)}><i className="fa-brands fa-github"></i></button>
                                </>
                            ) : (
                                <button disabled={selector === 'disabled'} className="btn card_btn" onClick={(event) => handleClick(selector)}><i className="fa-brands fa-github"></i></button>
                            )}
                        </div>

                    </div>
                </div >
            </li >
        )
    });

    return (
        <>
            <div className="main">
                <ul className="cards">
                    {Projects}
                </ul>
            </div>
        </>
    )
}

export default ProjectComponent;
