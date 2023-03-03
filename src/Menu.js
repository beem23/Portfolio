import React, { useState } from 'react';
import Projects from './Projects';
import About from './About';
import SkillsAndExperience from './SkillsAndExperience';
import Resume from './Resume';
import ContactMe from './ContactMe';
import './styles/MenuContainerStyles.css';

function Menu(props) {
    const [showPopups, setShowPopups] = useState({
        Projects: false,
        About: false,
        SkillsAndExperience: false,
        Resume: false,
        ContactMe: false,
    });

    function togglePopup(popupName) {
        setShowPopups({ ...showPopups, [popupName]: !showPopups[popupName] });
    }

    return (
        <div className="MenuContainer">
            <h1 onClick={() => togglePopup('Projects')}>Projects</h1>
            {showPopups.Projects && (
                <Projects
                    isDarkMode={props.isDarkMode}
                    ProjectsPopUp={() => togglePopup('Projects')}
                    data={props.data}
                />
            )}
            <h1 onClick={() => togglePopup('About')}>About</h1>
            {showPopups.About && (
                <About
                    isDarkMode={props.isDarkMode}
                    AboutPopUp={() => togglePopup('About')}
                />
            )}
            <h1 onClick={() => togglePopup('SkillsAndExperience')}>
                Skills and Experience
            </h1>
            {showPopups.SkillsAndExperience && (
                <SkillsAndExperience
                    isDarkMode={props.isDarkMode}
                    SkillsAndExperiencePopUp={() => togglePopup('SkillsAndExperience')}
                />
            )}
            <h1 onClick={() => togglePopup('Resume')}>Resume</h1>
            {showPopups.Resume && <Resume ResumePopUp={() => togglePopup('Resume')} />}
            <h1 onClick={() => togglePopup('ContactMe')}>Contact Me</h1>
            {showPopups.ContactMe && (
                <ContactMe
                    isDarkMode={props.isDarkMode}
                    ContactMePopUp={() => togglePopup('ContactMe')}
                />
            )}
        </div>
    );
}

export default Menu;
