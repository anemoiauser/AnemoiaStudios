import { React, useState, useEffect, useRef } from 'react';
import '../styles/contact_us.css'
import AnemoiaLogo from '../blob/anemoia_logo.png'
import { Link } from 'react-router-dom';

function Contact(){

    useEffect(() => {
        document.title = "Anemoia Studios | Contact Us";
        // eslint-disable-next-line
    }, [])

    const [scrollLeft, setScrollLeft] = useState(0)

    const slideTimeOut = useRef()
    const slideInterval = useRef()

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

    // Form Functions
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubject = (e) => {
        setSubject(e.target.value);
    }

    const handleMessage = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section>
            <div className='header-container' onWheel={scrollImage}>
                <Link to='/'><img className='logo' src={AnemoiaLogo} alt='anemoia-studios-logo'/></Link>
            </div>

            <div className='content-container'>
                <h1>"We've been the ones we've been waiting for"</h1>
                <div className='contact'>
                    <p>501 St #900, Oakland, CA 94612</p>
                    <a href='tel:92101-3505'>92101-3505</a> 
                </div>
            </div>
            
            <div className='form-container'>
                <h2>For any general enquiries, suggestions and feedback, feel free to contact us via the following channels.</h2>
                <form method='get' ref={form} id='contact' onSubmit={handleSubmit}>
                
                <div className='input-container'>
                    <label for="fullName">Name:<br/>
                    <input type='text' name="fullName" placeholder="Name" value={name} onChange={handleName}/></label>
                    <label for="email">Email Address:<br/>
                    <input type='email' name="email" placeholder="Email" value={email} onChange={handleEmail}/></label>
                    <label for="subject">Subject:<br/>  
                    <input type='text' name="subject" placeholder="Subject" value={subject} onChange={handleSubject}/></label>
                    <label for="message">Message:<br/>
                    <textarea name="message" rows="2" cols="25" placeholder='Write your message...' value={message} onChange={handleMessage}/></label>
                    <button type='submit'>Send</button>
                </div>

                
            </form>
            </div>
            
        </section>
    );
}
export default Contact;