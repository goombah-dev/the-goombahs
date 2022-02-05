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
      imageUrl: `capo-main_sg1dys`,
      name: `The Capo`,
      title: (
        <>
          <span>The</span>
          <span>Capo</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/#fam-detail`,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
      perks: [
        `Lorem ipsum dolor sit amet`,
        `consectetur adipiscing`,
        `Cras ut vehicula nibh`,
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
      imageUrl: `shylock-main_tfoozy`,
      name: `The Loan Shark`,
      title: (
        <>
          <span>The</span>
          <span>Loan Shark</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/#outsiders-detail`,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
      perks: [
        `Lorem ipsum dolor sit amet`,
        `consectetur adipiscing`,
        `Cras ut vehicula nibh`,
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
      imageUrl: `ex-navy_c7ylue`,
      name: `The Soldier`,
      title: (
        <>
          <span>The</span>
          <span>Soldier</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/#fam-detail`,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
      perks: [
        `Lorem ipsum dolor sit amet`,
        `consectetur adipiscing`,
        `Cras ut vehicula nibh`,
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
      imageUrl: `associate_sokm2e`,
      name: `The Associate`,
      title: (
        <>
          <span>The</span>
          <span>Associate</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/#outsiders-detail`,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
      perks: [
        `Lorem ipsum dolor sit amet`,
        `consectetur adipiscing`,
        `Cras ut vehicula nibh`,
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
        sectionId={'outsiders-detail'}
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
