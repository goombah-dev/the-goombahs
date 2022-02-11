import React from 'react';

import { mintContainer, header, blurb } from '../styles/pages/mint.module.scss';
;


const mint = () => {
  return (
    <div className={mintContainer}>
      <h1 className={header}>Time to Join the Family</h1>
      <p className={blurb}>
        Minting is available, get your hands on a Goombah
        and enable the first Teflon Don and beyond, costs a
        traditional, equally fair, no matter the rank, 0.08
        ETH. There are no price tiers or gauging regardless
        of inflation by the real crooks membership osts the
        same for everyone. Minting is available, get your
        hands on a Goombah and enables the first of many
        instant rewards. The Infinite Goombah Giveaway
        Campaign. Now its time to meet The Family.
        <br />
        <br />
        Please note: Once you make the purchase, you cannot
        undo this action.
      </p>
    </div>
  )
};

export default mint;
