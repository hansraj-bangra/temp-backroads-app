import React from 'react'
import { pageLinks } from '../data';
const NavLink = () => {
  return (
    <ul className='nav-list d-flex gap-3 footer-links flex justify-content-around'>
          {pageLinks.map((link)=>{
            const {id,href,text} = link;
              return(<li key={id} > <a href={href} className='text-decoration-none capitalize'> {text}</a></li>)
          })}
      </ul>
  )
}

export default NavLink
