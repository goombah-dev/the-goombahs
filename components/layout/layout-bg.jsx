import React from 'react'

import { baseUrlPng } from '../../utils/base-url'

import {
  layoutBGContainer,
  artWindow,
  pullLeft,
} from '../../styles/layout/layout.module.scss'

export const LayoutBG = ({ numImgs = 2 }) => {
  const tRbL = 'TL-BR_zqwq7p'
  const tLbR = 'TR-BL_icjpxa'

  return (
    <div className={layoutBGContainer}>
      {/* {
        Array.from({ length: 3 }).map((imgs, idx) => {
          const directionUrl = (idx % 2 === 0) ? tLbR : tRbL
          const isTlBr = !(idx % 2 === 0) ? pullLeft : ''
          

          return (
            <div key={idx} className={`${artWindow} ${isTlBr}`}>
              <img
                src={baseUrlPng(directionUrl)}
                alt='goombahs background collage art'
              />
            </div>
          )
        })
      } */}
      <div className={`${artWindow}`}>
        <img
          loading='lazy'
          src={baseUrlPng(tLbR)}
          alt='goombahs background collage art'
        />
      </div>
      <div className={`${artWindow}`}>
        <img
          loading='lazy'
          src={baseUrlPng(tRbL)}
          alt='goombahs background collage art'
        />
      </div>
    </div>
  )
}
