import React from 'react'
import Marquee from 'react-fast-marquee'

import { CoinboundLogo } from '../svg/partner-logos/coinbound-logo'
import { DaydreamingLogo } from '../svg/partner-logos/daydreaming-logo'
import { FalLogo } from '../svg/partner-logos/fal-logo'
import { SpineLogo } from '../svg/partner-logos/spine-logo'

import {
  partners,
  logoMarquee,
  logoWrapper,
} from '../../styles/layout/partners.module.scss'

const partnerLogos = [
  {
    link: '',
    name: 'Fal',
    logo: <FalLogo />,
  },
  {
    link: '',
    name: 'Spine3d',
    logo: <SpineLogo />,
  },
  {
    link: '',
    name: 'Dayreaming',
    logo: <DaydreamingLogo />,
  },
  {
    link: '',
    name: 'Coinbound',
    logo: <CoinboundLogo />,
  },
]

export const Partners = () => {
  return (
    <section className={partners}>
      <Marquee
        className={logoMarquee}
        pauseOnHover
        speed={40}
        gradient={false}
      >
        {partnerLogos.map((ptnr, idx) => (
          <a
            key={`${ptnr.name}-${idx}`}
            href={ptnr.link}
            className={logoWrapper}
          >
            {ptnr.logo}
          </a>
        ))}
        {partnerLogos.map((ptnr, idx) => (
          <a
            key={`${ptnr.name}-${idx}`}
            href={ptnr.link}
            className={logoWrapper}
          >
            {ptnr.logo}
          </a>
        ))}
      </Marquee>
    </section>
  )
}
