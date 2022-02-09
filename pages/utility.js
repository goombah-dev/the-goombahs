import React from 'react'
import { TitleBlurb } from '../components/blocks/title-blurb'

import {
  policyContainer,
  policyList,
  policyBlock,
  header,
  info,
  subTextContainer,
  subTextItem,
} from '../styles/pages/policy.module.scss'

const terms = {
  title: `Utility`,
  blocks: [
    {
      title: `Membership Perks`,
      text: `It’s more than just a collection of NFTs — it’s becoming a member of the family.`,
      subText: [
        {
          title: ``,
          text: `1. Limited edition merchandise`,
        },
        {
          title: ``,
          text: `2. Limited edition metaverse wearables`,
        },
        {
          title: ``,
          text: `3. Access to our Metaverse & its live events`,
        },
        {
          title: ``,
          text: `4. Access to our IRL events`,
        },
        {
          title: ``,
          text: `5. First dibs  to our future NFT collection drops , accessories and surprise weapon airdrops`,
        },
        {
          title: ``,
          text: `6. Ability to use our Goombahs for own personal promotions , branding and other features`,
        },
        {
          title: ``,
          text: `7. Access to our first scavenger hunt which could be in Meta or IRL`,
        },
        {
          title: ``,
          text: `8. First invites to our DAO for community governance , charity , and live / meta event choices`,
        },
        {
          title: ``,
          text: `9. Ability to play our first blockchain game which involves staking and minigames!`,
        },
      ],
    },
    // {
    //   title: `NFT Membership Passes`,
    //   text: `The name and Intellectual Property involved in The Goombahs NFT Project (“The Goombahs ©”) is owned by the team here at FAL Consulting, LLC. All rights that are not specifically granted to the users and owners of Goombahs below are reserved by the team or potential future DAO. This includes but is not limited to the intellectual property rights surrounding the images, names, logos, 3D layer files,
    //   trademarks, the website, the ability to mint 3D or voxel or other versions of Goombahs, the look and feel of the user interface, the smart contract code, or anything else not specifically granted by any following licenses.
    //   `,
    // },
  ],
}

const Utility = () => {
  return (
    <div className={policyContainer}>
      <TitleBlurb title={terms.title} />
      <ul className={policyList}>
        {terms.blocks.map((blk) => {
          return (
            <div key={blk.title} className={policyBlock}>
              <h4 className={header}>{blk.title}</h4>
              <p className={info}>{blk.text}</p>
              {blk.subText && (
                <ul className={subTextContainer}>
                  {blk.subText.map((st) => (
                    <li
                      key={st.text}
                      className={subTextItem}
                    >
                      <h6>{st.title}</h6>
                      <p>{st.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Utility
