import React from 'react';
import { Link } from 'react-scroll';
import background from '../../public/restaurant.jpg';
 

const HeroSection = () => {
  return (
    <section className='hero'>

        <img src={background} alt="restaurant" />

        <div className="item">

            <h3>Dream Maker</h3>
            <div>
                <h1>Your Personal Dream Maker</h1>

                <p>We belive that it is all about the BIG DREAMS and the small details</p>
                <Link to="contact" spy={true} smooth={true} duration={500} style={{cursor:"pointer"}}>BOOK NOW</Link>
            </div>
        </div>
      
    </section>
  )
}

export default HeroSection
