import React from 'react'

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
} from '../../styles/blocks/token-rank.module.scss'

import { baseUrlPng } from '../../utils/base-url'



export const TokenRank = ({ rankData: rnk }) => {
  return (
    <section className={sectionContainer}>
      <div className={contentContainer}>
        <div className={detailContainer}>
          <h4>{rnk.name}</h4>
          <div className={blurb}>
            <h6>About</h6>
            <p>{rnk.about}</p>
          </div>
          <div className={perks}>
            <h6>Membership Perks</h6>
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
          <button className={`${ctaBtn} btn__primary`}>
            Buy Now →
          </button>
        </div>
        <div className={imgContainer}>
          <img
            className={imgMain}
            src={baseUrlPng(rnk.imageUrl)}
            alt={rnk.name}
          />
          {rnk.imgThumbs.map((thm) => {
            return (
              <img
                key={thm}
                className={imgThumb}
                // src={baseUrlPng(`${rnk.id}/${thm}`)}
                src={baseUrlPng(`boss/${thm}`)}
                alt={rnk.id}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
