import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import './styles/TitleStyles.css';

function Title(props) {
    const { isDarkMode } = props;
    const titleClass = `SiteTitle ${isDarkMode ? 'SiteTitleDark' : 'SiteTitleLight'}`;
    return (
        <div>
            <DarkModeToggle handleToggle={props.handleToggle} />
            <h1 className={titleClass}>...by Marlon</h1>
        </div>
    )
}

export default Title