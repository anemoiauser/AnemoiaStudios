import  React,{ useEffect, useRef, useState } from 'react'
import Anewood from '../blob/anewood.jpg'
import Studio from '../blob/studio.jpg'
import AnewoodLogo from '../blob/anewood_logo.png'
import AnemoiaLogo from '../blob/anemoia_logo.png'
import '../styles/tour.css'
import { Link } from 'react-router-dom'
import TourProgressBar from './TourProgressBar'

function Tour({scene}) {
    const containerRef = useRef()
    const sceneRef = useRef()
    const slideTimeOut = useRef()
    const slideInterval = useRef()

    const scenes = useRef({
        anewood: Anewood,
        studio: Studio
    })
    const logos = useRef({
        anewood: AnewoodLogo,
        studio: AnemoiaLogo
    })
    const [mouseDown, setMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState()

    const [scrollWidth, setScrollWidth] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const [progress, setProgress] = useState([...Array(9)].map(()=>{return 0}))
    const [lastProgress, setLastProgress] = useState(0)

    useEffect(()=>{
        if(scrollWidth) {
            setScrollLeft((sceneRef.current.offsetWidth - scrollWidth) / 2)
        }
    }, [scrollWidth])

    useEffect(()=>{
        containerRef.current.scrollLeft = scrollLeft
        if(containerRef.current.scrollLeft !== scrollLeft)
            setScrollLeft(containerRef.current.scrollLeft)

        if(scrollWidth) {
            const progress_index = Math.round(scrollLeft / scrollWidth)
            if(progress_index !== lastProgress) {
                let progress_arr = [...progress]
                progress_arr[progress_index] = 1
                progress_arr[lastProgress] = 0
                setProgress(progress_arr)
                setLastProgress(progress_index)
            }
        }
    // eslint-disable-next-line
    }, [scrollLeft, scrollWidth])

    function scrollImage(event) {
        if(slideInterval.current) clearInterval(slideInterval.current)
        if(slideTimeOut.current) clearTimeout(slideTimeOut.current)

        setScrollLeft(scrollLeft + (event.deltaY > 0 ? 50 : -50))
        slideInterval.current = setInterval(() => {
            let adding = 50
            adding = event.deltaY > 0 ? adding : -adding
            setScrollLeft(scrollLeft + adding)
        }, 1);
        slideTimeOut.current = setTimeout(() => {
            if(slideInterval.current)
                clearInterval(slideInterval.current)
        }, Math.abs(event.deltaY));

    }

    function onMouseMove(event) {
        if(mouseDown) {
            setScrollLeft(scrollLeft + (mouseX - event.pageX))
        }
        setMouseX(event.pageX)
    }

    function manualSetProgress(p) {
        setScrollLeft(p * scrollWidth)
    }

    return (
        <div className='container' ref={containerRef} onWheel={scrollImage}>
            <TourProgressBar progress={progress} manualSetProgress={manualSetProgress} />
            <Link to='/'><img className='logo'  src={logos.current[scene]} alt='logo' /></Link>
            <img className='scene' ref={sceneRef} src={scenes.current[scene]} alt="scene" 
                onLoad={()=>{setScrollWidth(containerRef.current.offsetWidth)}}
                onMouseDown={()=>setMouseDown(true)} onMouseUp={()=>setMouseDown(false)} onMouseMove={onMouseMove}
                onMouseLeave={()=>setMouseDown(false)} draggable={false} />
        </div>
    )
}

export default Tour;