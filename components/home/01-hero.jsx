import React from 'react'

import { DiscordIcon } from '../svg/discord-icon'
import { LogoHero } from '../svg/logo-hero'

import { baseUrlPng } from '../../utils/base-url';

import {
  hero,
  heroContent,
  sectionHeader,
  blurb,
  ctaButton,
  scrollBtn,
  text,
  arrow,
  heroImg
} from '../../styles/home/hero.module.scss'
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroContent}>
        <div className={sectionHeader}>
          <LogoHero />
        </div>
        <p className={blurb}>
          The Goombahs are an exclusive NFT-METAVERSE collection. Each Goombah NFT doubles as your access point into “The Goombaverse". Upon minting, you will forever have access to all IRL and virtual events. Anything that The Goombahs or their partners are a part of, you are now a part of.
        </p>
        <div className={ctaButton}>
          <button className='btn btn__primary'>
            <a href='https://discord.com/invite/yXmRQy6s6Q'>
              JOIN DISCORD
            </a>{' '}
            <DiscordIcon />
          </button>
          <button className='btn btn__secondary'>
            <Link href='/about'>
              <a>Learn More →</a>
            </Link>
          </button>
        </div>
      </div>
      {/* <div className={heroImg}>
        <img
          src={baseUrlPng(`hero-gooms_q5grxs`)}
          alt='goombahs'
        />
      </div> */}
      <Link href='/#story'>
        <a className={scrollBtn}>
          <span className={text}>SCROLL DOWN</span>
          <span className={arrow}>→</span>
        </a>
      </Link>
    </section>
  )
}
