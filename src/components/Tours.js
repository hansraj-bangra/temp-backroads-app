import React from 'react'
import Title from './Title'
import { tours } from '../data'

const Tours = () => {
  return (
    <section className='section h-fit py-[70px]' id='tours'>
      <Title title='featured' subTitle='tours'/>
      <div className="section-center featured-center grid grid-cols-3 gap-16 transition duration-700 ease-in-out delay-75">
        {tours.map((tour) =>{
          const {id,image,date,title,info,location,duration,cost} = tour;
          return(
            <article className="tour-card bg-gray-100 border-black border-solid w-[80%] mx-auto p-4 shadow-xl rounded-xl" key={id}>
              <div className="tour-img-container relative ">
                <img src={image} alt={title} className="tour-img" />
                <p className="tour-date absolute top-0 bg-cyan-400 px-4 py-2 text-xl font-bold text-white">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title py-3">
                  <h4 className='font-bold text-xl tracking-widest'>{title}</h4>
                </div>
                <p className='font-bold tracking-wider py-4'>{info}</p>
                <div className="tour-footer flex justify-between text-cyan-500">
                  <p className='font-bold'>
                    <span className='mr-4'>
                      <i className="fas fa-map"></i>
                    </span>
                    <span className=''>
                      {''}{location}
                    </span>
                  </p>
                  <p className='font-bold'>{duration} days</p>
                  <p className='font-bold capitalize'>from ${cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
