import React from 'react'
import './styles/FindMeStyles.css'

//Write function here

function FindMe() {

    const handleClick = (event) => {
        const url = event.target.classList.contains('fa-github')
            ? 'https://github.com/beem23'
            : 'https://www.linkedin.com/in/marlon-bellot-117856219/';

        window.open(url, '_blank');
    };

    return (
        <div className='FindMeContainer'>
            <i onClick={handleClick} className="fa-brands fa-github"></i>
            <i onClick={handleClick} className="fa-brands fa-linkedin"></i>
        </div>
    )
}

export default FindMe;