import React from 'react'
import SocialLink from './SocialLink'
import NavLink from './NavLink'

const Footer = () => {
  return (
    <footer className="section footer grid grid-rows-3 justify-center h-[200px] bg-blue-950 text-white pt-10 pb-10 text-xl">
      <NavLink />
      <SocialLink />
      <p>Copyright &copy; Backroads Travel Tours Company All Rights Reserved</p>
    </footer>
  )
}

export default Footer
