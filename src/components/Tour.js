import { React, useRef, useState } from 'react'
import Anewood from '../blob/anewood.jpg'
import Studio from '../blob/studio.jpg'
import AnewoodLogo from '../blob/anewood_logo.png'
import AnemoiaLogo from '../blob/anemoia_logo.png'
import '../styles/tour.css'
import { Link } from 'react-router-dom'

function Tour({scence}) {
    const containerRef = useRef()
    const scenceRef = useRef()
    const slideTimeOut = useRef()
    const slideInterval = useRef()

    const scences = useRef({
        anewood: Anewood,
        studio: Studio
    })
    const logos = useRef({
        anewood: AnewoodLogo,
        studio: AnemoiaLogo
    })
    const [mouseDown, setMouseDown] = useState(false)
    const [mouseX, setMouseX] = useState()

    function scrollImage(event) {
        // containerRef.current.scrollLeft += event.deltaY > 0 ? 20 : -20
        if(slideInterval.current) clearInterval(slideInterval.current)
        if(slideTimeOut.current) clearTimeout(slideTimeOut.current)

        containerRef.current.scrollLeft += event.deltaY > 0 ? 5 : -5
        slideInterval.current = setInterval(() => {
            let adding = 5
            adding = event.deltaY > 0 ? adding : -adding
            containerRef.current.scrollLeft += adding
        }, 1);
        slideTimeOut.current = setTimeout(() => {
            if(slideInterval.current)
                clearInterval(slideInterval.current)
        }, Math.abs(event.deltaY));

    }

    function onMouseMove(event) {
        if(mouseDown) {
            containerRef.current.scrollLeft += 
            (mouseX - event.pageX)
        }
        setMouseX(event.pageX)
    }

    function onSenceLoad() {
        containerRef.current.scrollLeft = 
        (scenceRef.current.offsetWidth - containerRef.current.offsetWidth) / 2;
    }

    return (
        <div className='container' ref={containerRef} onWheel={scrollImage}>
            <Link to='/'><img className='logo'  src={logos.current[scence]} alt='logo' /></Link>
            <img className='scence' ref={scenceRef} src={scences.current[scence]} alt="scence" onLoad={onSenceLoad}
                onMouseDown={()=>setMouseDown(true)} onMouseUp={()=>setMouseDown(false)} onMouseMove={onMouseMove}
                onMouseLeave={()=>setMouseDown(false)} draggable={false} />
        </div>
    )
}

export default Tour;