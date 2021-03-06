import React from 'react'

import {
  contactSection,
  contactBlock,
  tagLines,
  primary,
  secondary,
  divider,
  contactForm,
  submitBtn,
} from '../../styles/home/contact.module.scss'

export const Contact = () => {
  return (
    <section className={contactSection}>
      <div className={contactBlock}>
        <div className={tagLines}>
          <h4 className={primary}>
            <span>The</span>
            <span>Family</span>
            <span>Awaits.</span>
          </h4>
          <p className={secondary}>
            <span>Join Us</span>
            <span>In The</span>
            <span>Metaverse.</span>
          </p>
        </div>
        <div className={contactForm}>
          
          
          

        <form action = "http://eepurl.com/hIUcKr" >
          <button
          className={`btn btn__primary ${submitBtn}`}
            type='submit'
          >
            Subscribe to Newsletter
          </button>
          </form>
         
        </div>
      </div>
    </section>
  )
}
