import React from 'react'
import './Footer.css';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left' >
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        <div>
                            <p> 9 uy, Soy ko'cha</p>
                            <h4> 3 uy, Ulug'bek ko'cha</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} /> +998 91 619-01-79</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk /> uzumakiisfandiyor@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About company</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni molestias odit labore enim inventore facilis quisquam consequuntur, numquam illo optio, cupiditate corrupti nostrum quo ipsa!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni molestias odit labore enim inventore facilis quisquam consequuntur, numquam illo optio, cupiditate corrupti nostrum quo ipsa!</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
