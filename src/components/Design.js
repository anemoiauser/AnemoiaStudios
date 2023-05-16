import  React, { useRef, useEffect } from 'react'
import '../styles/design.css'
import AnewoodLogo from '../blob/anewood_logo.png'

function Design() {
      
    const design_ref = useRef()
    
    useEffect(()=>{
        document.title = 'Anemoia Studios New Web | Design';
    // eslint-disable-next-line
    }, [])

    function scrollToHorizontal(event) {
        const amount = event.deltaY
        design_ref.current.scrollLeft += amount
    }
    return (
        <div className='design-main' ref={design_ref} onWheel={scrollToHorizontal}>
          <div className='design-block'>
                <div className='tagline'>
                <img className='main-img' src={AnewoodLogo} alt='anewood logo' />
                <span className='tagline'> Design creates culture. Culture shapes values. Values determine the future of the world.</span>
                <p className = 'p'>
                Anemoia Studios, is designed for both its representatives and consumers. Our Founder &amp; CEO has composed a multifunctional, safe and creative space that caters to its talented representatives, so that we may put out high quality content, services and products.<br />
                At Anemoia Inc., both quality and quantity are top priority. Anemoia strives to provide our audience with quality content, top notch underrepresented talent on a consistent basis. Which is why Anemoia is designed with multipurpose and function in mind.<br />
                Thank You For Touring w Us. Be Sure to Help Our Fundraising Efforts by Clicking “Gift Action”. Anemoia Inc., is Currently Crowdfunding on “ifundwomen.com”. To See This Design Become a Reality, Anemoia Needs YOUR Help! Please Take The Time to Make a Contribution to Anemoia’s Campaign to Help Build Our Studio Home. 💛❄️🌳🌸  <br />
                </p>
                <p className = 'p2'>
                <br />Disclaimer &amp; Intellectual Property Statement:<br /><br />
                Copyright &amp; Trademarks:<br />
                </p>
                <p className = 'p3'>
                All rights reserved. All content (texts, trademarks, illustrations, photos, graphics, files, designs, arrangements etc.) on this website of Anemoia Inc and its trade names are protected by copyright and other protective laws. The contents of this website are to be used only in accordance with Internet regulations. <br />
                </p>
                <p className = 'p2'>
                Internet Regulations:
                </p>
                <p className = 'p3'>
                Without the explicit written permission of the Anemoia Inc., and its trade names, it is prohibited to integrate in whole, or in part, any of the protected contents published on these websites into other programs or other web sites or to use them by any other means. <br />
                This website can contain elements that are protected by copyright and by other laws that are subject to the copyright or other rights of third parties and that are correspondingly protected for these third parties.
                </p>
                <p className = 'p2'>
                Liability:
                </p>
                <p className = 'p3'>
                Anemoia Inc., and its trade names, has carefully compiled the contents of this website in accordance with their current state of knowledge.<br />
                Access to and use of this website, as well as web sites related or connected to this by links, are at the user's own risk and responsibility. Damage and warranty claims arising from missing or incorrect data are excluded.<br />
                Anemoia Inc., and its trade names, bears no responsibility or liability for damage of any kind, also for indirect or consequential damages resulting from access to or use of this website or websites related or connected to this by links.<br />
                </p>
                <p className = 'p2'>
                Links to Other Websites:
                </p>
                <p className = 'p3'>
                Anemoia Inc., and its trade names, website can contain links (cross references) to websites that are run by third parties. Anemoia Inc., takes no responsibility for the content of these other websites.<br />
                </p>
                <p className = 'p2'>
                Copyright &amp; Trademarks: All rights reserved.
                </p>
                </div>     
            </div>
            <div className='design-block' style={{width : '25%'}}>
                <p className = 'p4'>
                     <br /><br /><br /><br /><br />
                     <b>Avijit Verma</b><br /><br />
                Architect<br /><br />
                Avijit, is a brilliant up and coming architect who works on a plethora of projects that garner high value in both design and detail. Whilst working on architectural concepts, an identity is inherited with a pragmatic sense of aesthetics that stand the test of time.<br />
                Twitter: @avijitdotverma <br />
                Architecture Portfolio: issuu.com/avijitverma <br />
                </p>
                <p className = 'p4'><b>Kantesh M</b><br /><br />
                Web  designer<br /><br />
                Clubhouse : kantesh<br />
                <a href="https://kanteshm.com/">Website</a><br />
                </p>
                <p className = 'p4'><b>Brijesh Acharaya</b><br /><br />
                Animator &amp; Graphic Design <br /><br />
                Facebook<br />
                Instagram<br />
                </p>
            </div>
        </div>
    )
}

export default Design;