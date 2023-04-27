import { React, useState } from 'react'
import '../styles/menu.css'
import { CaretRightFill, Instagram, Linkedin, List, Tiktok, Twitter, XLg, Youtube } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function Menu() {
    const [menuStatus, setMenuStatus] = useState(false)
    const [expandStatus, setExpandStatus] = useState({
        tour: false,
        projects: false
    })

    return (
        menuStatus ? 
        <div className='menu-main'>
            <XLg className='close' onClick={()=>setMenuStatus(false)} />
            <div className='menu-items'>
                <div className='menu-item' onClick={()=>setExpandStatus({...expandStatus, tour: !expandStatus.tour})}
                >Tours <CaretRightFill className={`expand${expandStatus.tour ? ' expand-rotated' : ''}`} />
                {
                    expandStatus.tour ? 
                    <>
                    <Link to='/' className='menu-item' onClick={()=>setMenuStatus(false)}>Studios</Link>
                    <Link to='/' className='menu-item' onClick={()=>setMenuStatus(false)}>Anewood</Link>
                    <Link to='/' className='menu-item' onClick={()=>setMenuStatus(false)}>Tour Outside</Link>
                    </> : <></>
                }
                </div>
                <div className='menu-item' onClick={()=>setExpandStatus({...expandStatus, projects: !expandStatus.projects})}
                >Projects <CaretRightFill className={`expand${expandStatus.projects ? ' expand-rotated' : ''}`} />
                </div>
                <Link to='/' className='menu-item' onClick={()=>setMenuStatus(false)}>Designs</Link>
                <Link to='/about' className='menu-item' onClick={()=>setMenuStatus(false)}>About Us</Link>
                <Link to='/' className='menu-item' onClick={()=>setMenuStatus(false)}>Contact Us</Link>
            </div>
            <div className='media-menu'>
                <a rel="noreferrer" href='https://www.youtube.com/channel/UCPAhZ9M74b5puxbLj--Kd_Q' target='_blank'><Youtube className='menu-item' /></a>
                <a rel="noreferrer" href='https://instagram.com/anemoiastudios' target='_blank'><Instagram className='menu-item' /></a>
                <a rel="noreferrer" href='https://twitter.com/anemoiainc' target='_blank'><Twitter className='menu-item' /></a>
                <a rel="noreferrer" href='https://www.linkedin.com/company/anemoia-studios-inc' target='_blank'><Linkedin className='menu-item' /></a>
            </div>
        </div> :
        <div className='hamburger-btn' onClick={()=>{setMenuStatus(true)}}>
            <List className='icon' />
        </div>
    )
}

export default Menu;