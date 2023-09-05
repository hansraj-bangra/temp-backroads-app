/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <section className='section py-20 ' id='about'>
      <Title title='about' subTitle='us'/>
      <div className='section-center about-center flex justify-around pt-12 pb-12 shadow-lg shadow-gray-200 rounded-lg mx-20'>
        <div className='about-img  border-8 border-solid border-cyan-600 ml-10 '>
          <img src={aboutImg} className='about-photo ' alt='awesome beach' />
        </div>
        <article className="about-info w-1/2">
          <h3 className='capitalize font-sans text-4xl font-bold pb-4'>explore the difference</h3>
          <p className='font-serif text-xl w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor? </p>
          <p className='font-serif text-xl py-6 w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
          <p className='font-serif text-xl py-6 w-3/4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>

          <a href="#aboout" className="bg-cyan-500 px-6 py-2 uppercase text-lg text-white font-sans tracking-widest">read more</a>
        </article>
      </div>
    </section>
  )
}

export default About
