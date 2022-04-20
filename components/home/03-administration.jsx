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
