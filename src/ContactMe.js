import React from 'react'
import { ContactForm } from './ContactForm'
import './styles/ContactMeStyles.css'

function ContactMe(props) {
    function handleClick() {
        props.ContactMePopUp()
    }
    const { isDarkMode } = props;
    const PageH1Background = isDarkMode ? 'h1Dark' : 'h1Light';
    return (
        <div className='ContactMeContainer'>
            <i className="fa-light fa-circle-xmark" onClick={handleClick}></i>
            <h1 className={PageH1Background}>Contact Me</h1>
            <ContactForm />
        </div>
    )
}

export default ContactMe