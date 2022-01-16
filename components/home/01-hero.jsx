import React from 'react'

import {
  hero,
  heroContent,
  sectionHeader,
  primary,
  secondary,
  blurb,
  ctaButton
} from '../../styles/home/hero.module.scss'
import { DiscordIcon } from '../svg/discord-icon'

export const Hero = () => {
  return (
    <section className={hero}>
      <div className={heroContent}>
        <div className={sectionHeader}>
          <h1 className={primary}>GOOMBAHS</h1>
          <h4 className={secondary}>
            {'Join The Family.'
              .split('')
              .map((lett, idx) => (
                <span key={`${lett}${idx}`}>{lett}</span>
              ))}
          </h4>
        </div>
        <p className={blurb}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Cras ut vehicula nibh. Vestibulum vestibulum
          sem sed metus pharetra, consectetur adipiscing vel
          posuere sapien convallis. consectetur adipiscing.
        </p>
        <div className={ctaButton}>
          <button className='btn__primary'>
            <span>JOIN DISCORD</span> <DiscordIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
