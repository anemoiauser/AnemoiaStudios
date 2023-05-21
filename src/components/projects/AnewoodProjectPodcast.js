import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import { Link } from 'react-router-dom'
import BackButton from  '../../blob/projects/bkbut.png'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import Podcast1 from '../../blob/projects/podcast_internet_based_entertainment_studio-2.jpg'
import Podcast2 from '../../blob/projects/podcast_internet_based_entertainment_studio-6.jpg'
function AnewoodProjectPodcast() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Podcast</span>
           <Link to='/projects/anewood' className='projects-back-button'><img alt='Projects back button' src={BackButton} />Back to Projects</Link>
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Podcast1} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Podcast2} />
       </div></>
    )
}

export default AnewoodProjectPodcast;