import { React } from 'react'
import '../styles/tour_project_titles.css'
import { Link } from 'react-router-dom';

function TourProjectTitles({name, link}) {
    return <Link className='tour-project-title' to={link}>{name}</Link>
}

export default TourProjectTitles;