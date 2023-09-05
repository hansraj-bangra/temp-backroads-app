import React from 'react'

const Title = ({title,subTitle}) => {
  return (
    <div className='section-title font-sans font-bold text-6xl uppercase flex justify-center py-10'>
        <h2>{title} <span className='text-cyan-400'>{subTitle}</span></h2>
      </div>
  )
}

export default Title
