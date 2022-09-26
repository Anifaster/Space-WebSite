import React from 'react'
import './TrainingTwo.css'
import { Link } from 'react-router-dom'
const TrainingTwo = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity when traveling  to space. We offer all inclusive training for pre-flight and in-flight scenarios</p>
                <Link to='/contact' ><buttoon className='btn'>Contact</buttoon></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src='https://cdn.wallpapersafari.com/30/71/yQCItM.jpg' className='img' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src='https://www.ixpap.com/images/2021/06/hd-astronaut-wallpaper-ixpap-8.jpg' className='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainingTwo
