import  { React, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../styles/anemoia_project.css'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import BackButton from  '../../blob/projects/bkbut.png'
import { default as all_projects } from './projects';
import Error from '../Error'

function SingleProject() {
    const { project, name } = useParams()
    const navigate = useNavigate()
    const this_project = useRef(all_projects[project][name])

    useEffect(()=>{
        document.title = document.title.split('-')[0] + ` - ${name}`;
    // eslint-disable-next-line
    }, [])

    return (
        <>{this_project.current ? 
        <>
            <img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
            <div className='anemoia_project'>
                <span className='title'>{this_project.current.title}</span>
                {   this_project.current.quote ?
                    <span className='quote'>{this_project.current.quote}</span>:
                    <></>
                }
                <div onClick={()=>navigate(-1)} className='projects-back-button'>
                    <img alt='Projects back button' src={BackButton} />
                    Go Back
                </div>
                {this_project.current.imgs.map((e, i) => {
                    return <img className='project-img' key={`project-img-${i}`} alt={this_project.title} src={e}/>
                })}
            </div>
        </> : <Error />}
        </>
    )
}

export default SingleProject