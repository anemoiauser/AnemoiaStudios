import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import { Link } from 'react-router-dom'
import BackButton from  '../../blob/projects/bkbut.png'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import warehouse1 from '../../blob/projects/warehouse-2.jpg'
import warehouse2 from '../../blob/projects/warehouse-3.jpg'

function AnewoodProjectWarehouse() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])
    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Warehouse</span>
           <Link to='/projects/anewood' className='projects-back-button'><img alt='Projects back button' src={BackButton} />Back to Projects</Link>
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={warehouse1} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={warehouse2} />
       </div></>
    )
    
}

export default AnewoodProjectWarehouse;