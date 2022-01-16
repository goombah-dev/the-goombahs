import React from 'react'

import { baseUrlPng } from '../../utils/base-url'

import { layoutBGContainer, artWindow, pullLeft } from '../../styles/layout/layout.module.scss'

export const LayoutBG = ({ numImgs = 2 }) => {
  const tRbL = 'TR-BL_qgchck'
  const tLbR = 'TL-BR_desvgl'

  return (
    <div className={layoutBGContainer}>
      {
        Array.from({ length: numImgs }).map((imgs, idx) => {
          const directionUrl = idx % 2 === 0 ? tRbL : tLbR
          const isTlBr = !(idx % 2 === 0) ? pullLeft : ''
          

          return (
            <div className={`${artWindow} ${isTlBr}`}>
              <img
                src={baseUrlPng(directionUrl)}
                alt='goombahs background collage art'
              />
            </div>
          )
        })
      }
    </div>
  )
}
