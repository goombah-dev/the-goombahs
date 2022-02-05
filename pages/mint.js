import React from 'react';

import { mintContainer, header, blurb } from '../styles/pages/mint.module.scss';
;


const mint = () => {
  return (
    <div className={mintContainer}>
      <h1 className={header}>Time to Join the Family</h1>
      <p className={blurb}>
        Current Phase: Whitelist Only, Next Phase: Public
        Sale. Please do not try to mint unless your address
        is qualified for the current phase. You can only
        mint 1 Goombah at a time, but you can mint up to 5
        total per whitelisted wallet. Please do not try and
        mint more than 5. Make sure you are connected to the
        right network (Ethereum Mainnet) and the correct address.
        <br />
        <br />
        Please note: Once you make the purchase, you cannot
        undo this action.
      </p>
    </div>
  )
};

export default mint;
