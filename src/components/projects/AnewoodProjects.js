import  React, {useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'flickity-as-nav-for';
import Flickity from "react-flickity-component";
import '../../../node_modules/flickity/css/flickity.css'
import '../../styles/anemoia_projects.css'

import AnemoiaLogo from '../../blob/anemoia_logo.png'
import Podcast1 from '../../blob/projects/podcast_internet_based_entertainment_studio-2.jpg'
import Podcast2 from '../../blob/projects/podcast_internet_based_entertainment_studio-6.jpg'
import Lounge1 from '../../blob/projects/corporate_lounge-1-1200x677.jpg'
import Lounge2 from '../../blob/projects/corporate_lounge-5.jpg'
import Lounge3 from '../../blob/projects/corporate_lounge-6-1200x677.jpg'
import Lobby1 from '../../blob/projects/corporate_lobby-1.jpg'
import Lobby2 from '../../blob/projects/corporate_lobby-2.jpg'
import Lobby3 from '../../blob/projects/corporate_lobby-3.jpg'
import Cafe from '../../blob/projects/cafeteria.jpg'
import Suite1 from '../../blob/projects/corporate_sleeping_area-1.jpg'
import Suite2 from '../../blob/projects/corporate_sleeping_area-2.jpg'
import Theatre1 from '../../blob/projects/theatre-auditorium-4.jpg'
import Theatre2 from '../../blob/projects/theatre-auditorium-5.jpg'
import Theatre3 from '../../blob/projects/theatre-auditorium-7.jpg'
import warehouse1 from '../../blob/projects/warehouse-2.jpg'
import warehouse2 from '../../blob/projects/warehouse-3.jpg'



function AnewoodProjects() {
    
    useEffect(()=>{
        document.title = 'Anewood Studios - Projects';
    // eslint-disable-next-line
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
                Make a Contribution to Anemoia’s Campaign to Help Build Our Studio Home.<br></br><br></br>Please browse our Projects...</div></div>
                <div className="cell"><Link to='/projects/AnewoodProjectPodcast'><span>Podcast Studio</span><img alt='Podcast Studio' src={Podcast1} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectPodcast'><span>Podcast Studio</span><img alt='Podcast Studio' src={Podcast2} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectLounge'><span>Corporate Lounge</span><img alt='Corporate Lounge' src={Lounge1} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectLounge'><span>Corporate Lounge</span><img alt='Corporate Lounge' src={Lounge2} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectLounge'><span>Corporate Lounge</span><img alt='Corporate Lounge' src={Lounge3} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectLobby'><span>Corporate Lobby</span><img alt='Corporate Lobby' src={Lobby1} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectLobby'><span>Corporate Lobby</span><img alt='Corporate Lobby' src={Lobby2} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectLobby'><span>Corporate Lobby</span><img alt='Corporate Lobby' src={Lobby3} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectCafe'><span>Cafeteria</span><img alt='Cafeteria' src={Cafe} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectSuite'><span>Warming Suite</span><img alt='Warming Suite' src={Suite1} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectSuite'><span>Warming Suite</span><img alt='Warming Suite' src={Suite2} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectTheatre'><span>Theatre</span><img alt='Theatre' src={Theatre1} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectTheatre'><span>Theatre</span><img alt='Theatre' src={Theatre2} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectTheatre'><span>Theatre</span><img alt='Theatre' src={Theatre3} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectWarehouse'><span>Warehouse</span><img alt='Warehouse' src={warehouse1} /></Link></div>
                <div className="cell"><Link to='/projects/AnewoodProjectWarehouse'><span>Warehouse</span><img alt='Warehouse' src={warehouse2} /></Link></div>
                

 </Flickity> 

  <Flickity
    className={"carousel-b"}
    elementType={"div"}
    options={testimonialFlickityOptions}
    disableImagesLoaded={false}
  >
 <div className="cell"><span><br></br><br></br>Anemoia Projects</span></div>
                <div className="cell"><span>Podcast Studio</span><img alt='Podcast Studio' src={Podcast1} /></div>
                <div className="cell"><span>Podcast Studio</span><img alt='Podcast Studio' src={Podcast2} /></div>
                <div className="cell"><span>Corporate Lounge</span><img alt='Corporate Lounge' src={Lounge1} /></div>
                <div className="cell"><span>Corporate Lounge</span><img alt='Corporate Lounge' src={Lounge2} /></div>
                <div className="cell"><span>Corporate Lounge</span><img alt='Corporate Lounge' src={Lounge3} /></div>
                <div className="cell"><span>Corporate Lobby</span><img alt='Corporate Lobby' src={Lobby1} /></div>
                <div className="cell"><span>Corporate Lobby</span><img alt='Corporate Lobby' src={Lobby2} /></div>
                <div className="cell"><span>Corporate Lobby</span><img alt='Corporate Lobby' src={Lobby3} /></div>
                <div className="cell"><span>Cafeteria</span><img alt='Cafeteria' src={Cafe} /></div>
                <div className="cell"><span>Warming Suite</span><img alt='Warming Suite' src={Suite1} /></div>
                <div className="cell"><span>Warming Suite</span><img alt='Warming Suite' src={Suite2} /></div>
                <div className="cell"><span>Theatre</span><img alt='Theatre' src={Theatre1} /></div>
                <div className="cell"><span>Theatre</span><img alt='Theatre' src={Theatre2} /></div>
                <div className="cell"><span>Theatre</span><img alt='Theatre' src={Theatre3} /></div>
                <div className="cell"><span>Warehouse</span><img alt='Warehouse' src={warehouse1} /></div>
                <div className="cell"><span>Warehouse</span><img alt='Warehouse' src={warehouse2} /></div>
               

    </Flickity>  
</>
    )
}

export default AnewoodProjects;