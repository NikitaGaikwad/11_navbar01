import React, { useState, useRef } from 'react'
import { links, social } from './data'
import logo from './logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    let [showLinks, setShowLinks] = useState(false);

    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks)
    }
   
    const linkStyle = {
        height:showLinks?`${linksRef.current.getBoundingClientRect().height}px`:'0px',
    }
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className='logo' />
                    <button type='button' className='nav-toggle' onClick={toggleLinks}> <FaBars /></button>
                </div>
                <div className='links-container' ref={linksContainerRef} style={linkStyle}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            return <li key={link.id} className=''>
                                <a href={link.url}>{link.text}</a>
                            </li>
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {social.map((link)=>{
                        return <li key={link.id}>
                            <a href={link.url}>{link.icon}</a>
                        </li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
