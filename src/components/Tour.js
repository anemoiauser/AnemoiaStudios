import  React,{ useEffect, useRef, useState } from 'react'
import '../styles/tour.css'
import { Link } from 'react-router-dom'
import TourProgressBar from './TourProgressBar'
import TourProjectTitles from './TourProjectTitles'
import { tour_scenes, project_logos, project_titles } from '../settings';

function Tour({scene, frames}) {
    const containerRef = useRef()
    const sceneRef = useRef()

    const scenes = useRef(tour_scenes[scene])
    const logos = useRef(project_logos[scene])

    const [sceneTitles, setSceneTitles] = useState(project_titles[scene])

    const [mouseDown, setMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState()

    const [translateX, setTranslateX] = useState(0)
    const [progress, setProgress] = useState([...Array(frames)].map(()=>{return 0}))
    const [lastProgress, setLastProgress] = useState(0)

    const [sceneReloadTrigger, triggerSceneReload] = useState(true)
    const [sceneFirstLoad, setSceneFirstLoad] = useState(true)

    useEffect(()=>{
        setSceneTitles(project_titles[scene])
        scenes.current = tour_scenes[scene]
        logos.current = project_logos[scene]
        setProgress([...Array(frames)].map(()=>{return 0}))
        setLastProgress(undefined)
        triggerSceneReload(!sceneReloadTrigger)
    // eslint-disable-next-line
    }, [scene, frames])

    useEffect(()=>{
        sceneRef.current.style.transform = `translateX(-${translateX}px)`

        // set progress bar diamond
        const {frameWidth, maxTranslateX} = getWidthInfo()
        if(frameWidth) {
            const progress_index = Math.min((translateX === maxTranslateX ?
                progress.length - 1 : Math.round(translateX / frameWidth)),
                progress.length - 1)
            if(progress_index !== lastProgress) {
                let progress_arr = [...progress]
                progress_arr[progress_index] = 1
                progress_arr[lastProgress] = 0
                setProgress(progress_arr)
                setLastProgress(progress_index)
            }

            if(sceneFirstLoad) {
                sceneRef.current.style.transitionDuration = '3s'
                setSceneFirstLoad(false)
            }
        }
    // eslint-disable-next-line
    }, [translateX])

    function getWidthInfo() {
        return {
            frameWidth: sceneRef.current.offsetWidth / frames,
            maxTranslateX: sceneRef.current.offsetWidth - containerRef.current.offsetWidth,
            containerWidth: containerRef.current.offsetWidth
        }
    }

    function realTranslateX(value) {
        let real = value
        const {maxTranslateX} = getWidthInfo()
        if(value < 0) real = 0
        else if(value > maxTranslateX) real = maxTranslateX
        return real
    }

    function sceneOnload() {
        setSceneFirstLoad(true)
        const {maxTranslateX} = getWidthInfo()
        setTranslateX(realTranslateX(maxTranslateX / 2))
    }

    function scrollImage(event) {
        setTranslateX(realTranslateX(translateX + event.deltaY))
    }

    function onMouseMove(event, mobile_touch = false) {
        const pageX = (mobile_touch ? event.changedTouches[0].pageX : event.pageX) || 0
        if(mouseDown) {
            setTranslateX(realTranslateX(translateX + (mouseX - pageX)))
        }
        setMouseX(pageX)
    }

    function manualSetProgress(p) {
        const {containerWidth, frameWidth} = getWidthInfo()
        let left = p * frameWidth
        left += (frameWidth - containerWidth) / 2
        setTranslateX(realTranslateX(left))
    }

    function touchStart(e) {
        const pageX = e.changedTouches[0].pageX
        setMouseX(pageX)
        setMouseDown(true)
    }

    return (
        <div className='container' ref={containerRef} onWheel={scrollImage}
                onMouseDown={()=>setMouseDown(true)} onMouseUp={()=>setMouseDown(false)} onMouseMove={onMouseMove}
                onMouseLeave={()=>setMouseDown(false)} 
                onTouchStart={touchStart} onTouchEnd={()=>setMouseDown(false)} onTouchMove={e=>onMouseMove(e, true)}>
            <TourProjectTitles {...sceneTitles[lastProgress]} />
            <TourProgressBar progress={progress} manualSetProgress={manualSetProgress} />
            <Link to='/'><img className='logo'  src={logos.current} alt='logo' /></Link>
            <img className='scene' ref={sceneRef} src={scenes.current} alt="scene" 
                onLoad={sceneOnload} draggable={false} key={`scene-img-${sceneReloadTrigger}`}/>
        </div>
    )
}

export default Tour;