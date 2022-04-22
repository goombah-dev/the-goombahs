import React, { useEffect, useState } from 'react'

import {
  sectionContainer,
  contentContainer,
  detailContainer,
  blurb,
  perks,
  perkList,
  perk,
  ctaBtn,
  imgContainer,
  imgMain,
  imgThumb,
  mobileRankHeader
} from '../../styles/blocks/token-rank.module.scss'

//import { baseUrlPng } from '../../utils/base-url'
import { TitleBlurb } from './title-blurb'



export const TokenRank = ({ rankData: rnk, sectionId }) => {
   const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
     if (window.innerWidth < 1024) {
       setIsMobile(true)
     }
   }, [])

  return (
    <section className={sectionContainer} id={sectionId}>
      <div className={contentContainer}>
        {isMobile && (
          <div className={mobileRankHeader}>
            <TitleBlurb title={rnk.name} />
          </div>
        )}
        <div className={detailContainer}>
          <h4>{rnk.name}</h4>

          <div className={perks}>
            <h6>Includes</h6>
            <ul className={perkList}>
              {rnk.perks.map((prk, idx) => {
                return (
                  <li key={idx} className={perk}>
                    <span />
                    {prk}
                  </li>
                )
              })}
            </ul>
          </div>
          {/* <button className={`${ctaBtn} btn btn__primary`}>
            Buy Now →
          </button> */}
        </div>
        <div className={imgContainer}>
          <img
            className={imgMain}
            src={`${rnk.imageUrl}`}
            alt={rnk.name}
          />
          {rnk.imgThumbs.map((thm) => {
            return (
              <img
                key={thm}
                className={imgThumb}
                // src={`${thm}`}
                src={`${thm.imageUrl}`}
                alt={rnk.id}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
