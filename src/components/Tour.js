import  React,{ useEffect, useRef, useState } from 'react'
import Anewood from '../blob/anewood.jpg'
import Studio from '../blob/studio.jpg'
import Outside from '../blob/front.jpg'
import AnewoodLogo from '../blob/anewood_logo.png'
import AnemoiaLogo from '../blob/anemoia_logo.png'
import '../styles/tour.css'
import { Link } from 'react-router-dom'
import TourProgressBar from './TourProgressBar'
import TourProjectTitles from './TourProjectTitles'
import { project_titles } from '../settings';

function Tour({scene, frames}) {
    const containerRef = useRef()
    const sceneRef = useRef()
    const progressBarRef = useRef()

    const scenes = useRef({
        anewood: Anewood,
        studio: Studio,
        outside: Outside
    })
    const logos = useRef({
        anewood: AnewoodLogo,
        studio: AnemoiaLogo,
        outside: AnemoiaLogo
    })

    const [sceneTitles, setSceneTitles] = useState(
        project_titles[scene])

    const [mouseDown, setMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState()

    const frameWidth = useRef(0)
    const maxTranslateX = useRef(0)
    const [translateX, setTranslateX] = useState(0)
    const [progressBarLeft, setProgressBarLeft] = useState(0)
    const [progress, setProgress] = useState([...Array(frames)].map(()=>{return 0}))
    const [lastProgress, setLastProgress] = useState(0)

    useEffect(()=>{
        setSceneTitles(project_titles[scene])
        setProgress([...Array(frames)].map(()=>{return 0}))
        setLastProgress(undefined)
        updateWidthInfo()
    // eslint-disable-next-line
    }, [scene, frames])

    useEffect(()=>{
        sceneRef.current.style.transform = `translateX(-${translateX}px)`

        // set progress bar diamond
        if(frameWidth.current) {
            const progress_index = Math.min((translateX === maxTranslateX.current ?
                progress.length - 1 : Math.round(translateX / frameWidth.current)),
                progress.length - 1)
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

    function realTranslateX(value) {
        let real = value
        if(value < 0) real = 0
        else if(value > maxTranslateX.current) real = maxTranslateX.current
        return real
    }

    function updateWidthInfo() {
        // scene
        frameWidth.current = sceneRef.current.offsetWidth / frames
        maxTranslateX.current = 
            sceneRef.current.offsetWidth - containerRef.current.offsetWidth
        setTranslateX(realTranslateX(maxTranslateX.current / 2))

        // progress bar
        setProgressBarLeft((containerRef.current.offsetWidth - progressBarRef.current.offsetWidth) / 2)
    }

    function scrollImage(event) {
        setTranslateX(realTranslateX(translateX + event.deltaY))
    }

    function onMouseMove(event) {
        if(mouseDown) {
            setTranslateX(realTranslateX(translateX + (mouseX - event.pageX)))
        }
        setMouseX(event.pageX)
    }

    function manualSetProgress(p) {
        const container_width = containerRef.current.offsetWidth
        let left = p * frameWidth.current
        left += (frameWidth.current - container_width) / 2
        setTranslateX(realTranslateX(left))
    }

    return (
        <div className='container' ref={containerRef} onWheel={scrollImage}
                onMouseDown={()=>setMouseDown(true)} onMouseUp={()=>setMouseDown(false)} onMouseMove={onMouseMove}
                onMouseLeave={()=>setMouseDown(false)} >
            <TourProjectTitles scene_titles={sceneTitles} progress_index={lastProgress} />
            <TourProgressBar progress={progress} manualSetProgress={manualSetProgress}
                progressBarRef={progressBarRef} left={progressBarLeft} />
            <Link to='/'><img className='logo'  src={logos.current[scene]} alt='logo' /></Link>
            <img className='scene' ref={sceneRef} src={scenes.current[scene]} alt="scene" 
                onLoad={updateWidthInfo} draggable={false} />
        </div>
    )
}

export default Tour;