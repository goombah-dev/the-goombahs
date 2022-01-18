import React, { useState } from 'react'
import Link from 'next/link'

import { DiscordIcon } from '../svg/discord-icon'
import { TwitterIcon } from '../svg/twitter-icon'
import { FBIcon } from '../svg/fb-icon'

import {
  topNav,
  navLinks,
  navLink,
  active,
  logo,
  social,
  icon,
} from '../../styles/layout/top-nav.module.scss'

const pageLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'NFTs',
    path: '/',
  },
  {
    name: 'Utility',
    path: '/',
  },
  {
    name: 'Partners',
    path: '/',
  },
  {
    name: 'Analytics',
    path: '/',
  },
  {
    name: 'Roadmap',
    path: '/',
  },
]

export const TopNav = () => {
  const [activeLink, setSetActiveLink] = useState(0)

  return (
    <nav className={topNav}>
      <div className={logo}>THE GOOMBAHS</div>
      <div className={navLinks}>
        {pageLinks.map((lnk, idx) => {
          const isActiveLink =
            idx === activeLink ? active : null

          return (
            <Link href={lnk.path} key={lnk.name}>
              <a
                className={`${navLink} ${isActiveLink}`}
                onClick={() => setSetActiveLink(idx)}
              >
                {lnk.name}
              </a>
            </Link>
          )
        })}
      </div>
      <div className={social}>
        <span className={icon}>
          <DiscordIcon />
        </span>
        <span className={icon}>
          <TwitterIcon />
        </span>
        <span className={icon}>
          <FBIcon />
        </span>
      </div>
    </nav>
  )
}
