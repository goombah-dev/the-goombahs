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
    link: 'https://www.cryptofal.com/',
    name: 'Fal',
    logo: <FalLogo />,
  },
  {
    link: 'https://spine3d.com/ ',
    name: 'Spine3d',
    logo: <SpineLogo />,
  },
  // {
  //   link: 'https://daydreamingagency.com/ ',
  //   name: 'Dayreaming',
  //   logo: <DaydreamingLogo />,
  // },
  // {
  //  link: 'https://coinbound.io/',
  //  name: 'Coinbound',
  //  logo: <CoinboundLogo />,
 // },
]

export const Partners = () => {
  return (
    <section className={partners}>
      <Marquee
        className={logoMarquee}
        pauseOnHover
        speed={40}
        gradient={false}
        behavior={alternate}
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
