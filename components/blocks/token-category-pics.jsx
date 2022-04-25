import React, { Fragment } from 'react'

import { TitleBlurb } from './title-blurb'

import { sectionContainer, cardContainer } from '../../styles/blocks/token-category.module.scss'
import { TokenCard } from './token-card-pics'

export const TokenCategory = ({ title, blurb, tokens, setRank }) => {
  return (
    <div className={sectionContainer}>
      <TitleBlurb title={title} blurb={blurb} />
      <div className={cardContainer} style={{ gridTemplateColumns: `repeat(${tokens.length}, 1fr)` }}>
        {tokens.map((tkn, idx) => {
          return (
            <Fragment key={tkn.id}>
              <TokenCard token={tkn} setRank={() => setRank(idx)}/>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
