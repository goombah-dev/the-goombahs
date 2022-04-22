import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { TokenCategory } from '../blocks/token-category'
import { TokenRank } from '../blocks/token-rank'
import { TokenNav } from '../blocks/token-nav'

import { crew } from '../../styles/home/crew.module.scss';

const sectionData = {
  title: `The Goombahverse`,
  blurb: (
    <>
      <span>
        
      </span>
     
    </>
  ),
  tokens: [
    {
      id: `casino`,
      imageUrl: `capo-3_zpnmti`,
      name: `The Casino`,
      title: (
        <>
          <span>The</span>
          <span>Casino</span>
        </>
      ),
      blurb: `Leads the soldiers and associates.`,
      path: `/#crew-detail`,
      about: `Capos are in charge of their own street crews. They watch over a certain turf. Think of them as captains who command crews of soldiers.`,
      perks: [
        `Access to the Metaverse`,
        `Airdrops and Early Access to future collections`,
        `Access to exclusive merch and events`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
    {
      id: `gallery`,
      imageUrl: `shark_lbyoyw`,
      name: `The Loan Gallery`,
      title: (
        <>
          <span>The</span>
          <span>Gallery</span>
        </>
      ),
      blurb: `Need money quickly? He’s your guy.`,
      path: `/#crew-detail`,
      about: `Need cash quick? See a loan shark! They can help you with all of your instant-cash needs. That being said, the interest will be pretty high so don't take more than you can afford to pay.`,
      perks: [
        `Access to the Metaverse`,
        `Airdrops and Early Access to future collections`,
        `Access to exclusive merch and events`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
    {
      id: `racetrack`,
      imageUrl: `soldato_wfxhft`,
      name: `The Goombah Racetrack`,
      title: (
        <>
          <span>The</span>
          <span>Racetrack</span>
        </>
      ),
      blurb: `The made henchman.`,
      path: `/#crew-detail`,
      about: `Soldiers are made men who carry out the day-to-day activities. They follow orders given to them by the capos.`,
      perks: [
        `Access to the Metaverse`,
        `Airdrops and Early Access to future collections`,
        `Access to exclusive merch and events`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
    {
      id: `club`,
      imageUrl: `../../public/confic/images/flyer1.jpeg`,
      name: `Club Goombah`,
      title: (
        <>
          <span>Club</span>
          <span>Goombah</span>
        </>
      ),
      blurb: `Not made-men, but associates.`,
      path: `/#crew-detail`,
      about: `Associates aren't technically official members of the family, however they are well respected and work closely with the family.`,
      perks: [
        `Access to the Metaverse`,
        `Airdrops and Early Access to future collections`,
        `Access to exclusive merch and events`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
    {
      id: `highroller`,
      imageUrl: `assoc-3_rscxkm`,
      name: `High Roller Room`,
      title: (
        <>
          <span>High</span>
          <span>Roller Room</span>
        </>
      ),
      blurb: `Not made-men, but associates.`,
      path: `/#crew-detail`,
      about: `Associates aren't technically official members of the family, however they are well respected and work closely with the family.`,
      perks: [
        `Access to the Metaverse`,
        `Airdrops and Early Access to future collections`,
        `Access to exclusive merch and events`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
  ],
}

export const Crew = () => {
  const { tokens: tokenRanks, title } = sectionData

  const [currentRank, setCurrentRank] = useState(0)

  const { ref: muscleRef, inView: muscleInView } =
    useInView({ threshold: 0.4 })

  return (
    <div
      className={crew}
      style={{ position: 'relative' }}
      ref={muscleRef}
      id='tokens-2'
    >
      <TokenCategory
        title={sectionData.title}
        blurb={sectionData.blurb}
        tokens={sectionData.tokens}
        setRank={setCurrentRank}
      />
      <TokenRank
        rankData={tokenRanks[currentRank]}
        sectionId={'crew-detail'}
      />
      <TokenNav
        sectionTitle={title}
        sectionInView={muscleInView}
        tokenRanks={tokenRanks}
        currentRank={currentRank}
        setCurrentRank={setCurrentRank}
      />
    </div>
  )
}
