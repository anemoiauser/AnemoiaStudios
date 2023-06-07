import  React, { useRef } from 'react'
import '../styles/dedication.css'
import AnewoodLogo from '../blob/anewood_logo.png'
import YenNhiDoan from '../blob/interns/Yen Nhi Doan.png'
import JiashengLiang from '../blob/interns/Jiasheng Liang.png'
import HoangLinhNguyen from '../blob/interns/Hoang Linh Nguyen.png'
import SaiVishnuAnudeepKadiyala from '../blob/interns/Sai Vishnu Anudeep Kadiyala.png'
import MinNgo from '../blob/interns/Min Ngo.png'
import DarshanPrakashbhaiPanchal from '../blob/interns/Darshan Prakashbhai Panchal.png'
import SarthakVats from '../blob/interns/Sarthak Vats.png'

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
            <div className= 'intern-container'>
            <div className='intern-container intern'>
                <img className='intern-container photo' src = {SaiVishnuAnudeepKadiyala} alt='Sai Vishnu Anudeep Kadiyala' />
                <h3>Sai Vishnu Anudeep Kadiyala</h3>
                <span><b>Software Engineer</b><br />
                <br />As a self-motivated graduate student pursuing a Master's degree in Computer and Information Sciences at the University at Albany, State University of New York, I am actively seeking an internship position in software engineering.
                <br />During my internship with Anemoia Studios I took lead and designed and developed a user-friendly workplace review cross-platform app known as “The Red Book”.</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo' src = {MinNgo} alt='Min Ngo' />
            <h3>Min Ngo</h3>
            <span><b>Motion & Graphic Designer</b><br/>
            <br/>A multi-talented motion designer, graphic designer, and illustrator with a passion for all things magical and cute. An award-winning student at the RTA School of Media, I love experimenting with different styles to enhance visual storytelling. 
            With experience designing for numerous nonprofits and startups, I especially love to intertwine community care with art! I contributed storyboard and animated trailer concepts for Anemoia Studios.</span>
            </div>
            <div className='intern-container intern'>
            <img className='intern-container photo' src = {DarshanPrakashbhaiPanchal} alt='Darshan Prakashbhai Panchal' />
            <h3>Darshan Prakashbhai Panchal</h3>
            <span><b>Full Stack Developer</b><br/>
            <br />During my internship, I had the opportunity to work on a diverse range of technologies, including Express.js, Expo, Node.js, SQLite, and React Native. My responsibilities encompassed both backend and frontend development. 
            <br />I had an amazing experience during my internship at Anemoia Studios, working on the “Mind Ya Wellness” App that has a big impact on the company's social impact. 
            <br />I'm proud of the results I achieved and how my work positively affected the company. This experience has motivated me to continue using technology to make a difference in the software development field.</span>
            </div>
            </div>
            <div className= 'intern-container'>
            <div style= {{width: "25%"}} className='intern-container intern'>
            <img className='intern-container photo' src = {SarthakVats} alt='Sarthak Vats' />
            <h3>Sarthak Vats</h3>
            <span><b>Software Engineer</b><br/>
            <br />I am a student with a master's degree in software engineering, equipped with a strong foundation in software development and engineering principles. With a passion for technology and a drive for excellence, I am committed to making a positive impact in the field of software engineering.
            <br />During my time at Anemoia Studios, I ran point and collaborated closely with the android team to develop an iOS app that provided a secure platform known as “Mind Ya Wellness” for clients to connect with therapists.
            </span>
            </div>
            </div>
            </div>

            


            </div>
            
        </div>
    )
}

export default Dedication;