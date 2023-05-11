import { React } from 'react'
import '../styles/tour_project_titles.css'

function TourProjectTitles({scene_titles, progress_index}) {
    return <div className='tour-project-title'>{scene_titles[progress_index]}</div>
}

export default TourProjectTitles;