import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import Theatre1 from '../../blob/projects/theatre-auditorium-4.jpg'
import Theatre2 from '../../blob/projects/theatre-auditorium-5.jpg'
import Theatre3 from '../../blob/projects/theatre-auditorium-7.jpg'
function AnewoodProjectTheatre() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Theatre</span>
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Theatre1} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Theatre2} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Theatre3} />
       </div></>
    )
}

export default AnewoodProjectTheatre;