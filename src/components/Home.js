import  React, { useEffect, useState } from 'react'
import '../styles/home.css'
import AnemoiaLogo from '../blob/anemoia_logo.png'
import { PauseFill, PlayFill } from 'react-bootstrap-icons';

function Home({playBGM, setPlayBGM}) {

    const [musicPanelExpanded, setMusicPanelExpandStatus] = useState(false)
    
    useEffect(()=>{
        document.title = 'Anemoia Studios New Web';
    // eslint-disable-next-line
    }, [])

    return (
        <div className='home'>
            <img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
            <div className='slogan'>
                <span className='title'>Anemoia Studios</span>
                <span className='sub'>"We are the ones, We've been waiting for."</span>
            </div>
            <div className={`music-panel${musicPanelExpanded ? ' music-panel-expanded':''}`} 
                onClick={()=>{setPlayBGM(!playBGM); setMusicPanelExpandStatus(!musicPanelExpanded)}}>
                <span>Enjoy our theme song here!</span>
                {
                    playBGM ? 
                    <PauseFill className='play-music-icon' /> :
                    <PlayFill className='play-music-icon' /> 
                }
            </div>
        </div>
    )
}

export default Home;