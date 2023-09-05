import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line no-unused-vars
import {pageLinks,socialLinks} from '../data';
const Navbar = () => {
  return (
    <div className='flex justify-between h-20 pt-3 fixed-top bg-white'>
      <h1 className='font-mono text-4xl font-bold px-2 mx-4'>Back<span className='text-cyan-400'>roads</span></h1>
      <ul className='flex justify-items-stretch mx-4 text-2xl'>
        {pageLinks.map((link) =>{
            return(<li key={link.id}> <a href={link.href} className='font-semibold px-4 mx-6 pb-1 capitalize hover:text-cyan-400 hover:border-2 hover:border-solid hover:border-black hover:rounded-lg'> {link.text}</a></li>)
        })}
      </ul>
      <ul className='flex justify-evenly mx-4 text-2xl'>
        {socialLinks.map((link) =>{
          const {id,href,icon} = link;
          return (
            <li key={id} className='hover:scale-125 hover:rotate-45'>
              <a href={href} target='_blank' className='px-2' rel="noreferrer">
              <FontAwesomeIcon icon={icon} size="lg" style={{color: "#33bbc5",}} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
