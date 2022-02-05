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

export const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroContent}>
        <div className={sectionHeader}>
          <LogoHero />
        </div>
        <p className={blurb}>
          Weclome to Club Goombah, the NFT social club where
          token ownership grants you access to the Club and
          all the the perks of being a member.
          <br />
          <br />
          Minting one of 7500 tokens on the ERC blockchain
          will make you a member of the family. With your
          newly minted token you’ll be able to access
          members only areas of our 3D metaverse, both
          virtual and live shows, plus other exclusive drops
          and giveaways.
        </p>
        <div className={ctaButton}>
          <button className='btn__primary'>
            <span>JOIN DISCORD</span> <DiscordIcon />
          </button>
        </div>
      </div>
      <div className={heroImg}>
        <img src={baseUrlPng(`hero-gooms_q5grxs`)} alt='goombahs' />
      </div>
      <div className={scrollBtn}>
        <span className={text}>SCROLL DOWN</span>
        <span className={arrow}>→</span>
      </div>
    </section>
  )
}
