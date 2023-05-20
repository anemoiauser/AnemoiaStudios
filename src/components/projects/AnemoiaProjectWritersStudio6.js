import  React, {useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/anemoia_project.css'
import WritersStudio3 from '../../blob/projects/writers_studio-3-1024x577.jpg'
import WritersStudio6 from '../../blob/projects/writers_studio-6-768x433.jpg'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import BackButton from  '../../blob/projects/bkbut.png'


function AnemoiaProjectWritersStudio6() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Writers Studio</span>
           <Link to='/projects/anemoia' className='projects-back-button'><img alt='Projects back button' src={BackButton} />Back to Projects</Link>
           <img className='project-img' alt='Anemoia studios writers studio' src={WritersStudio3} />
           <img className='project-img' alt='Anemoia studios writers studio' src={WritersStudio6} />
       </div></>
    )
}

export default AnemoiaProjectWritersStudio6;