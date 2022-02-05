import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

import { DiscordIcon } from '../svg/discord-icon'
import { TwitterIcon } from '../svg/twitter-icon'

import {
  mobileMenu,
  links,
  link,
  menuFooter,
  meta,
} from '../../styles/layout/mobile-menu.module.scss'

// Animation Variant
const slideFade = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: '-110vh',
  },
}

export const MobileMenu = ({ pageLinks, closeMenu }) => {
  
  const handleCloseMenu = () => {
    closeMenu()
  };
  
  
  return (
    <motion.nav
      className={mobileMenu}
      variants={slideFade}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <ul className={links}>
        {pageLinks.map((lnk) => {
          return (
            <li
              key={lnk.name}
              className={link}
              onClick={handleCloseMenu}
            >
              <Link href={lnk.path}>{lnk.name}</Link>
            </li>
          )
        })}
      </ul>
      <div className={menuFooter}>
        <span>
          <DiscordIcon />
        </span>
        <span>
          <TwitterIcon />
        </span>
        <div className={meta}>
          <span>The Goombahs ©2022</span>
          <span>|</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </motion.nav>
  )
}
