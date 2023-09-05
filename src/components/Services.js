import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from './Service'

const Services = () => {
  return (
    <section className='section bg-gray-200 h-[600px]' id='services'>
      <Title title='our' subTitle='services'/>
      <div className="section-center services-center pt-24">
        {services.map((service) =>{
          return <Service key={service.id} {...service}/>
        })}
      </div>
    </section>
    
  )
}

export default Services
