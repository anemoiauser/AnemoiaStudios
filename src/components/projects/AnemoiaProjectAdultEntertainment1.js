import  React, {useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/anemoia_project.css'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import AdultEntertainment1 from '../../blob/projects/adult_entertainment-1-1024x577.jpg'
import AdultEntertainment4 from '../../blob/projects/adult_entertainment-4-768x433.jpg'
import AuditionCenter6 from '../../blob/projects/audition_center-7-1024x577.jpeg'
import BackButton from  '../../blob/projects/bkbut.png'

function AnemoiaProjectAdultEntertainment1() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>EMOIA Entertainment</span>
           <span className='quote'>At Anemoia Inc., we fully support sex workers and their respective content. EMOIA Entertainment is Studio that provides for the underrepresented Adult Entertainers of the world.</span>
           <Link to='/projects/anemoia' className='projects-back-button'><img alt='Projects back button' src={BackButton} />Back to Projects</Link>
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={AdultEntertainment1} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={AdultEntertainment4} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={AuditionCenter6} />
       </div></>
    )
}

export default AnemoiaProjectAdultEntertainment1;