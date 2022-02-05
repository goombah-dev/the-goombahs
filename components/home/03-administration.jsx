import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { TokenCategory } from '../blocks/token-category'
import { TokenRank } from '../blocks/token-rank'
import { TokenNav } from '../blocks/token-nav'

import { admin } from '../../styles/home/administration.module.scss';

const sectionData = {
  title: `The Administration`,
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
      id: `consigliere`,
      imageUrl: `consig-main_fltyei`,
      name: `The Consiglieri`,
      title: (
        <>
          <span>The</span>
          <span>Consigliere</span>
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
