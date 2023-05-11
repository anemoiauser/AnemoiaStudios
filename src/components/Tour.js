import { React, useEffect, useRef, useState } from 'react'
import Anewood from '../blob/anewood.jpg'
import Studio from '../blob/studio.jpg'
import AnewoodLogo from '../blob/anewood_logo.png'
import AnemoiaLogo from '../blob/anemoia_logo.png'
import '../styles/tour.css'
import { Link } from 'react-router-dom'
import TourProgressBar from './TourProgressBar'
import TourProjectTitles from './TourProjectTitles'
import { project_titles } from '../settings';

function Tour({scene}) {
    const containerRef = useRef()
    const sceneRef = useRef()

    const scenes = useRef({
        anewood: Anewood,
        studio: Studio
    })
    const logos = useRef({
        anewood: AnewoodLogo,
        studio: AnemoiaLogo
    })

    const [sceneTitles, setSceneTitles] = useState(
        project_titles[scene])

    const [mouseDown, setMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState()

    const containerWidth = useRef(0)
    const maxTranslateX = useRef(0)
    const [translateX, setTranslateX] = useState(0)
    const [progress, setProgress] = useState([...Array(9)].map(()=>{return 0}))
    const [lastProgress, setLastProgress] = useState(0)

    useEffect(()=>{
        setSceneTitles(project_titles[scene])
    }, [scene])

    useEffect(()=>{
        if(translateX < 0) setTranslateX(0)
        else if(translateX > maxTranslateX.current) setTranslateX(maxTranslateX.current)
        sceneRef.current.style.transform = `translateX(-${translateX}px)`

        // set progress bar diamond
        if(containerWidth.current) {
            const progress_index = Math.round(translateX / containerWidth.current)
            if(progress_index !== lastProgress) {
                let progress_arr = [...progress]
                progress_arr[progress_index] = 1
                progress_arr[lastProgress] = 0
                setProgress(progress_arr)
                setLastProgress(progress_index)
            }
        }
    // eslint-disable-next-line
    }, [translateX])

    function updateWidthInfo() {
        containerWidth.current = containerRef.current.offsetWidth
        maxTranslateX.current = sceneRef.current.offsetWidth - containerWidth.current
        console.log(maxTranslateX.current);
        setTranslateX(maxTranslateX.current / 2)
    }

    function scrollImage(event) {
        setTranslateX(translateX + event.deltaY)
    }

    function onMouseMove(event) {
        if(mouseDown) {
            setTranslateX(translateX + (mouseX - event.pageX))
        }
        setMouseX(event.pageX)
    }

    function manualSetProgress(p) {
        setTranslateX(p * containerWidth.current)
    }

    return (
        <div className='container' ref={containerRef} onWheel={scrollImage}
                onMouseDown={()=>setMouseDown(true)} onMouseUp={()=>setMouseDown(false)} onMouseMove={onMouseMove}
                onMouseLeave={()=>setMouseDown(false)} >
            <TourProjectTitles scene_titles={sceneTitles} progress_index={lastProgress} />
            <TourProgressBar progress={progress} manualSetProgress={manualSetProgress} />
            <Link to='/'><img className='logo'  src={logos.current[scene]} alt='logo' /></Link>
            <img className='scene' ref={sceneRef} src={scenes.current[scene]} alt="scene" 
                onLoad={updateWidthInfo} draggable={false} />
        </div>
    )
}

export default Tour;