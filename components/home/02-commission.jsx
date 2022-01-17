import React, { Fragment } from 'react'
import { TokenCategory } from '../blocks/token-category'
import { TokenRank } from '../blocks/token-rank';

const sectionData = {
  title: `The Commission`,
  blurb: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
  tokens: [
    {
      id: `boss`,
      imageUrl: `boss-main_hojsjn`,
      name: `The Boss`,
      title: (
        <>
          <span>The</span>
          <span>Boss</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
      perks: [
        `Lorem ipsum dolor sit amet`,
        `consectetur adipiscing`,
        `Cras ut vehicula nibh`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
    {
      id: `underboss`,
      imageUrl: `underboss-main_kxq7rg`,
      name: `The Underboss`,
      title: (
        <>
          <span>The</span>
          <span>Underboss</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
      perks: [
        `Lorem ipsum dolor sit amet`,
        `consectetur adipiscing`,
        `Cras ut vehicula nibh`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
    {
      id: `consig`,
      imageUrl: `consig-main_fltyei`,
      name: `The Consiglieri`,
      title: (
        <>
          <span>The</span>
          <span>Consiglieri</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
      perks: [
        `Lorem ipsum dolor sit amet`,
        `consectetur adipiscing`,
        `Cras ut vehicula nibh`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
    {
      id: `shylock`,
      imageUrl: `shylock-main_tfoozy`,
      name: `The Shylock`,
      title: (
        <>
          <span>The</span>
          <span>Shylock</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
      perks: [
        `Lorem ipsum dolor sit amet`,
        `consectetur adipiscing`,
        `Cras ut vehicula nibh`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
    {
      id: `capo`,
      imageUrl: `capo-main_sg1dys`,
      name: `The Capo`,
      title: (
        <>
          <span>The</span>
          <span>Capo</span>
        </>
      ),
      blurb: `Lorem ipsum dolor sit amet, adipiscing vel posuere.`,
      path: `/`,
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vehicula nibh. Vestibulum vestibulum sem sed metus pharetra, consectetur adipiscing vel posuere.`,
      perks: [
        `Lorem ipsum dolor sit amet`,
        `consectetur adipiscing`,
        `Cras ut vehicula nibh`,
      ],
      buyLink: '/',
      imgThumbs: [
        `boss-2_bwvxyp`,
        `boss-3_ykzeeo`,
        `boss-4_h0rsza`,
        `boss-5_tsoawa`,
      ],
    },
  ],
}

export const Commission = () => {
  const { tokens: tokenRanks } = sectionData;

  return (
    <div>
      <TokenCategory
        title={sectionData.title}
        blurb={sectionData.blurb}
        tokens={sectionData.tokens}
      />
      {
        tokenRanks.map(rnk => {
          return (
            <Fragment key={rnk.id}>
              <TokenRank rankData={rnk} />
            </Fragment>
          )
        })
      }
    </div>
  )
}
