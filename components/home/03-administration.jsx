import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { TokenCategory } from '../blocks/token-category'
import { TokenRank } from '../blocks/token-rank'
import { TokenNav } from '../blocks/token-nav'

import { admin } from '../../styles/home/administration.module.scss';

const sectionData = {
  title: `The Commission`,
  blurb: (
    <>
      <span>
        Each of the five families - Mongelli, Crypanno,
        Russo, DePietro, and Gonzetti - are organized into a
        hierarchy. The Boss reigns supreme, the Underboss
        carries out his will, and the Consigliere advises.
        Capos govern over their assigned turf, and employ
        soldiers to enforce their authority.
        {/* Each of the five families - Mongelli, Crypanno,
        Russo, DePietro, and Gonzetti - are organized into a
        hierarchy. The Boss reigns supreme, the Underboss
        carries out his will, while the Consigliere advises.
        Capos govern over their assigned turf, and employ
        soldiers to enforce their authority. */}
      </span>
      <span>
        The rank of each member corresponds to its rarity,
        of course, but the highest rank members are also
        rendered in higher fidelity.
      </span>
    </>
  ),
  tokens: [
    {
      id: `boss`,
      imageUrl: `boss-2--1_a3sosa`,
      name: `The Boss`,
      title: (
        <>
          <span>The</span>
          <span>Boss</span>
        </>
      ),
      blurb: `The Leader. The Don. The Capo dei capi.`,
      path: `/#fam-detail`,
      about: `The Leader. The Don. The Capo dei capi. The boss is the head of the family and has absolute rule over the activities that the family is involved in. They are the highest ranking member of the family.`,
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
      id: `underboss`,
      imageUrl: `uboss_qrb8bo`,
      name: `The Underboss`,
      title: (
        <>
          <span>The</span>
          <span>Underboss</span>
        </>
      ),
      blurb: `Represents the Boss and runs the day-to-day activities.`,
      path: `/#fam-detail`,
      about: `The underboss oversees operations and directly interacts with the capos. Right below the boss, they ensure the money keeps making its way up the ranks.`,
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
      id: `consigliere`,
      imageUrl: `consig_upeopg`,
      name: `The Consigliere`,
      title: (
        <>
          <span>The</span>
          <span>Consigliere</span>
        </>
      ),
      blurb: `The top advisor in the family.`,
      path: `/#fam-detail`,
      about: `As right-hand man to the Boss, he acts as a confidant and is his closest advisor. Don't underestimate! Working directly with the head-honcho, the consigliere is one of the most powerful members of the family.`,
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

export const Administration = () => {
  const { tokens: tokenRanks, title } = sectionData

  const [currentRank, setCurrentRank] = useState(0)

  const { ref: familyRef, inView: famInView } =
    useInView({ threshold: 0.4 })

  return (
    <div
      className={admin}
      id='tokens-1'
      style={{ position: 'relative' }}
      ref={familyRef}
    >
      <TokenCategory
        title={sectionData.title}
        blurb={sectionData.blurb}
        tokens={sectionData.tokens}
        setRank={setCurrentRank}
      />
      <TokenRank rankData={tokenRanks[currentRank]} sectionId={'fam-detail'}/>
      <TokenNav
        sectionTitle={title}
        sectionInView={famInView}
        tokenRanks={tokenRanks}
        currentRank={currentRank}
        setCurrentRank={setCurrentRank}
      />
    </div>
  )
}
