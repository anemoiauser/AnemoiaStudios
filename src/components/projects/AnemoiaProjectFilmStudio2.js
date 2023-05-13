import  React, {useEffect } from 'react'
import '../../styles/anemoia_project.css'
import FilmStudio4 from '../../blob/projects/film_studio-4-768x433.jpg'
import FilmStudio5 from '../../blob/projects/film_studio-5-1024x577.jpg'
import FilmStudio6 from '../../blob/projects/film_studio-6-768x433.jpg'
import AnemoiaLogo from '../../blob/anemoia_logo.png'

function AnemoiaProjectFilmStudio2() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Project';
    // eslint-disable-next-line
    }, [])

    return (
        <><img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <div className='anemoia_project'>
           <span className='title'>Film Studio</span>
           <img className='project-img' alt='Anemoia studios film studio' src={FilmStudio5} />
           <img className='project-img' alt='Anemoia studios film studio' src={FilmStudio6} />
           <img className='project-img' alt='Anemoia studios film studio' src={FilmStudio4} />
       </div></>
    )
}

export default AnemoiaProjectFilmStudio2;