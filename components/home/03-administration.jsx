import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { TokenCategory } from '../blocks/token-category'
import { TokenRank } from '../blocks/token-rank'
import { TokenNav } from '../blocks/token-nav'

import { admin } from '../../styles/home/administration.module.scss';

const sectionData = {
  title: `Utility`,
  blurb: (
    <>
      <span>
        Membership Perks
        It’s more than just a collection of NFTs — it’s becoming a member of the family.
      </span>
      <span>
        1. Access to Metaverse exclusive events - Scavenger hunts, shows, poker, NFT social events, and more!
2. Ability to host your own events in our metaverse
3. Education Program - Introduction to Cryptocurriences + Blockchain
4. Access to our exclusive merchandise store
5. First dibs to our future NFT collection drops , accessories and surprise weapon airdrops
6. Ability to help delegate the future of the collection
7. Another big announcement coming soon!
      </span>
    </>
  ),
  

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
