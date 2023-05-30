import  React, { useRef } from 'react'
import '../styles/dedication.css'
import AnewoodLogo from '../blob/anewood_logo.png'


function Dedication() {
      
    const about_main_ref = useRef()

    function scrollToHorizontal(event) {
        const amount = event.deltaY
        about_main_ref.current.scrollLeft += amount
    }
    return (
        <div className='dedication-main' ref={about_main_ref} onWheel={scrollToHorizontal}>
         <div className='dedication'>
         <div className='about'>
                <img className='main-img' src={AnewoodLogo} alt='anewood logo' />
                <span className='summary'>
                    Here are some interns that dedicated to projects of Anemoia
                </span>
            </div> 


            <div className='team-container'>
            <span className='title'>The Anemoia website</span>
            <div className= 'intern-container '>
            <div className='intern-container  intern'>
                <img className='intern-container  photo'  alt='PlaceHolder' />
                <span>PlaceHolder</span>
            </div>
            <div className='intern-container  intern'>
            <img className='intern-container  photo'  alt='PlaceHolder' />
            <span>PlaceHolder</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo'  alt='PlaceHolder' />
            <span>PlaceHolder</span>
            </div>
            </div>
            <div className= 'intern-container '>
            <div className='intern-container intern'>
                <img className='intern-container  photo'  alt='PlaceHolder' />
                <span>PlaceHolder</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo'  alt='PlaceHolder' />
            <span>PlaceHolder</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo'  alt='PlaceHolder' />
            <span>PlaceHolder</span>
            </div>
            </div>
            </div>

            
            <div className='team-container'>
                <span className='title'>The app</span>
            <div className= 'intern-container'>
            <div className='intern-container intern'>
                <img className='intern-container  photo'  alt='PlaceHolder' />
                <span>PlaceHolder</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo'  alt='PlaceHolder' />
            <span>PlaceHolder</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo'  alt='PlaceHolder' />
            <span>PlaceHolder</span>
            </div>
            </div>
            <div className= 'intern-container'>
            <div className='intern-container intern'>
                <img className='intern-container photo'  alt='PlaceHolder' />
                <span>PlaceHolder</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo'  alt='PlaceHolder' />
            <span>PlaceHolder</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo'  alt='PlaceHolder' />
            <span>PlaceHolder</span>
            </div>
            </div>
            </div>


            </div>
            
        </div>
    )
}

export default Dedication;