import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import { Link } from 'react-router-dom'
import BackButton from  '../../blob/projects/bkbut.png'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import Lobby1 from '../../blob/projects/corporate_lobby-1.jpg'
import Lobby2 from '../../blob/projects/corporate_lobby-2.jpg'
import Lobby3 from '../../blob/projects/corporate_lobby-3.jpg'
function AnewoodProjectLobby() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Corporate Lobby</span>
           <Link to='/projects/anewood' className='projects-back-button'><img alt='Projects back button' src={BackButton} />Back to Projects</Link>
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Lobby1} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Lobby2} />
           <img className='project-img' alt='Anemoia studios emoia entertainment' src={Lobby3} />
       </div></>
    )
}

export default AnewoodProjectLobby;