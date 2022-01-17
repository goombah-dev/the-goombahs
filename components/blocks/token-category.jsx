import React, { Fragment } from 'react'

import { TitleBlurb } from './title-blurb'

import { sectionContainer, cardContainer } from '../../styles/blocks/token-category.module.scss'
import { TokenCard } from './token-card'

export const TokenCategory = ({ title, blurb, tokens }) => {
  return (
    <div className={sectionContainer}>
      <TitleBlurb title={title} blurb={blurb} />
      <div className={cardContainer}>
        {tokens.map(tkn => {
          return (
            <Fragment key={tkn.id}>
              <TokenCard token={tkn} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
