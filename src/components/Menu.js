import  React,{ useState } from 'react'
import '../styles/menu.css'
import { CaretRightFill, Instagram, Linkedin, List, Tiktok, Twitter, XLg, Youtube } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Menu() {
    const [menuStatus, setMenuStatus] = useState(false)
    const [expandStatus, setExpandStatus] = useState({
        tour: false,
        projects: false
    })

    function switchPage(target_title) {
        setMenuStatus(false);
        document.title = `Anemoia Studios | ${target_title}`
    }

    return (
        menuStatus ? 
        <div className='menu-main'>
            <XLg className='close' onClick={()=>setMenuStatus(false)} />
            <div className='menu-items'>
                <Link to='/' className='menu-item' onClick={()=>switchPage('Home')}>Home</Link>
                <div className='menu-item' onClick={()=>setExpandStatus({...expandStatus, tour: !expandStatus.tour})}
                >Tours <CaretRightFill className={`expand${expandStatus.tour ? ' expand-rotated' : ''}`} />
                {
                    expandStatus.tour ? 
                    <>
                    <Link to='/tour/studio' className='menu-item' onClick={()=>switchPage('Tour | Anemoia Studios')}>Anemoia Studios</Link>
                    <Link to='/tour/anewood' className='menu-item' onClick={()=>switchPage('Tour | Anewood Production')}>Anewood Production</Link>
                    <Link to='/tour/outside' className='menu-item' onClick={()=>switchPage('Tour | Outside')} replace={true}>Tour Outside</Link>
                    </> : <></>
                }
                </div>
                <div className='menu-item' onClick={()=>setExpandStatus({...expandStatus, projects: !expandStatus.projects})}
                >Anewood Productions <CaretRightFill className={`expand${expandStatus.projects ? ' expand-rotated' : ''}`} />
                {
                    expandStatus.projects ? 
                    <>
                    <Link to='/projects/anemoia' className='menu-item' onClick={()=>switchPage('Projects | Anemoia')}>Anemoia</Link>
                    <Link to='/projects/anewood' className='menu-item' onClick={()=>switchPage('Projects | Anewood')}>Anewood</Link>
                    </> : <></>
                }
                </div>
                <Link to='/design' className='menu-item' onClick={()=>switchPage('Disclaimer')}>Website Disclaimer</Link>
                <Link to='/about' className='menu-item' onClick={()=>switchPage('About')}>About Us</Link>
                <Link to='/contact' className='menu-item' onClick={()=>switchPage('Contact')}>Contact Us</Link>
                <Link to='/dedication' className='menu-item' onClick={()=>switchPage('Dedication')}>Dedication</Link>
                <a href='https://ifundwomen.com/projects/anemoia-studios-welcome-anewood' 
                    className='menu-item' target='_blank' rel="noopener noreferrer">
                    Gift Action
                </a>
                <a href='https://www.kiva.org/lend/2577882' 
                    className='menu-item' target='_blank' rel="noopener noreferrer">
                    KIVA
                </a>
            </div>
            <div className='media-menu'>
                <a rel="noopener noreferrer" href='https://www.youtube.com/channel/UCPAhZ9M74b5puxbLj--Kd_Q' target='_blank'><Youtube className='menu-item' /></a>
                <a rel="noopener noreferrer" href='https://instagram.com/anemoiastudios' target='_blank'><Instagram className='menu-item' /></a>
                <a rel="noopener noreferrer" href='https://twitter.com/anemoiainc' target='_blank'><Twitter className='menu-item' /></a>
                <a rel="noopener noreferrer" href='https://www.linkedin.com/company/anemoia-studios-inc' target='_blank'><Linkedin className='menu-item' /></a>
                <a rel="noopener noreferrer" href='https://www.tiktok.com/@anemoiastudios' target='_blank'><Tiktok className='menu-item' /></a>
            </div>
        </div> :
        <div className='hamburger-btn' onClick={()=>{setMenuStatus(true)}}>
            <List className='icon' />
        </div>
    )
}

export default Menu;