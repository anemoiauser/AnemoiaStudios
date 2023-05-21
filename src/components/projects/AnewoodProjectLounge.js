import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import { Link } from 'react-router-dom'
import BackButton from  '../../blob/projects/bkbut.png'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import Lounge1 from '../../blob/projects/corporate_lounge-1-1200x677.jpg'
import Lounge2 from '../../blob/projects/corporate_lounge-5.jpg'
import Lounge3 from '../../blob/projects/corporate_lounge-6-1200x677.jpg'
function AnewoodProjectLounge() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])
    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Corporate Lounge</span>
           <Link to='/projects/anewood' className='projects-back-button'><img alt='Projects back button' src={BackButton} />Back to Projects</Link>
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Lounge1} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Lounge2} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Lounge3} />
       </div></>
    )
    
}

export default AnewoodProjectLounge;