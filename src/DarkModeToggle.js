import React from 'react';
import './styles/DarkModeToggleStyles.css';

function DarkModeToggle(props) {
    const handleSwitch = () => {
        props.handleToggle();
    };

    return (
        <label>
            <input className='toggle-checkbox' type='checkbox' onChange={handleSwitch}></input>
            <div className='toggle-slot'>
                <div className='sun-icon-wrapper'>
                    <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                </div>
                <div className='toggle-button'></div>
                <div className='moon-icon-wrapper'>
                    <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                </div>
            </div>
        </label>
    )
}

export default DarkModeToggle;
