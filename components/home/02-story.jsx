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
            Unlike nearly every other project with a
            potential metaverse, The Goombaverse is not just
            a single plot of land or territory. It is an
            entire world! Forever built around the Social
            Club. Community engagement is the ongoing
            priority.
            {/* The Goombahs NFT-Metaverse Project is not just a
            single plot of land or territory. It is an
            entire world that will be forever built around
            the Social Club! The Goombah Social Club has a
            concert venue, horse track, Casino & MORE! This
            has all been erected pre-launch and will
            continue to evolve. Community engagement is the
            ongoing priority. */}
          </span>
          <span>
            The Family considers the social club both a
            headquarters and a second home. It is a fine first
            and centerpiece of many future build out and
            event venues. This world is not restricted
            to The Goombahs; any qualifying project is encouraged to be
            a part of The Goombahverse. Community engagement,
            experience, and education are the central
            principals of the team. Each will be offered and updated as
            our family and metaverse grows. Minting is
            currently available! Get your hands on a Goombah
            and enable the first of many perks -
            The Infinite Goombah Giveaway Campaign. Buying
            into this NFT is more than just purchasing and owning cool
            art, you're becoming a part of the family. We take care
            of one another. Bringing back the feel of the
            neighborhood and the camaraderie of community.
            Becoming a Goombah gives you access to a
            community of like minded individuals and you
            also get entered into giveaways and many other
            opportunities that most people only dream of!
            Not to mention Animated Alliance and their
            partners have synergized to not only create but
            to educate, provide experience, and to continue
            to excel for its clients and for The Goombah
            holders.
            {/* Buying into this NFT is more than just
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
            and to be family. */}
          </span>
          <span>
            Now its time to meet The Family… ALLA SALUTE”
          </span>
        </p>
      </div>
    </section>
  )
}
