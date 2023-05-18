import  React, {useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/anemoia_project.css'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import AnimationStudio1 from '../../blob/projects/animation_studio-1-1024x577.jpg'
import AnimationStudio4 from '../../blob/projects/animation_studio-4-768x433.jpg'
import AnimationStudio5 from '../../blob/projects/animation_studio-5-768x433.jpg'
import BackButton from  '../../blob/projects/bkbut.png'

function AnemoiaProjectAnimationStudio1() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>BANI Studio</span>
           <span className='quote'>From child to adult, animation belongs to everyone. At Anemoia Studios, we provide a space for Black/ POC animators and graphic designers!</span>
           <Link to='/projects/anemoia' className='projects-back-button'><img alt='Projects back button' src={BackButton} />Back to Projects</Link>
           <img className='project-img' alt='Anemoia studios animation studio' src={AnimationStudio1} />
           <img className='project-img' alt='Anemoia studios animation studio' src={AnimationStudio4} />
           <img className='project-img' alt='Anemoia studios animation studio' src={AnimationStudio5} />
       </div></>
    )
}

export default AnemoiaProjectAnimationStudio1;