import React from 'react'
import ProjectComponent from './ProjectComponent'
import './styles/ProjectsStyles.css'

function Projects(props) {
    function handleClick() {
        props.ProjectsPopUp()
    }
    const { isDarkMode } = props;
    const PageH1Background = isDarkMode ? 'h1Dark' : 'h1Light';
    return (
        <div className='ProjectsContainer'>
            <i className="fa-light fa-circle-xmark" onClick={handleClick}></i>
            <h1 className={PageH1Background}>Projects</h1>
            <ProjectComponent data={props.data} isDarkMode={isDarkMode} />
        </div>
    )
}

export default Projects