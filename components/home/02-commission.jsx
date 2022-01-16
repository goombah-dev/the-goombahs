import React from 'react'
import { TokenCategory } from '../blocks/token-section'

const sectionData = {
  title: `The Commission`,
  blurb: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
  tokens: [
    {
      id: `boss`,
      imageUrl: `boss_kopz21`,
      title: (
        <>
          <span>The</span>
          <span>Boss</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
    },
    {
      id: `underboss`,
      imageUrl: `underboss_zcobup`,
      title: (
        <>
          <span>The</span>
          <span>Underboss</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
    },
    {
      id: `consig`,
      imageUrl: `consig_ggxtd2`,
      title: (
        <>
          <span>The</span>
          <span>Consiglieri</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
    },
    {
      id: `shylock`,
      imageUrl: `shylock_fozkvx`,
      title: (
        <>
          <span>The</span>
          <span>Shylock</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
    },
    {
      id: `capo`,
      imageUrl: `capo_zmdmyn`,
      title: (
        <>
          <span>The</span>
          <span>Capo</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
    },
  ],
}

export const Commission = () => {
  return <div>
    <TokenCategory
      title={sectionData.title}
      blurb={sectionData.blurb}
      tokens={sectionData.tokens}
    />
  </div>
}
