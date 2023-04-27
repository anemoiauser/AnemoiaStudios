import { React, useRef } from 'react'
import '../styles/about_us.css'
import AnewoodLogo from '../blob/anewood_logo.png'
import FemaleFounderLogo from '../blob/FemaleFounderLogo.png'
import NewMediaFilmFestival from '../blob/NewMediaFilmFestival.png'
import CEOPhoto from '../blob/CEO copy.png'
import Wanting from '../blob/wanting.png'

function AboutUs() {
    const about_main_ref = useRef()

    function scrollToHorizontal(event) {
        const amount = event.deltaY
        about_main_ref.current.scrollLeft += amount
    }
    return (
        <div className='about-main' ref={about_main_ref} onWheel={scrollToHorizontal}>
            <div className='about-block about-company'>
                <img className='main-img' src={AnewoodLogo} alt='anewood logo' />
                <span className='tagline'>We are the ones we've been waiting for.<br/>
                Welcome to Anéwood.</span>
                <span className='summary'>
                    Anemoia Inc. a Production House, Streaming Distribution, Publishing House & Talent Agency that will focus on promoting Black Americans, POC and other marginalized communities in the United States entertainment industry. We aim to build upon the talent of Black Americans through our production and distribution channels. We will use our expertise in Film Production, Music, Animation, Advertisement, Publication & Streaming services to showcase and promote Black and other marginalized community talent in the industry. Our focus? Creating content to share stories, experiences, and culture.
                </span>
                <img className='affiliation' src={FemaleFounderLogo} alt='Female Founder Logo' />
                <img className='affiliation' src={NewMediaFilmFestival} alt='New Media Film Festival' />
            </div>
            <div className='about-block people'>
                <img className='photo' src={CEOPhoto} alt='CEO Photo' />
                <span className='name'>Bejá A.Christmas</span>
                <span>Founder & CEO</span>
                <span style={{marginTop: '20px'}}>
                Bejá has over twelve years of experience in the entertainment industry and has worked in different roles and capacities. Being a black woman in America, she has experienced adversity and has also discovered that minority/ethnic groups lack representation in the film and television industry. Using her experience, passion, and history, she is building Anemoia Inc. as a dream to represent the true culture of Black Americans and other POC in America.
                </span>
                {/* <span className='tagline'>Bejá A.Christmas</span>
                <span className='summary'>
                Bejá has over twelve years of experience in the entertainment industry and has worked in different roles and capacities. Being a black woman in America, she has experienced adversity and has also discovered that minority/ethnic groups lack representation in the film and television industry. Using her experience, passion, and history, she is building Anemoia Inc. as a dream to represent the true culture of Black Americans and other POC in America.
                </span> */}
            </div>
            <div className='about-block people'>
                <img className='photo' src={Wanting} alt='Wanting Position' />
                <span className='name'>OPEN POSITION</span>
                <span>COO</span>
                <span style={{marginTop: '20px'}}>
                Seeking a qualified individual(s) with a background in business administration, legalities, business contracts, labor law and contract law for corporate & media and entertainment. Most importantly an individual(s) that wishes to help build Anemoia Inc., into a safe, profitable, and successful corporate entity for Black people and other marginalized minorities in North America. (Lawyer preferred).”
                </span>
            </div>
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
            <div className='about-block people'>
                <img className='photo' src={Wanting} alt='Wanting Position' />
                <span className='name'>OPEN POSITION</span>
                <span>CIO</span>
                <span style={{marginTop: '20px'}}>
                Seeking a qualified individual(s) with a background in operations and infrastructure, specifically regarding production studios & corporate offices. Most importantly an individual(s) that wishes to help build Anemoia Inc., into a safe, profitable, and successful corporate entity for Black people and other marginalized minorities in North America. (Executive Experience preferred but not required)”
                </span>
            </div>
        </div>
    )
}

export default AboutUs;