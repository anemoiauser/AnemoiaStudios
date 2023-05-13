import  React, {useEffect } from 'react'
import '../../styles/anewood_projects.css'


function AnewoodProjects() {
    
    useEffect(()=>{
        document.title = 'Anewood Studios - Projects';
    // eslint-disable-next-line
    }, [])

    return (
        <div className='anewood_projects'>
            <div className='slogan'>
                <span className='title'>Anewood Studios Projects</span>
            </div>
        </div>
    )
}

export default AnewoodProjects;