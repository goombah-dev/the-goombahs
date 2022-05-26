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
    <section className={story} id='story'>
      <div className={storyContent}>
        <div className={sectionHeader}>
          <TitleBlurb title={`The Story`} blurb={``} />
        </div>
        <p className={blurb}>
          
           An exclusive NFT-METAVERSE collection where each token doubles as The Goombaverse Utility Pass. Instantly upon mint holders are forever granted entry into all IRL and metaverse events. Anything The Goombahs or their partners are apart of, you are now apart of.
           A Goombah is a unique 3D evolving Goodfella-avatar that garners its rarity based on rank within the organization. As our family continues to grow both in size and stature so will the Goombaverse. Our team is passionately dedicated on instilling our own “Omertà”. This carefully crafted ethos is centered around what will be consistently referred to as the three E's:         
           <br />
             Education, Experience, and Engagement.
          <br />   
          
            The Goombah Social Club provides a systematically superlative platform for execution. Revolving around the three E's the social club will initially offer a concert venue, horse track, Casino & MORE! This has all been built pre-launch and will continue to evolve. Possessing entry to The Families central headquarters warrants a constant engaging experience inside this new worlds top of the line virtual environment. Complete with tons of user engagement upgraded regularly! The social club is just the beginning.
          <br />
              One highlight of a utility that features Experience & engagement will be a recurring raffle!
          <br />
            Now its time to meet The Family… ALLA SALUTE
       
        </p>
      </div>
    </section>
  )
}
