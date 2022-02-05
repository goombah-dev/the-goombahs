import React from 'react'
import { TitleBlurb } from '../blocks/title-blurb';

import {
  story,
  storyContent,
  sectionHeader,
  blurb,
  quote,
  emph,
} from '../../styles/home/story.module.scss'



export const Story = () => {
  return (
    <section className={story} id="story">
      <div className={storyContent}>
        <div className={sectionHeader}>
          <TitleBlurb title={`The Story`} blurb={``} />
        </div>
        <p className={blurb}>
          <span className={quote}>“Potresti alzarti.”</span>
          <span>
            With these two words, a meeting concludes and
            the heads of the Five Families rise to pay their
            respects to the Godfather Luciano “The Legend”
            Mongelli. For decades he has served as capo di
            tutti i capi and safeguarded the future of the
            Five Families of New York . Unlike the warring
            families before them, the truce was solidified
            by a strategic division of power, ensuring not
            one family held a stronger advantage.
          </span>
          <span className={emph}>
            Unfortunately, this long running peace is about
            to change and a power struggle is on the horizon
            between the families...
          </span>
        </p>
      </div>
    </section>
  )
}
