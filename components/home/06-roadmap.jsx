import React from 'react'

import { TitleBlurb } from '../blocks/title-blurb'

import {
  sectionContainer,
  mapContainer,
  monthBlock,
  monthName,
  eventsSection,
  eventBlock,
  eventHeader,
  eventBlurb,
  ctaBtn,
} from '../../styles/home/roadmap.module.scss'

const sectionData = {
  title: 'Roadmap',
  blurb: (
    <>
      <span>
      Here is a list of what you can expect in the near future from The Goombahs. Stay tuned! More events and updates will be added as we pass each milestone.
      </span>
    <span> 
    COMING SOON: The Lottery
    </span>
    </>
  ),
  months: [
    {
      name: `Phase 1`,
      events: [
        {
          title: `Spine3D Partnership`,
          blurb: ` Vestibulum tempor, ex eu iaculis molestie, metus ligula dictum neque, sed gravida tellus mauris ac elit. Sed varius libero et sem ultricies, nec facilisis metus hendrerit. Nunc tincidunt, quam quis ultricies gravida, diam ligula tempus magna, eget pellentesque`,
          path: '/',
        },
        {
          title: `Discord Launch`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Merchandise Giveaways`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Presale`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Public Sale`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Metaverse - Goombahverse Beta Launch`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
      ],
    },
    {
      name: `Phase 2`,
      events: [
        {
          title: `Coinbound Partnership`,
          blurb: `Integer pharetra vitae nisl quis pharetra. Ut arcu odio, lacinia eget pharetra a, gravida eget justo. Quisque ut condimentum nisl.`,
          path: '/',
        },
        {
          title: `Discord Poker & Movie Nights`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Metaverse - Launch Scavenger Hunt`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Metaverse - Launch Social Event`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Goombah Merchandise Store Launch`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Goombah Education Program`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
      ],
    },
    {
      name: `Phase 3`,
      events: [
        {
          title: `Metaverse - 1st Live Comedy or Concert Show`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Spine3D Partnership Event`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `IRL NFT Gallery Events (East Coast)`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Community Airdrop`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Goombahverse Expansion + Partnerships`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
      ],
    },
    
    
  ],
}

export const Roadmap = () => {
  const { title, blurb, months } = sectionData

  return (
    <section className={sectionContainer} id='roadmap'>
      <TitleBlurb title={title} blurb={blurb} />
      <div className={mapContainer}>
        {months.map((mnth) => {
          return (
            <div className={monthBlock} key={mnth.name}>
              <p className={monthName}>{mnth.name}</p>
              <div className={eventsSection}>
                {mnth.events.map((evt) => {
                  return (
                    <div
                      className={eventBlock}
                      key={evt.title}
                    >
                      <h6 className={eventHeader}>
                        {evt.title}
                      </h6>
                      <p className={eventBlurb}>
                        {evt.blurb}
                      </p>
                      {/* <button
                        className={`btn btn__primary btn--transp ${ctaBtn}`}
                      >
                        Read More →
                      </button> */}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
