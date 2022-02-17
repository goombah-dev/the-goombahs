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
    </>
  ),
  months: [
    {
      name: `January`,
      events: [
        {
          title: `Official NFT release`,
          blurb: ` Vestibulum tempor, ex eu iaculis molestie, metus ligula dictum neque, sed gravida tellus mauris ac elit. Sed varius libero et sem ultricies, nec facilisis metus hendrerit. Nunc tincidunt, quam quis ultricies gravida, diam ligula tempus magna, eget pellentesque`,
          path: '/',
        },
        {
          title: `Oculus 2 Giveaway`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
      ],
    },
    {
      name: `February`,
      events: [
        {
          title: `Metaverse release`,
          blurb: `Integer pharetra vitae nisl quis pharetra. Ut arcu odio, lacinia eget pharetra a, gravida eget justo. Quisque ut condimentum nisl.`,
          path: '/',
        },
        {
          title: `Metaverse Poker Night`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
      ],
    },
    {
      name: `March`,
      events: [
        {
          title: `Goombah merch store opening`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `“THe Big Score” Online Scavenger Hunt`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
      ],
    },
    {
      name: `April`,
      events: [
        {
          title: `SPINE3D joint event`,
          blurb: `Nam cursus faucibus sodales. Morbi velit tortor, condimentum at erat a, facilisis ultricies erat. Vestibulum vel interdum neque. In ac sollicitudin metus. Integer cursus urna enim, quis lobortis velit semper in.`,
          path: '/',
        },
        {
          title: `Community Airdrop`,
          blurb: `Nunc maximus metus in pulvinar mollis. Proin pellentesque tellus quis urna hendrerit hendrerit. Pellentesque lacinia dolor at ultricies rutrum.`,
          path: '/',
        },
      ],
    },
    {
      name: `May`,
      events: [
        {
          title: `First official Live metaverse Comedy Show`,
          blurb: `Cras iaculis tellus feugiat, accumsan risus consequat, bibendum mi. Cras enim neque, pharetra nec ultrices eget.`,
          path: '/',
        },
        {
          title: `Goombah Go Hybrid IRL/META Game Release`,
          blurb: `Cras iaculis tellus feugiat, accumsan risus consequat, bibendum mi. Cras enim neque, pharetra nec ultrices eget.`,
          path: '/',
        },
      ],
    },
    {
      name: `June`,
      events: [
        {
          title: `Goombah Graduation`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `NFT.NYC Event`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
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
