import React from 'react'

const Service = ({icon,title,text}) => {
  return (
    <article className="service bg-white px-6 py-6 flex rounded-xl shadow-2xl hover:scale-125 hover:delay-200 hover:ease-out hover:duration-75 hover:transition-all cursor-pointer">
        <span className='service-icon text-[50px] px-4 m-auto'>
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title capitalize font-bold tracking-widest">{title}</h4>
          <p className="service-text text-lg">{text}</p>
        </div>
    </article>
  )
}

export default Service;