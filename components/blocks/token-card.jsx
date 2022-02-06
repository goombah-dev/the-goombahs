import React from 'react'
import Link from 'next/link'

import { baseUrlPng } from '../../utils/base-url'

import {
  card,
  upper,
  lower,
  tokenImg,
  tokenName,
  cardBlurb,
  cardBtn
} from '../../styles/blocks/token-card.module.scss'

export const TokenCard = ({ token: tkn, setRank }) => {
  
  return (
    <div className={card}>
      <div className={upper}>
          <img
            className={tokenImg}
            src={baseUrlPng(`tokens/${tkn.imageUrl}`)}
            alt={tkn.id}
          />
        <h5 className={tokenName}>{tkn.title}</h5>
      </div>
      <div className={lower}>
        <p className={cardBlurb}>{tkn.blurb}</p>
        <Link href={tkn.path}>
          <a className={`${cardBtn} btn__primary`} onClick={setRank}>
            More Info →
          </a>
        </Link>
      </div>
    </div>
  )
}
