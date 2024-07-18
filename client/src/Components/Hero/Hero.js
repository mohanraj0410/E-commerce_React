import React from 'react'
import "./hero.css"
import hand_icon from "../Assets/hand_icon.png"
import Arrow_icon from "../Assets/arrow.png"
import hero from "../Assets/hero_image.png"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>New Arrivals Only</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>New</p>
                        <img src={hand_icon} alt='hand_icon' />
                    </div>
                    <p>collection</p>
                    <p>For EveryOne</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={Arrow_icon} alt='arrow-icon' />
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero} alt='hero'/>
            </div>
        </div>
    )
}

export default Hero