import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import Cafe from '../../blob/projects/cafeteria.jpg'
function AnewoodProjectCafe() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Cafeteria</span>
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Cafe} />
          
       </div></>
    )
}

export default AnewoodProjectCafe;