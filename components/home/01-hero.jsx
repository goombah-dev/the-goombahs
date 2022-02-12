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
          An exclusive NFT-METAVERSE collection where each
          token doubles as its holders IRL event and
          metaverse entry pass. A Goombah is a unique 3D
          evolving Goodfella-avatar that garners its rarity
          based off rank within the organization.
          <br />
          <br />
          The Social Club is the first of many build out and
          event venues for not only The Goombahs but
          projects and businesses of the world. Community
          engagement, experience, and education are the
          team's central principals. Each being offered and
          updated as our family and metaverse grows. Minting
          is currently available, get your hands on a
          Goombah and enable the first of many instant
          rewards - The Infinite Goombah Giveaway Campaign.
          <br />
          <br />
          Now its time to meet The Family… ALLA SALUTE.
        </p>
        <div className={ctaButton}>
          <button className='btn btn__primary'>
            <a href='https://discord.com/invite/yXmRQy6s6Q'>
              JOIN DISCORD
            </a>{' '}
            <DiscordIcon />
          </button>
          <button className='btn btn__secondary'>
            <Link href='/mint'>
              <a>Mint Now →</a>
            </Link>
          </button>
        </div>
      </div>
      <div className={heroImg}>
        {/* <img
          src={baseUrlPng(`hero-gooms_q5grxs`)}
          alt='goombahs'
        /> */}
      </div>
      <Link href='/#story'>
        <a className={scrollBtn}>
          <span className={text}>SCROLL DOWN</span>
          <span className={arrow}>→</span>
        </a>
      </Link>
    </section>
  )
}
