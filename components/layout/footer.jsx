import React from 'react'
import Link from 'next/link'

import { LogoIcon } from '../svg/logo-icon'
import { DiscordIcon } from '../svg/discord-icon'
import { FBIcon } from '../svg/fb-icon'
import { OpenSeaIcon } from '../svg/opensea-icon'

import {
  footerContainer,
  logo,
  logoWrap,
  navLinks,
  navLink,
  socialBlock,
  icon,
  meta,
} from '../../styles/layout/footer.module.scss'

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
  {
    name: 'Terms & Conditions',
    path: '/terms-conditions',
  },
]

export const Footer = () => {
  return (
    <footer className={footerContainer}>
      <div className={logo}>
        <div className={logoWrap}>
          <LogoIcon /> GOOMBAHS
        </div>
      </div>
      <div className={meta}>
        <span>© 2022 The Goombahs</span>
        <span>
          <Link href='/terms-conditions'>
            <a>Terms & Conditions</a>
          </Link>
        </span>
      </div>
      <div className={navLinks}>
        {pageLinks.map((lnk, idx) => {
          return (
            <Link href={lnk.path} key={lnk.name}>
              <a className={`${navLink}`}>{lnk.name}</a>
            </Link>
          )
        })}
      </div>
      <div className={socialBlock}>
        <span className={icon}>
          <DiscordIcon />
        </span>
        <a
          className={icon}
          href='https://opensea.io/collection/the-goombahs'
        >
          <OpenSeaIcon />
        </a>
        <span className={icon}>
          <FBIcon />
        </span>
      </div>
    </footer>
  )
}
