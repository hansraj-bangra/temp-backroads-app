import React from 'react'
import { socialLinks } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SocialLink = () => {
  return (
    <ul className='nav-links social-link d-flex list-unstyled flex justify-center' id='nav-links'>
    {socialLinks.map((link) =>{
        const {id,href,icon} = link;
        return (
          <li key={id}>
            <a href={href} target='_blank' className='nav-icon footer-link px-6' rel="noreferrer">
                <FontAwesomeIcon icon={icon} size="lg" style={{color: "#33bbc5",}} />
            </a>
          </li>
        )
      })}
    </ul>
    
  )
}

export default SocialLink
