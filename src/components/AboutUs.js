import { React, useRef, useEffect } from 'react'
import '../styles/about_us.css'
import AnewoodLogo from '../blob/anewood_logo.png'
import FemaleFounderLogo from '../blob/FemaleFounderLogo.png'
import NewMediaFilmFestival from '../blob/NewMediaFilmFestival.png'
import HonorableMentionTheMacoprojectFilmFestival2021 from '../blob/Honorable Mention The Macoproject Film Festival 2021.png'
import OfficalSelectionTheMacoprojectFilmFestival2021 from '../blob/Offical Selection The Macoproject Film Festival 2021.png'
import HonorableMentionDiamondEye from '../blob/Honorable Mention Diamond Eye.png'
import OfficalSelectionDiamondEye from '../blob/Offical Selection Diamond Eye.png'
import WinnerDiamondEye from '../blob/Winner Diamond Eye.png'
import Emergingscreenwriters from '../blob/Emerging screen writers.png'
import CEOPhoto from '../blob/Bej’a A. Christmas.png'
import CIOPhoto from '../blob/Kāya Hampton.png'
import Wanting from '../blob/wanting.png'

function AboutUs() {
      
    const about_main_ref = useRef()
    
    useEffect(()=>{
        document.title = 'Anemoia Studios New Web | About Us';
    // eslint-disable-next-line
    }, [])

    function scrollToHorizontal(event) {
        const amount = event.deltaY
        about_main_ref.current.scrollLeft += amount
    }
    return (
        <div className='about-main' ref={about_main_ref} onWheel={scrollToHorizontal}>
            <div className='about-block about-company'>
                <div className='tagline'>
                <img className='main-img' src={AnewoodLogo} alt='anewood logo' />
                <span className='tagline'>We are the ones we've been waiting for.<br/>
                Welcome to Anéwood.</span>
                </div>
                <span className='summary'>
                    Anemoia Inc. a Production House, Streaming Distribution, Publishing House & Talent Agency that will focus on promoting Black Americans, POC and other marginalized communities in the United States entertainment industry. We aim to build upon the talent of Black Americans through our production and distribution channels. We will use our expertise in Film Production, Music, Animation, Advertisement, Publication & Streaming services to showcase and promote Black and other marginalized community talent in the industry. Our focus? Creating content to share stories, experiences, and culture.
                </span>
                <img className='affiliation' src={FemaleFounderLogo} alt='Female Founder Logo' />
                <img className='affiliation' src={NewMediaFilmFestival} alt='New Media Film Festival' />
<<<<<<< Updated upstream
            </div>
=======
                <img className='affiliation' src={HonorableMentionTheMacoprojectFilmFestival2021} alt='The Macoproject Film Festival 2021' />
                <img className='affiliation' src={OfficalSelectionTheMacoprojectFilmFestival2021} alt='The Macoproject Film Festival 2021' />
                <img className='affiliation' src={HonorableMentionDiamondEye} alt='Diamond Eye' />
                <img className='affiliation' src={OfficalSelectionDiamondEye} alt='Diamond Eye' />
                <img className='affiliation' src={WinnerDiamondEye} alt='Diamond Eye' />
                <img className='affiliation' src={Emergingscreenwriters} alt='Emergingscreenwriters' />
            </div> 
>>>>>>> Stashed changes
            <div className='people-container'>
            <div className='about-block people'>
                <img className='photo' src={CEOPhoto} alt='CEO' />
                <span className='name'>Bejá A.Christmas</span>
                <span>Founder & CEO</span>
                <span style={{marginTop: '20px'}}>
                With over twelve years of experience in the entertainment industry. I have worked in different roles and capacities. Being a black woman in America, I have experienced adversity and has also discovered that minority/ethnic groups lack representation in the film and television industry. Using my experience, passion, and history, I am building Anemoia to represent the true culture of Black Americans and other American People of Color on a global scale.
                </span>
            </div>
            <div className='about-block people'>
                <img className='photo' src={Wanting} alt='Wanting Position' />
                <span className='name'>OPEN POSITION</span>
                <span>COO</span>
                <span style={{marginTop: '20px'}}>
                Seeking a qualified individual(s) with a background in business administration, legalities, business contracts, labor law and contract law for corporate & media and entertainment. Most importantly an individual(s) that wishes to help build Anemoia Inc., into a safe, profitable, and successful corporate entity for Black people and other marginalized minorities in North America. (Lawyer preferred).”
                </span>
            </div>
            </div>
            <div className='people-container'>
            <div className='about-block people'>
                <img className='photo' src={Wanting} alt='Wanting Position' />
                <span className='name'>OPEN POSITION</span>
                <span>CTO</span>
                <span style={{marginTop: '20px'}}>
                Seeking a qualified individual(s) with a background in e-commerce, web distribution systems, ecommerce technology, plus expertise in software programming, also individuals with knowledge in optical engineering are welcome to apply. Most importantly an individual(s) that wishes to help build Anemoia Inc., into a safe, profitable, and successful corporate entity for Black people and other marginalized minorities in North America. (Engineer preferred).”
                </span>
            </div>
            <div className='about-block people'>
                <img className='photo' src={Wanting} alt='Wanting Position' />
                <span className='name'>OPEN POSITION</span>
                <span>CFO</span>
                <span style={{marginTop: '20px'}}>
                Seeking a qualified individual(s) with a background in economics, e-commerce, finance and finance distribution in the media and entertainment industry. Most importantly an individual(s) that wishes to help build Anemoia Inc., into a safe, profitable, and successful corporate entity for Black people and other marginalized minorities in North America. (Finance Wiz preferred)”
                </span>
            </div>
            </div>
            <div className='people-container'>
            <div className='about-block people'>
                <img className='photo' src={CIOPhoto} alt='Wanting Position' />
                <span className='name'>Kāya Hampton</span>
                <span>CIO</span>
                <span style={{marginTop: '20px'}}>
                I’m a Certified ServiceNow Administrator and Certified Scrum Master from Alexandria, VA. I’m currently working in the project management field. Besides being an IT professional, I’m a Wellness Practitioner and Creative. 
                </span>
            </div>
            </div>
        </div>
    )
}

export default AboutUs;