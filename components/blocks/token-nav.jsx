import React, { useEffect, useState } from 'react'

import {
  sectionLabel,
  sectionIndicators,
  activeBullet,
  navPositionWrapper,
  rankNav,
  activeRank,
  mobileSectionNav
} from '../../styles/blocks/token-nav.module.scss'

export const TokenNav = ({
  sectionTitle,
  sectionInView,
  tokenRanks,
  currentRank,
  setCurrentRank,
}) => {

  // mobile breakpoint for JS
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true)
    }
  }, [])


  const handleTokenNav = (crement) => {
    setCurrentRank((curRnk) => curRnk + crement)
  };
  

  return (
    <>
      {!isMobile && (
        <>
          {sectionInView && (
            <div className={sectionLabel}>
              <span>{sectionTitle}</span>
            </div>
          )}
          <div className={navPositionWrapper}>
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
        </>
      )}
      <div className={sectionIndicators}>
        {isMobile ? (
          <div className={mobileSectionNav}>
            {currentRank > 0 && (
              <span onClick={() => handleTokenNav(-1)}>
                ← {tokenRanks[currentRank - 1].id}
              </span>
            )}
            {currentRank < tokenRanks.length - 1 && (
              <span onClick={() => handleTokenNav(1)}>
                {tokenRanks[currentRank + 1].id} →
              </span>
            )}
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  )
}
