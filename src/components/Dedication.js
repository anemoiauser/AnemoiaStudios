import  React, { useRef } from 'react'
import '../styles/dedication.css'
import AnewoodLogo from '../blob/anewood_logo.png'
import YenNhiDoan from '../blob/interns/Yen Nhi Doan.png'
import JiashengLiang from '../blob/interns/Jiasheng Liang.png'
import HoangLinhNguyen from '../blob/interns/Hoang Linh Nguyen.png'

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
            <div className= 'intern-container '>
            <div className='intern-container  intern'>
                <img className='intern-container  photo' src ={YenNhiDoan} alt='Yen Nhi Doan' />
                <h3>Yen Nhi Doan</h3>
                <span>I’m a tech enthusiast with a passion for frontend and mobile development! I made UI Design & Mobile App Developing contributions to the “Partnership Publishing Anewood Publishing” App</span>
            </div>
            <div className='intern-container  intern'>
            <img className='intern-container  photo' src = {HoangLinhNguyen} alt='Hoang Linh Nguyen' />
            <h3>Hoang Linh Nguyen</h3>
            <span>I am currently contributing to the Partner Publishing Anewood Publishing App as a mobile developer. I am responsible for building the app interface, integrate API to manage user data, and optimize the app performance. I am a Vietnamese developer who is passionate about technology especially in mobile development sector.</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo' src = {JiashengLiang}  alt='Jiasheng Liang' />
            <h3>Jiasheng Liang</h3>
            <span name ='intern'>I created a financial analysis for Anemoia Studios.
            <br />BS in SUNY at Albany 
            <br />MS in SUNY Binghamton</span>
            </div>
            </div>
            </div>

            


            </div>
            
        </div>
    )
}

export default Dedication;