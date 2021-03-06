import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { TokenCategory } from '../blocks/token-category-pics'
import { TokenRank } from '../blocks/token-pics'
import { TokenNav } from '../blocks/token-nav'

import { admin } from '../../styles/home/administration.module.scss';
import { submitBtn } from '../../styles/home/contact.module.scss'
const sectionData = {
  title: `Utility & Breakdown`,
  blurb: (
    <>
      <span>
       It’s more than just a collection of NFTs — it’s becoming a member of the family. Membership perks include:
  
      </span>
      <ol type="I">
        <li>1. Access to Metaverse exclusive events - Scavenger hunts, shows, poker, NFT social events, and more!</li>
        <li>2. Ability to host your own events in our metaverse</li>
        <li>3. Education Program - Introduction to Cryptocurriences + Blockchain</li>
        <li>4. Access to our exclusive merchandise store</li>
        <li>5. First dibs on our future NFT collection drops , accessories and surprise weapon airdrops
</li>
        <li>6. Ability to help delegate the future of the collection</li>
        <li>7. Entry into every recurring Prize Pool Raffle</li>
      </ol>
        <p sytle="font-size:25px"><b><u>The Goombahs Prize Pool Raffle</u></b></p>
      
    
      <span>Upon obtaining and verifying one or more Gen-1 Goombah NFT, the holder unlocks full access to The Goombahverse. Upon registration and verification of your wallet/NFT(s), each Goombah held will grant one entry into every recurring Prize Pool Raffle. A raffle will be held after approximately every 100 Goombah NFT mints for prizes up to $10,000 USD.
      </span>
     
      
   <form action = "/Goombahs_Whitepaper.pdf" >
          <button
          className={`btn btn__primary ${submitBtn}`}
            type='submit'
          >
            View Project Whitepaper
          </button>
          </form>
          <br /><br />
    
  
    </>
  ),
  tokens: [
    {
      id: `Special`,
      imageUrl: `/config/images/boss1.png`,
      name: `Special Editions`,
      title: (
        <>
          <span>Special</span>
          <span>Editions</span>
        </>
      ),
      blurb: `293 total`,
      path: `/#fam-detail`,
     // about: `The Leader. The Don. The Capo dei capi. The boss is the head of the family and has absolute rule over the activities that the family is involved in. They are the highest ranking member of the family.`,
      perks: [
        `Boss - 8`,
        `Consigliere - 10`,
        `Underboss - 25`,
        `Key Holder - 250`,
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
      id: `Rare`,
      imageUrl: `/config/images/Cappo1.png`,
      name: `Rare Editions`,
      title: (
        <>
          <span>Rare</span>
          <span>Editions</span>
        </>
      ),
      blurb: `602 total`,
      path: `/#fam-detail`,
     // about: `The underboss oversees operations and directly interacts with the capos. Right below the boss, they ensure the money keeps making its way up the ranks.`,
      perks: [
        `Loan Shark - 100`,
        `Cappo - 502`,
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
      id: `Common`,
      imageUrl: `/config/images/Associate1.png`,
      name: `Common Editions`,
      title: (
        <>
          <span>Common</span>
          <span>Editions</span>
        </>
      ),
      blurb: `6,605`,
      path: `/#fam-detail`,
     // about: `As right-hand man to the Boss, he acts as a confidant and is his closest advisor. Don't underestimate! Working directly with the head-honcho, the consigliere is one of the most powerful members of the family.`,
      perks: [
        `Associate - 1,939`,
        `Soldier - 4,666`,
     
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
      id='utility'
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
