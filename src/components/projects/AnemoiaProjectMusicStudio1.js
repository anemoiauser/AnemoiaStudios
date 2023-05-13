import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import MusicStudio1 from '../../blob/projects/music_studio-1-768x433.jpg'
import MusicStudio2 from '../../blob/projects/music_studio-2-1024x577.jpg'
import MusicStudio3 from '../../blob/projects/music_studio-3-1024x577.jpg'
import MusicStudio4 from '../../blob/projects/music_studio-4-768x433.jpg'
import AnemoiaLogo from '../../blob/anemoia_logo.png'


function AnemoiaProjectMusicStudio1() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Music Studio</span>
           <img className='project-img' alt='Anemoia studios music studio' src={MusicStudio1} />
           <img className='project-img' alt='Anemoia studios music studio' src={MusicStudio2} />
           <img className='project-img' alt='Anemoia studios music studio' src={MusicStudio3} />
           <img className='project-img' alt='Anemoia studios music studio' src={MusicStudio4} />
       </div></>
    )
}

export default AnemoiaProjectMusicStudio1;