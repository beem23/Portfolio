import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1gnxd0x', 'template_ddql6oi', form.current, 'AWds3j91Ndysy0zaW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input name="name" type="text" className="feedback-input" placeholder="Name" />
            <input name="email" type="text" className="feedback-input" placeholder="Email" />
            <textarea name="message" className="feedback-input" placeholder="Type your message here!"></textarea>
            <input type="submit" value="SUBMIT" />
        </form>
    );
};
