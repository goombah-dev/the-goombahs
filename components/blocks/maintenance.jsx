import React from 'react'

import { FullLockLogo } from '../svg/FullLockLogo'

import { maintenanceContainer } from '../../styles/blocks/maintenance.module.scss';



export const Maintenance = () => {
  return (
    <div className={maintenanceContainer}>
      <FullLockLogo />
      <h2>This page is under maintenance.</h2>
      <p>Be back soon!</p>
    </div>
  )
}
