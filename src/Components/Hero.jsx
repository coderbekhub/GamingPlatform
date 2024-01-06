import React from 'react'
import HeroImg from '../img/heroImg.png'

export default function Hero() {
  return (
    <section className='heroSection'>
      <div className="container">
        <div className='row align-items-center heroContent'>
          <div className='heroInfo col-md-6 col-12'>
            <h3>3D game Dev </h3>
            <h2>Work that we produce for our clients</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            <button>Get more details</button>
          </div>

          <div className="heroImg col-md-6 col-12">
            <img src={HeroImg} alt="img"/>
          </div>
        </div>
      </div>
    </section>
  )
}
