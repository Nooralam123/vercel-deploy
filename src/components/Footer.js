import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <div className='footer'>
            <h1 style={{fontSize:"2rem"}}>StarClinch</h1>
            <div className='icons'>
                <SocialIcon url="https://twitter.com/jaketrent" />
                <SocialIcon url="https://facebook.com/jaketrent" />
                <SocialIcon url="https://instagram.com/jaketrent" />
                <SocialIcon url="https://youtube.com/jaketrent" />
            </div>
            <div className='about-us'>
                <div>
                    <h1>FOR BUYERS</h1>
                    <ul>
                        <li><a href='#'>Our Buyers</a></li>
                        <li><a href='#'>Browse</a></li>
                        <li><a href='#'>Post Your Requirement</a></li>
                        <li><a href='#'>Entertainment on EMI</a></li>
                    </ul>
                </div>
                <div style={{paddingLeft:"3px"}}>
                    <h1>ABOUT US</h1>
                    <ul>
                        <li><a href='#'>Our Story</a></li>
                        <li><a href='#'>Careers</a></li>
                    </ul>
                </div>
                <div style={{paddingLeft:"5px"}}>
                    <h1>REGISTERED OFFICEADDRESS:</h1>
                    <p>
                        VINSM Globe Private Limited<br />
                        Percept House, Ground Floor<br />
                        East of Kailash, New Delhi<br />
                        CIN: U52605DL2012PTC236944<br />
                        Phone: +91 11 498 498 01
                    </p>
                    <a href='#'>Contact Us</a>
                </div>

            </div>
            <div>
                <h3 style={{ textAlign: "center" }}>© Copyright 2015-2023 | VINSM Globe Pvt. Ltd. | All Rights Reserved.</h3>
            </div>
        </div>
    )
}

export default Footer