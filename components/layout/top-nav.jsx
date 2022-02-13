import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion'

import { LogoIcon } from '../svg/logo-icon';
import { MobileMenu } from './mobile-menu'
import { DiscordIcon } from '../svg/discord-icon'
import { OpenSeaIcon } from '../svg/opensea-icon';
import { FBIcon } from '../svg/fb-icon'

import {
  topNav,
  navLinks,
  navLink,
  active,
  logo,
  logoWrap,
  social,
  icon,
  mobileBtn,
  close
} from '../../styles/layout/top-nav.module.scss'
import { TwitterIcon } from '../svg/twitter-icon';

const pageLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'NFTs',
    path: '/#tokens-1',
  },
  {
    name: 'Utility',
    path: '/utility',
  },
  {
    name: 'Mint',
    path: '/mint',
  },
  // {
  //   name: 'Partners',
  //   path: '/',
  // },
  // {
  //   name: 'Analytics',
  //   path: '/',
  // },
  {
    name: 'Roadmap',
    path: '/#roadmap',
  },
]

export const TopNav = () => {
  const [activeLink, setSetActiveLink] = useState(0)
  const [linksDeactivated, setLinksDeactivated] = useState(false);
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useRouter()

  // mobile breakpoint for JS
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    }
  }, [])

  // stop scrolling if menu open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen]);

  // do not highlight navbar if not on homepage
  useEffect(() => {
    const isHomePage = pathname === '/'
    
  }, [pathname]);
  
  

  return (
    <nav className={topNav}>
      <div className={logo}>
        <Link href='/'>
          <a className={logoWrap}>
            {isMobile ? (
              <LogoIcon />
            ) : (
              <>
                <LogoIcon /> <span>GOOMBAHS</span>
              </>
            )}
          </a>
        </Link>
      </div>
      {isMobile ? (
        <>
          <div
            className={`${mobileBtn} ${
              menuOpen ? close : null
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
          </div>
          <AnimatePresence>
            {menuOpen && (
              <MobileMenu
                pageLinks={pageLinks}
                closeMenu={() => setMenuOpen(false)}
              />
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <div className={navLinks}>
            {pageLinks.map((lnk, idx) => {
              const isActiveLink =
                !linksDeactivated && idx === activeLink
                  ? active
                  : null

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
            <a
              className={icon}
              href='https://discord.com/invite/yXmRQy6s6Q'
            >
              <DiscordIcon />
            </a>
            <a
              href='https://opensea.io/collection/the-goombahs'
              className={icon}
            >
              <OpenSeaIcon />
            </a>
            <a
              className={icon}
              href='https://twitter.com/TheGoombahs'
            >
              <TwitterIcon />
            </a>
          </div>
        </>
      )}
    </nav>
  )
}
