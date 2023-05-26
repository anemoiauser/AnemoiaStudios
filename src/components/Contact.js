import { React, useState, useEffect, useRef } from 'react';
import '../styles/contact_us.css'
import AnemoiaLogo from '../blob/anemoia_logo.png'
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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
    const navigate = useNavigate();

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
        e.preventDefault();

        emailjs.sendForm('service_j5zfjq7','template_lovo2gw', form.current,'poSqMTD3SUmtfxsGh')
            .then((result) => {
                console.log(result.text)
                toast.success("Thank you sending us this message. You will be redirected to the home page in a few seconds.",
                {position:toast.POSITION.BOTTOM_CENTER});
                setTimeout(() => {navigate('/')}, 9000);
            }, (error) => {
                toast.error("Unexpected Error. Please check you have entered the correct information.",
                {position:toast.POSITION.BOTTOM_CENTER})
                console.log(error.text)
            });
    };


    return (
        <section>
            <div className='header-container' onWheel={scrollImage}>
                <Link to='/'><img className='logo' src={AnemoiaLogo} alt='anemoia-studios-logo'/></Link>
            </div>

            <div className='content-container'>
                <h1>"We've been the ones we've been waiting for"</h1>
                <div className='contact'>
                    <h2 href="#">501 St #900, Oakland, CA 94612</h2>
                    <a href='tel:92101-3505'>92101-3505</a> 
                </div>
                <p>For any general enquiries, suggestions and feedback, feel free to contact us via the following channels.
                    Alternatively, if you want to enquire about our projects, please click <Link to='/projects/anemoia'>Anemoia</Link> or <Link to='/projects/anemoia'>Anewood</Link>.
                </p>
            </div>
            
            <div className='form-container'>
                <form method='get' ref={form} id='contact' onSubmit={handleSubmit}>
                <div className='input-container'>
                    <label for="fullName">Name:<br/>
                    <input type='text' name="fullName" placeholder="Name" value={name} onChange={handleName}/></label>
                    <label for="email">Email Address:<br/>
                    <input type='email' name="email" placeholder="Email" value={email} onChange={handleEmail}/></label>
                    <label for="subject">Subject:<br/>  
                    <input type='text' name="subject" placeholder="Subject" value={subject} onChange={handleSubject}/></label>
                    <label for="message">Message:<br/>
                    <textarea name="message" rows="5" cols="22" placeholder='Write your message...' value={message} onChange={handleMessage}/></label>
                    <button type='submit'>Send</button>
                    <ToastContainer/>
                </div>

                
            </form>
            </div>
            
        </section>
    );
}
export default Contact;