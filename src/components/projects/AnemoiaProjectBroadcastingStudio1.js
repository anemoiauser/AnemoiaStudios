import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import BroadcastingStudio1 from '../../blob/projects/broadcasting_studio-1-1024x577.jpg'
import AnemoiaLogo from '../../blob/anemoia_logo.png'

function AnemoiaProjectBroadcastingStudio1() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Broadcasting Studio Northbourne</span>
           <img className='project-img' alt='Anemoia studios broadcasting studio' src={BroadcastingStudio1} />
       </div></>
    )
}

export default AnemoiaProjectBroadcastingStudio1;