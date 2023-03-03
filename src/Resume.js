import React from 'react'
import './styles/ResumeStyles.css'

function Resume(props) {
    function handleClick() {
        props.ResumePopUp()
    }
    return (
        <div className='ResumeContainer'>
            <i class="fa-light fa-circle-xmark" onClick={handleClick}></i>
        </div>
    )
}

export default Resume