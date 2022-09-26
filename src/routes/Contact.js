import React from 'react'
import Footer from '../component/Footer'
import Form from '../component/Form'
import HeroImg from '../component/HeroImg'
import Navbar from '../component/Navbar'
const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImg heading='CONTACT.' text='Contact GLX Travel' />
            <Form/>
            <Footer />
        </div>
    )
}

export default Contact
