import React from 'react'
import SkillCluster from './SkillCluster'
import './styles/SkillsAndExperienceStyles.css'

function SkillsAndExperience(props) {
    function handleClick() {
        props.SkillsAndExperiencePopUp()
    }
    const { isDarkMode } = props;
    const PageH1Background = isDarkMode ? 'h1Dark' : 'h1Light';
    return (
        <div className='SkillsAndExperienceContainer'>
            <i className="fa-light fa-circle-xmark" onClick={handleClick}></i>
            <h1 className={PageH1Background}>Skills And Experience</h1>
            <SkillCluster>
                <table>
                    <tr>
                        <td><i className="fa-brands fa-css3-alt"></i></td>
                        <td><i className="fa-brands fa-js"></i></td>
                        <td><i className="fa-brands fa-html5"></i></td>
                    </tr>
                    <tr>
                        <td><h1>API's</h1></td>
                        <td><i className="fa-brands fa-npm"></i></td>
                        <td><i className="fa-brands fa-git"></i></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-github"></i></td>
                        <td><i className="fa-brands fa-node"></i></td>
                        <td><i className="fa-brands fa-python"></i></td>
                    </tr>
                    <tr>
                        <td><h1>Express</h1></td>
                        <td><h1>MongoDB</h1></td>
                        <td><i className="fa-brands fa-aws"></i></td>
                    </tr>
                    <tr>
                        <td><h1>MERN</h1></td>
                        <td><i className="fa-brands fa-react"></i></td>
                        <td>To Be Continued...</td>
                    </tr>
                </table>
            </SkillCluster>
        </div>
    )
}

export default SkillsAndExperience