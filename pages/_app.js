import React from 'react'
// import store from './redux/store'
import store from '../redux/store'
import { Provider } from 'react-redux'

import { TopNav } from '../components/layout/top-nav'
import { Footer } from '../components/layout/footer'

import {
  layout,
} from '../styles/layout/layout.module.scss'
import { LayoutBG } from '../components/layout/layout-bg'

import '../styles/globals.scss'
import { Partners } from '../components/layout/partners'
import { FullLockLogo } from '../components/svg/FullLockLogo'
import { Maintenance } from '../components/blocks/maintenance'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className={layout}>
        {/* <TopNav />
        <Component {...pageProps} />
        <LayoutBG numImgs={4} />
        <Partners />
        <Footer /> */}
        <Maintenance />
      </div>
    </Provider>
  )
}

export default MyApp
