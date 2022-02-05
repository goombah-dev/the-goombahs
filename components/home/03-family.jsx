import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { TokenCategory } from '../blocks/token-category'
import { TokenRank } from '../blocks/token-rank'
import { TokenNav } from '../blocks/token-nav'

import { family } from '../../styles/home/family.module.scss';

const sectionData = {
  title: `The Family`,
  blurb: (
    <>
      <span>
        Each of the five families - Mongelli, Crypanno,
        Russo, DePietro, and Gonzetti, are organized into a
        hierarchy. The Boss reigns supreme, the Underboss
        carrying out his will, while the Consiglieris
        advise. Capos govern over their assigned turf, and
        employ soldiers to enforce their authority.
      </span>
      <span>
        The rank of each token corresponds to its rarity, of
        course, but the highest rank tokens are also
        rendered in higher fidelity.
      </span>
    </>
  ),
  tokens: [
    {
      id: `boss`,
      imageUrl: `boss-main_hojsjn`,
      name: `The Boss`,
      title: (
        <>
          <span>The</span>
          <span>Boss</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
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
      id: `underboss`,
      imageUrl: `underboss-main_kxq7rg`,
      name: `The Underboss`,
      title: (
        <>
          <span>The</span>
          <span>Underboss</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
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
      id: `consiglieri`,
      imageUrl: `consig-main_fltyei`,
      name: `The Consiglieri`,
      title: (
        <>
          <span>The</span>
          <span>Consiglieri</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
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
      path: `/`,
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
      path: `/`,
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

export const Family = () => {
  const { tokens: tokenRanks, title } = sectionData

  const [currentRank, setCurrentRank] = useState(0)

  const { ref: familyRef, inView: famInView } =
    useInView({ threshold: 0.4 })

  return (
    <div
      className={family}
      id='family'
      style={{ position: 'relative' }}
      ref={familyRef}
    >
      <TokenCategory
        title={sectionData.title}
        blurb={sectionData.blurb}
        tokens={sectionData.tokens}
      />
      <TokenRank rankData={tokenRanks[currentRank]} />
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
