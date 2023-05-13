import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import WritersStudio3 from '../../blob/projects/writers_studio-3-1024x577.jpg'
import WritersStudio6 from '../../blob/projects/writers_studio-6-768x433.jpg'
import AnemoiaLogo from '../../blob/anemoia_logo.png'



function AnemoiaProjectWritersStudio6() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Writers Studio</span>
           <img className='project-img' alt='Anemoia studios writers studio' src={WritersStudio3} />
           <img className='project-img' alt='Anemoia studios writers studio' src={WritersStudio6} />
       </div></>
    )
}

export default AnemoiaProjectWritersStudio6;