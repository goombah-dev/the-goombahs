import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';

import { DiscordIcon } from '../svg/discord-icon'
import { TwitterIcon } from '../svg/twitter-icon'
import { fadeSlideVert } from '../../animations/fadeSlide';

import {
  mobileMenu,
  links,
  link,
  menuFooter,
  meta,
} from '../../styles/layout/mobile-menu.module.scss'



export const MobileMenu = ({ pageLinks, closeMenu }) => {
  
  return (
    <motion.nav
      className={mobileMenu}
      variants={fadeSlideVert}
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
              onClick={closeMenu}
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
          <Link href='/terms-conditions'>
            <a>Terms & Conditions</a>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
