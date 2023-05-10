import { React, useEffect } from 'react';
import '../styles/contact_us.css'

const Contact = () => {

    useEffect(() => {
        document.title = "Anemoia Studios | Contact Us";
        // eslint-disable-next-line
    }, [])

    return (
        <section>
            <div className='content-container'>
                <h1>Get in touch with us!</h1>
                <h2>Address</h2>
            </div>
            
            <div className='form-container'>
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
            </form> 
            </div>
            
        </section>
    );
}

export default Contact;