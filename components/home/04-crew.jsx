import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { TokenCategory } from '../blocks/token-category-pics'
import { TokenRank } from '../blocks/token-pics'
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
      imageUrl: `/config/images/Casino.png`,
      name: `The Casino`,
      title: (
        <>
          <span>The</span>
          <span>Casino</span>
        </>
      ),
      blurb: `Risk it for the biscuit.`,
      path: `/#crew-detail`,
      about: `Capos are in charge of their own street crews. They watch over a certain turf. Think of them as captains who command crews of soldiers.`,
      perks: [
        `Card Games`,
        `Table Games`,
      ],
      buyLink: '/',
      imgThumbs: [
        `/config/images/Casino.png`,
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
      blurb: `Check out community art/NFTs`,
      path: `/#crew-detail`,
      about: `Need cash quick? See a loan shark! They can help you with all of your instant-cash needs. That being said, the interest will be pretty high so don't take more than you can afford to pay.`,
      perks: [
        `Check out artwork created or owned by other memebers of The Goombahverse`,
        `Show off your own artwork or NFT`,
      ],
      buyLink: '/',
      imgThumbs: [
        `/config/images/`,
      ],
    },
    {
      id: `racetrack`,
      imageUrl: `/config/images/Race\ Track\ .png`,
      name: `The Goombah Racetrack`,
      title: (
        <>
          <span>The</span>
          <span>Racetrack</span>
        </>
      ),
      blurb: `Dem Horses`,
      path: `/#crew-detail`,
      about: `Soldiers are made men who carry out the day-to-day activities. They follow orders given to them by the capos.`,
      perks: [
        `Hang out at the race track!`,
      ],
      buyLink: '/',
      imgThumbs: [
        `/config/images/Race\ Track\ .png`,
      ],
    },
    {
      id: `club`,
      imageUrl: `/config/images/flyer1.jpeg`,
      name: `Club Goombah`,
      title: (
        <>
          <span>Club</span>
          <span>Goombah</span>
        </>
      ),
      blurb: `Come clubbing with us`,
      path: `/#crew-detail`,
      about: `Associates aren't technically official members of the family, however they are well respected and work closely with the family.`,
      perks: [
        `Some events will have live music/performances`,
      ],
      buyLink: '/',
      imgThumbs: `/config/images/ClubGoombah.png`,
      
    },
    {
      id: `highroller`,
      imageUrl: `/config/images/HighRollerClub.png`,
      name: `High Roller Room`,
      title: (
        <>
          <span>High</span>
          <span>Roller Room</span>
        </>
      ),
      blurb: `$$$$$$$$$$$$$$`,
      path: `/#crew-detail`,
      about: `Associates aren't technically official members of the family, however they are well respected and work closely with the family.`,
      perks: [
        `Private tables`,
      ],
      buyLink: '/',
      imgThumbs: [
        `/config/images/HighRollerClub.png`,
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
