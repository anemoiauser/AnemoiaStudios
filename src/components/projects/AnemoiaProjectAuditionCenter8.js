import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import AuditionCenter1 from '../../blob/projects/audition_center-1-768x433.jpg'
import AuditionCenter6 from '../../blob/projects/audition_center-6-768x433.jpg'
import AuditionCenter7 from '../../blob/projects/audition_center-7-1024x577.jpg'
import AuditionCenter8 from '../../blob/projects/audition_center-8-768x433.jpg'
import AnemoiaLogo from '../../blob/anemoia_logo.png'

function AnemoiaProjectAuditionCenter8() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Audition Center</span>
           <img className='project-img' alt='Anemoia studios audition center' src={AuditionCenter1} />
           <img className='project-img' alt='Anemoia studios audition center' src={AuditionCenter6} />
           <img className='project-img' alt='Anemoia studios audition center' src={AuditionCenter7} />
           <img className='project-img' alt='Anemoia studios audition center' src={AuditionCenter8} />
       </div></>
    )
}

export default AnemoiaProjectAuditionCenter8;