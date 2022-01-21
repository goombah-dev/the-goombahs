import React from 'react'

import {
  sectionLabel,
  indicatorBullets,
  activeBullet,
  navPosContainer,
  rankNav,
  activeRank,
} from '../../styles/blocks/token-nav.module.scss'

export const TokenNav = ({ sectionTitle, sectionInView, tokenRanks, currentRank, setCurrentRank }) => {
  return (
    <>
      {sectionInView && (
        <div className={sectionLabel}>
          <span>{sectionTitle}</span>
        </div>
      )}
      <div className={navPosContainer}>
        <nav className={rankNav}>
          {tokenRanks.map((tkn, idx) => {
            const isActive = idx === currentRank

            return (
              <span
                key={tkn.id}
                className={isActive ? activeRank : ''}
                onClick={() => setCurrentRank(idx)}
              >
                {tkn.id}
              </span>
            )
          })}
        </nav>
      </div>
      <div className={indicatorBullets}>
        {tokenRanks.map((tkn, idx) => {
          const isActive = idx === currentRank

          return (
            <span
              key={tkn.id}
              className={isActive ? activeBullet : ''}
              onClick={() => setCurrentRank(idx)}
            />
          )
        })}
      </div>
    </>
  )
}
