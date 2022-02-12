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
          <span>
            The Goombahs NFT-Metaverse Project is not just a
            single plot of land or territory. It is an
            entire world that will be forever built around
            the Social Club! The Goombah Social Club has a
            concert venue, horse track, Casino & MORE! This
            has all been erected pre-launch and will
            continue to evolve. Community engagement is the
            ongoing priority.
            {/* The Goombahs NFT-Meta Project is a whole world
            being that will be forever built around the
            Social Club! The Goombahverse has a concert
            venue, horse track, Casino & MORE! */}
          </span>
          <span>
            Buying into this NFT is more than just
            possessing cool art - and becoming apart of the
            family, means more than just having a place to
            portal. We take care of one another. Bringing
            back the feel of the neighborhood and the
            camaraderie of community. Becoming a Goombah
            gives you access to a community of like minded
            individuals and you also get entered into
            giveaways and many other opportunities that most
            people only dream of! Not to mention Animated
            Alliance and their partners have synergized to
            not only create but to educate, to experience,
            and to be family.
            {/* Buying an NFT is more than just cool art, and
            becoming apart of the family means more than
            just having a place to portal. We take care of
            one another. Bringing back the feel of the
            neighborhood and the camaraderie of community.
            Becoming a Goombah gives you access to a
            community of like minded individuals and you
            also get entered into giveaways and many other
            opportunities that most people only dream of!
            Not to mention Animated Alliance and their
            partners have synergized to create an
            opportunity - to educate, to experience, and to
            be family. */}
          </span>
        </p>
      </div>
    </section>
  )
}
