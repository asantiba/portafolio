import React, { useEffect } from 'react'
import { greetings } from '../portfolio'

import { Button, Container, Row, Col } from 'reactstrap'

import GreetingLottie from '../components/DisplayLottie'
import animationPath from '../lottie/developer.json'
import SocialLinks from '../components/SocialLinks'

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
  })
  return (
    <main>
      <div className='position-relative'>
        <section className='section section-lg section-shaped pb-250'>
          <div className='shape shape-style-1 bg-gradient-info'>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className='py-lg-md d-flex'>
            <div className='d-flex flex-row'>
              <div>
                <h1 className='display-3 text-white'>{greetings.title + ', soy ' + greetings.name}</h1>
                <p className='lead text-white'>{greetings.description}</p>
                <SocialLinks />
              </div>
              <div>
                <div className='d-flex flex-column-reverse'>
                  <GreetingLottie animationPath={animationPath} speed={0.3} />
                </div>
              </div>
            </div>
          </Container>
          {/* SVG separator */}
          <div className='separator separator-bottom separator-skew'>
            <svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' version='1.1' viewBox='0 0 2560 100' x='0' y='0'>
              <polygon className='fill-white' points='2560 0 2560 100 0 100' />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  )
}

export default Greetings
