import { React, useState, useEffect, useRef } from 'react';
import '../styles/contact_us.css'
import AnemoiaLogo from '../blob/anemoia_logo.png'
import { Link } from 'react-router-dom';

function Contact({scene}){

    useEffect(() => {
        document.title = "Anemoia Studios | Contact Us";
        // eslint-disable-next-line
    }, [])

    const [scrollLeft, setScrollLeft] = useState(0)

    const slideTimeOut = useRef()
    const slideInterval = useRef()

    const logos = useRef({
        studio: AnemoiaLogo
    })

    function scrollImage(event) {
        if(slideInterval.current) clearInterval(slideInterval.current)
        if(slideTimeOut.current) clearTimeout(slideTimeOut.current)

        setScrollLeft(scrollLeft + (event.deltaY > 0 ? 50 : -50))
        slideInterval.current = setInterval(() => {
            let adding = 50
            adding = event.deltaY > 0 ? adding : -adding
            setScrollLeft(scrollLeft + adding)
        }, 1);
        slideTimeOut.current = setTimeout(() => {
            if(slideInterval.current)
                clearInterval(slideInterval.current)
        }, Math.abs(event.deltaY));
    }

    /* const contactForm = document.getElementById("contact");
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault()
    }) */

    return (
        <section>
            <div className='header-container' onWheel={scrollImage}>
                <Link to='/'><img className='logo' src={logos.AnemoiaLogo} alt='anemoia-studios-logo'/></Link>
            </div>

            <div className='content-container'>
                <h1>"We've been the ones we've been waiting for"</h1>
                <div className='contact'>
                    <p>501 St #900, Oakland, CA 94612</p>
                    <a href='tel:92101-3505'>92101-3505</a>
                </div>
            </div>
            
            <div className='form-container'>
               <form method='get' id='contact'>
                <p>For any general enquiries, suggestions and feedback, feel free to contact us via the following channels.</p>
                <button><a href='mailto:anemoia@anemoiastudios.com'>Send</a></button>
            </form>
            </div>
            
        </section>
    );
}

/*
<form method='get'>
<label for="fullName">Name</label>
<input type='text' name="fullName" placeholder="Name" />
<label for="email">Email Address</label>
<input type='email' name="email" placeholder="Email" />
<label for="subject">Subject</label>  
<input type='text' name="subject" placeholder="Subject" />
<label for="message">Message</label>
<textarea name="message" placeholder='Write your message...'/>
<button>Send</button>
</form>*/

export default Contact;