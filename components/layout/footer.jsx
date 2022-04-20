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
  emph as emphStyle,
  socialBlock,
  icon,
  meta,
} from '../../styles/layout/footer.module.scss'
import { TwitterIcon } from '../svg/twitter-icon'

const pageLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Utility',
    path: '/#tokens-1',
  },
  // {
  //   name: 'Analytics',
  //   path: '/',
  // },
  {
    name: 'Roadmap',
    path: '/#roadmap',
  },
  {
    name: 'Mint',
    path: '/mint',
    emph: true,
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
              <a
                className={`${navLink} ${
                  lnk.emph && emphStyle
                }`}
              >
                {lnk.name}
              </a>
            </Link>
          )
        })}
      </div>
      <div className={socialBlock}>
        <a
          className={icon}
          href='https://discord.com/invite/yXmRQy6s6Q'
        >
          <DiscordIcon />
        </a>
        <a
          className={icon}
          href='https://opensea.io/collection/the-goombahs'
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
    </footer>
  )
}
