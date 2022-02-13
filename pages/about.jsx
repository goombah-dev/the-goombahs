import Link from 'next/link'
import React from 'react'
import { TitleBlurb } from '../components/blocks/title-blurb'

import { aboutContainer } from '../styles/pages/about.module.scss'

const pageContent = {
  title: 'About The Goombahs',
  blurb: (
    <>
      <span>
        An exclusive NFT-METAVERSE collection where each
        token doubles as The Goombaverse Utility Pass.
        Instantly upon mint holders are forever granted
        entry into all IRL and metaverse events. Anything
        The Goombahs or their partners are apart of, you are
        now apart of.
      </span>
      <span>
        A Goombah is a unique 3D evolving Goodfella-avatar
        that garners its rarity based off rank within the
        organization. As our family continues to grow both
        in size and stature so will the Goombaverse. Our
        team is passionately dedicated on instilling our own
        “Omertà”. This carefully crafted ethos is centered
        around what will be consistently referred to as the
        three E&apos;s:
        <br />
        <br />
        Education. Experience. Engagement.
        <br />
        <br />
      </span>
      <span>
        The Goombah Social Club provides a systematically
        superlative platform for execution. Revolving around
        the three E&apos;s the social club will initially
        offer a concert venue, horse track, Casino & MORE!
        This has all been erected pre-launch and will
        continue to evolve. Possessing entry to The Families
        central headquarters warrants a constant engaging
        experience inside this new worlds top of the line
        virtual environment. Complete with tons of user
        engagement persistently upgraded daily! The social
        club is just the beginning.
      </span>
    </>
  ),
}

const About = () => {
  const pc = pageContent

  return (
    <section className={aboutContainer}>
      <TitleBlurb title={pc.title} blurb={pc.blurb} />
      <Link href='/mint'>
        <a className='btn btn__primary'>Mint Yours Now →</a>
      </Link>
    </section>
  )
}

export default About
