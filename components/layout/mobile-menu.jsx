import React from 'react'

import {
  mobileMenu,
  links,
  link,
} from '../../styles/layout/mobile-menu.module.scss'

export const MobileMenu = ({ pageLinks }) => {
  return (
    <nav className={mobileMenu}>
      <ul className={links}>
        {pageLinks.map((lnk) => {
          return (
            <li key={lnk.name} className={link}>
              {lnk.name}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
