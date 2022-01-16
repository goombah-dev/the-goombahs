import React from 'react'

import { header, blurb as blurbStyle} from '../../styles/blocks/title-blurb.module.scss'

export const TitleBlurb = ({ title, blurb }) => {
  return (
    <div>
      <h4 className={header}>{title}</h4>
      <p className={blurbStyle}>{blurb}</p>
    </div>
  )
}
