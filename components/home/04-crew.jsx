import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { TokenCategory } from '../blocks/token-category'
import { TokenRank } from '../blocks/token-rank'
import { TokenNav } from '../blocks/token-nav'

import { crew } from '../../styles/home/crew.module.scss';

const sectionData = {
  title: `The Crew`,
  blurb: (
    <>
      <span>
        While the family may have control of the
        organization, it does have need of functionaries to
        handle the ground work, as well as its friends in
        high places to keep the business running smoothly.
      </span>
      <span>
        Like the family, each of the outsider tokens is
        ranked in order of rarity. Outsider tokens are also
        not necessarily uniquely designed as they are in the
        family.
      </span>
    </>
  ),
  tokens: [
    {
      id: `capo`,
      imageUrl: `capo-3_zpnmti`,
      name: `The Capo`,
      title: (
        <>
          <span>The</span>
          <span>Capo</span>
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
      id: `loanshark`,
      imageUrl: `shark_lbyoyw`,
      name: `The Loan Shark`,
      title: (
        <>
          <span>The</span>
          <span>Loan Shark</span>
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
      id: `soldier`,
      imageUrl: `soldato_vnhboj`,
      name: `The Soldier`,
      title: (
        <>
          <span>The</span>
          <span>Soldier</span>
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
      id: `associate`,
      imageUrl: `assoc_t5h0tx`,
      name: `The Associate`,
      title: (
        <>
          <span>The</span>
          <span>Associate</span>
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
