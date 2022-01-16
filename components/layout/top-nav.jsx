import React, { useState } from 'react'
import Link from 'next/link'

import {
  topNav,
  navLink,
  active,
  logo,
  social,
  icon
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
  const [activeLink, setSetActiveLink] = useState(2)

  return (
    <nav className={topNav}>
      <div className={logo}>THE GOOMBAHS</div>
      <div className={pageLinks}>
        {pageLinks.map((lnk, idx) => {
          const isActiveLink = idx === activeLink ? active : null

          return (
            <Link href={lnk.path}>
              <a className={`${navLink} ${isActiveLink}`} onClick={() => setSetActiveLink(idx)}>{lnk.name}</a>
            </Link>
          )
        })}
      </div>
      <div className={social}>
        <span className={icon}>DS</span>
        <span className={icon}>FB</span>
        <span className={icon}>TW</span>
      </div>
    </nav>
  )
}
