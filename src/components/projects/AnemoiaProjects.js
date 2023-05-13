import  React, {useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'flickity-as-nav-for';
import Flickity from "react-flickity-component";
import '../../../node_modules/flickity/css/flickity.css'
import '../../styles/anemoia_projects.css'

import AnemoiaLogo from '../../blob/anemoia_logo.png'
import AnemoiaProjectAdultEntertainment1 from '../../blob/projects/adult_entertainment-1-1024x577.jpg'
import AnemoiaProjectAdultEntertainment4 from '../../blob/projects/adult_entertainment-4-768x433.jpg'
import AnemoiaProjectAnimationStudio1 from '../../blob/projects/animation_studio-1-1024x577.jpg'
import AnemoiaProjectAnimationStudio4 from '../../blob/projects/animation_studio-4-768x433.jpg'
import AnemoiaProjectAnimationStudio5 from '../../blob/projects/animation_studio-5-768x433.jpg'
import AnemoiaProjectAuditionCenter1 from '../../blob/projects/audition_center-1-768x433.jpg'
import AnemoiaProjectAuditionCenter6 from '../../blob/projects/audition_center-6-768x433.jpg'
import AnemoiaProjectAuditionCenter7 from '../../blob/projects/audition_center-7-1024x577.jpg'
import AnemoiaProjectAuditionCenter8 from '../../blob/projects/audition_center-8-768x433.jpg'
import AnemoiaProjectBroadcastingStudio1 from '../../blob/projects/broadcasting_studio-1-1024x577.jpg'
import AnemoiaProjectFilmStudio2 from '../../blob/projects/film_studio-2-768x433.jpg'
import AnemoiaProjectFilmStudio4 from '../../blob/projects/film_studio-4-768x433.jpg'
import AnemoiaProjectFilmStudio5 from '../../blob/projects/film_studio-5-1024x577.jpg'
import AnemoiaProjectFilmStudio6 from '../../blob/projects/film_studio-6-768x433.jpg'
import AnemoiaProjectMusicStudio1 from '../../blob/projects/music_studio-1-768x433.jpg'
import AnemoiaProjectMusicStudio4 from '../../blob/projects/music_studio-4-768x433.jpg'
import AnemoiaProjectWritersStudio6 from '../../blob/projects/writers_studio-6-768x433.jpg'

function AnemoiaProjects() {
    
    useEffect(()=>{
        document.title = 'Anemoia Studios - Projects';
    }, [])

    const flickityOptions = {
        wrapAround: false,
        pageDots: false,
        arrowShape:
          "M100,47.564v4.632c0,3.014-2.532,5.609-5.546,5.609H27.382l21.273,21.2   c1.03,1.028,1.595,2.33,1.595,3.791c0,1.464-0.564,2.836-1.595,3.863l-3.273,3.275c-1.029,1.027-2.4,1.594-3.863,1.594   c-1.464,0-2.836-0.565-3.865-1.594L1.595,53.877C0.561,52.845-0.004,51.467,0,49.995c-0.004-1.464,0.561-2.84,1.595-3.874   l36.059-36.056c1.029-1.029,2.402-1.594,3.865-1.594s2.834,0.569,3.863,1.598l3.273,3.275c1.03,1.032,1.595,2.416,1.595,3.88   c0,1.463-0.564,2.858-1.595,3.887L27.619,42.192h66.916l-0.156-0.034C97.393,42.159,100,44.553,100,47.564"
      };    

    const testimonialFlickityOptions = {
        wrapAround: false,
        asNavFor: ".carousel-a",
        contain: true,
        pageDots: false
      };

    return (
        <> <img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />

<Flickity
    className="carousel-a"
    elementType={"div"}
    options={flickityOptions}
  >
                <div className="cell"><div className="intro-project-a">Anemoia Studios, is designed for both its representatives and consumers. Our Founder & CEO has composed a multifunctional, safe 
                and creative space that caters to its talented representatives, so that we may put out high quality content, services and products.
                At Anemoia Inc., both quality and quantity are top priority. Anemoia strives to provide our audience with quality content, top 
                notch underrepresented talent on a consistent basis. Which is why Anemoia is designed with multipurpose and function in mind.
                <br></br><br></br>Thank You For Touring with Us. Be Sure to Help Our Fundraising Efforts by Clicking “Gift Action”. Anemoia Inc., is 
                Currently Crowdfunding on “ifundwomen.com”. To See This Design Become a Reality, Anemoia Needs YOUR Help! Please Take The Time to
                Make a Contribution to Anemoia’s Campaign to Help Build Our Studio Home. 💛❄️🌳🌸<br></br><br></br>Please browse our Projects...</div></div>
                <div className="cell"><Link to='/AnemoiaProjectAdultEntertainment1'><span>Emoia Entertainment</span><img alt='Emoia Entertainment' src={AnemoiaProjectAdultEntertainment1} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectAdultEntertainment4'><span>Emoia Entertainment</span><img alt='Emoia Entertainment' src={AnemoiaProjectAdultEntertainment4} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectAnimationStudio1'><span>BANI Studio</span><img alt='BANI Studio' src={AnemoiaProjectAnimationStudio1} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectAnimationStudio4'><span>BANI Studio</span><img alt='BANI Studio' src={AnemoiaProjectAnimationStudio4} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectAnimationStudio5'><span>BANI Center</span><img alt='BANI Studio' src={AnemoiaProjectAnimationStudio5} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectAuditionCenter1'><span>Audition Center</span><img alt='Audition Center' src={AnemoiaProjectAuditionCenter1} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectAuditionCenter6'><span>Audition Center</span><img alt='Audition Center' src={AnemoiaProjectAuditionCenter6} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectAuditionCenter7'><span>Audition Center</span><img alt='Audition Center' src={AnemoiaProjectAuditionCenter7} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectAuditionCenter8'><span>Audition Center</span><img alt='Audition Center' src={AnemoiaProjectAuditionCenter8} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectBroadcastingStudio1'><span>Broadcasting Studio</span><img alt='Broadcasting Studio' src={AnemoiaProjectBroadcastingStudio1} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectFilmStudio2'><span>Film Studio</span><img alt='Film Studio' src={AnemoiaProjectFilmStudio2} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectFilmStudio4'><span>Film Studio</span><img alt='Film Studio' src={AnemoiaProjectFilmStudio4} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectFilmStudio5'><span>Film Studio</span><img alt='Film Studio' src={AnemoiaProjectFilmStudio5} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectFilmStudio6'><span>Film Studio</span><img alt='Film Studio' src={AnemoiaProjectFilmStudio6} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectMusicStudio1'><span>Music Studio</span><img alt='Music Studio' src={AnemoiaProjectMusicStudio1} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectMusicStudio4'><span>Music Studio</span><img alt='Music Studio' src={AnemoiaProjectMusicStudio4} /></Link></div>
                <div className="cell"><Link to='/AnemoiaProjectWritersStudio6'><span>Writers Studio Northbourne</span><img alt='Writers Studio' src={AnemoiaProjectWritersStudio6} /></Link></div>

 </Flickity> 

  <Flickity
    className={"carousel-b"}
    elementType={"div"}
    options={testimonialFlickityOptions}
    disableImagesLoaded={false}
  >
 <div className="cell"><span>Anemoia Projects</span></div>
                <div className="cell"><span>Emoia Entertainment</span><img alt='Emoia Entertainment' src={AnemoiaProjectAdultEntertainment1} /></div>
                <div className="cell"><span>Emoia Entertainment</span><img alt='Emoia Entertainment' src={AnemoiaProjectAdultEntertainment4} /></div>
                <div className="cell"><span>BANI Studio</span><img alt='BANI Studio' src={AnemoiaProjectAnimationStudio1} /></div>
                <div className="cell"><span>BANI Studio</span><img alt='BANI Studio' src={AnemoiaProjectAnimationStudio4} /></div>
                <div className="cell"><span>BANI Center</span><img alt='BANI Studio' src={AnemoiaProjectAnimationStudio5} /></div>
                <div className="cell"><span>Audition Center</span><img alt='Audition Center' src={AnemoiaProjectAuditionCenter1} /></div>
                <div className="cell"><span>Audition Center</span><img alt='Audition Center' src={AnemoiaProjectAuditionCenter6} /></div>
                <div className="cell"><span>Audition Center</span><img alt='Audition Center' src={AnemoiaProjectAuditionCenter7} /></div>
                <div className="cell"><span>Audition Center</span><img alt='Audition Center' src={AnemoiaProjectAuditionCenter8} /></div>
                <div className="cell"><span>Broadcasting Studio</span><img alt='Broadcasting Studio' src={AnemoiaProjectBroadcastingStudio1} /></div>
                <div className="cell"><span>Film Studio</span><img alt='Film Studio' src={AnemoiaProjectFilmStudio2} /></div>
                <div className="cell"><span>Film Studio</span><img alt='Film Studio' src={AnemoiaProjectFilmStudio4} /></div>
                <div className="cell"><span>Film Studio</span><img alt='Film Studio' src={AnemoiaProjectFilmStudio5} /></div>
                <div className="cell"><span>Film Studio</span><img alt='Film Studio' src={AnemoiaProjectFilmStudio6} /></div>
                <div className="cell"><span>Music Studio</span><img alt='Music Studio' src={AnemoiaProjectMusicStudio1} /></div>
                <div className="cell"><span>Music Studio</span><img alt='Music Studio' src={AnemoiaProjectMusicStudio4} /></div>
                <div className="cell"><span>Writers Studio Northbourne</span><img alt='Writers Studio' src={AnemoiaProjectWritersStudio6} /></div>

    </Flickity>  
</>
    )
}

export default AnemoiaProjects;