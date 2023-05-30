import  React from 'react'
import { Link, useParams } from 'react-router-dom'
import 'flickity-as-nav-for';
import Flickity from "react-flickity-component";
import '../../../node_modules/flickity/css/flickity.css'
import '../../styles/anemoia_projects.css'
import AnemoiaLogo from '../../blob/anemoia_logo.png'
import { default as all_projects } from './projects';

function AnewoodProductions() {
    const { project } = useParams()

    const flickityOptions = { 
        wrapAround: false,
        pageDots: false,
        arrowShape: "M100,47.564v4.632c0,3.014-2.532,5.609-5.546,5.609H27.382l21.273,21.2   c1.03,1.028,1.595,2.33,1.595,3.791c0,1.464-0.564,2.836-1.595,3.863l-3.273,3.275c-1.029,1.027-2.4,1.594-3.863,1.594   c-1.464,0-2.836-0.565-3.865-1.594L1.595,53.877C0.561,52.845-0.004,51.467,0,49.995c-0.004-1.464,0.561-2.84,1.595-3.874   l36.059-36.056c1.029-1.029,2.402-1.594,3.865-1.594s2.834,0.569,3.863,1.598l3.273,3.275c1.03,1.032,1.595,2.416,1.595,3.88   c0,1.463-0.564,2.858-1.595,3.887L27.619,42.192h66.916l-0.156-0.034C97.393,42.159,100,44.553,100,47.564"
    };

    const testimonialFlickityOptions = {
        wrapAround: false,
        asNavFor: ".carousel-a",
        contain: true,
        pageDots: false
    };

    return (
        <>
        <img className='logo' alt='Anemoia studios logo' src={AnemoiaLogo} />
        <Flickity className="carousel-a" elementType={"div"} options={flickityOptions}>
            <div className="cell">
                <div className="intro-project-a">
                    Anemoia Studios, is designed for both its representatives and consumers. Our Founder & CEO has composed a multifunctional, safe 
                    and creative space that caters to its talented representatives, so that we may put out high quality content, services and products.
                    At Anemoia Inc., both quality and quantity are top priority. Anemoia strives to provide our audience with quality content, top 
                    notch underrepresented talent on a consistent basis. Which is why Anemoia is designed with multipurpose and function in mind.
                    <br></br><br></br>Thank You For Touring with Us. Be Sure to Help Our Fundraising Efforts by Clicking “Gift Action”. Anemoia Inc., is 
                    Currently Crowdfunding on “ifundwomen.com”. To See This Design Become a Reality, Anemoia Needs YOUR Help! Please Take The Time to
                    Make a Contribution to Anemoia’s Campaign to Help Build Our Studio Home.<br></br><br></br>Please browse our Projects...
                </div>
            </div>
            {all_projects[project].items_names.map((e, i)=>{
                const current_project = all_projects[project][e]
                return (
                    <div className="cell" key={`cell-${i}`}>
                        <Link to={`/projects/${project}/${e}`}>
                            <span>{current_project.title}</span>
                            <img alt={current_project.title} src={current_project.imgs[0]} />
                        </Link>
                    </div>
                )
            })}
        </Flickity>
        <Flickity className={"carousel-b"} elementType={"div"} options={testimonialFlickityOptions} disableImagesLoaded={false}>
            <div className="cell"><span><br></br><br></br>Anemoia Projects</span></div>
            {all_projects[project].items_names.map((e, i)=>{
                const current_project = all_projects[project][e]
                return (
                    <div className="cell" key={`cell-preview-${i}`}>
                        <span>{current_project.title}</span>
                        <img alt={current_project.title} src={current_project.imgs[0]} />
                    </div>
                )
            })}
        </Flickity>
        </>
    )
}

export default AnewoodProductions;