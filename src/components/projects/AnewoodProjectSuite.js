import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import { Link } from 'react-router-dom'
import BackButton from  '../../blob/projects/bkbut.png'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import Suite1 from '../../blob/projects/corporate_sleeping_area-1.jpg'
import Suite2 from '../../blob/projects/corporate_sleeping_area-2.jpg'
function AnewoodProjectSuite() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Warming Suites</span>
           <Link to='/projects/anewood' className='projects-back-button'><img alt='Projects back button' src={BackButton} />Back to Projects</Link>
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Suite1} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Suite2} />
       </div></>
    )
}

export default AnewoodProjectSuite;