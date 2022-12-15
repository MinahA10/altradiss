import React from 'react'
import './About.css'

import imageAbout from '../../assets/about.png'
import imageGoals from '../../assets/about2.jpg'

const About = () => {
  return (
    <section className='about'>
      <div className='about-us'>
        <div className='left'>
          <img src={imageAbout} alt='all anime' />
        </div>
        <div className='right'>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            obcaecati mollitia enim minima aliquam illo vitae temporibus
            excepturi blanditiis aliquid odit sed, cupiditate nisi libero
            delectus nihil officiis reprehenderit, numquam a porro repudiandae
            earum molestias corporis accusamus? Facilis suscipit mollitia, id
            exercitationem eos laborum sit laudantium perspiciatis placeat,
            consequatur, blanditiis provident! A voluptatum saepe facere maxime
            magnam pariatur numquam ut.
          </p>
        </div>
      </div>
      <div className='our-goals'>
        <div className='title'>
          <h3>Our goals</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            unde dolore obcaecati animi eos eaque atque ullam. Tenetur dolor sit
            esse officiis, nisi laborum obcaecati maxime vel. Reiciendis eaque
            aspernatur quod porro iusto, accusantium, adipisci minus quo dolorem
            veniam perspiciatis?
          </p>
        </div>
        <div className='content'>
          <div className='image'>
            <img src={imageGoals} alt='rengoku' />
          </div>
          <div className='text'>
            <h3>Who we are?</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              quis repellendus consequuntur unde delectus, nam nesciunt corrupti
              facere ipsam repellat sapiente dolores maiores incidunt natus
              accusantium laboriosam doloribus numquam reprehenderit quia
              cupiditate rem. Eligendi perferendis in perspiciatis repudiandae
              quaerat ipsa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              enim explicabo ducimus delectus aliquam, reiciendis aliquid
              pariatur magnam reprehenderit impedit inventore mollitia
              temporibus rerum quidem eum nisi officiis. Eius, culpa!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
