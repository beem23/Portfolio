import React from 'react'
import resumePDF from './Marlon-Resume.pdf'
import './styles/ResumeStyles.css'

function Resume(props) {
    function handleClick() {
        props.ResumePopUp()
    }

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Your Name - Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const { isDarkMode } = props;
    const PageH1Background = isDarkMode ? 'h1Dark' : 'h1Light';
    return (
        <div className='ResumeContainer'>
            <i className="fa-light fa-circle-xmark" onClick={handleClick}></i>
            <h1 className={PageH1Background}>Resume</h1>
            <button onClick={downloadResume}>Download</button>
            <iframe title="Resume" src={resumePDF} width="100%" height="100%" />
        </div>
    )
}

export default Resume