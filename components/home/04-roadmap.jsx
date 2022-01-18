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
  ctaBtn
} from '../../styles/home/roadmap.module.scss'

const sectionData = {
  title: 'Roadmap',
  blurb: (
    <>
      <span>
        Ut fringilla sapien id lacus varius, id ultrices
        diam vehicula. Suspendisse potenti. Aenean tristique
        leo dui, eget tempor velit pulvinar vel. Integer
        pharetra vitae nisl quis pharetra. Ut arcu odio,
        lacinia eget pharetra. Nunc tincidunt, quam quis
        ultricies gravida, diam ligula.
      </span>
      <br />
      <br />
      <span>
        Sed varius, arcu eu pellentesque pulvinar, odio dui
        semper urna, at aliquam sapien enim vel felis.
        Suspendisse eu nunc odio. Sed sagittis auctor
        vehicula. Duis ut metus cursus.
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
          title: `Oculus Giveaway`,
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
          title: `BudBudz Joint Event`,
          blurb: `Donec lobortis aliquet arcu quis ornare. Pellentesque commodo turpis vitae lacinia interdum. Fusce non lorem justo. Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
      ],
    },
    {
      name: `March`,
      events: [
        {
          title: `Official merch store opening`,
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
          title: `The Spine`,
          blurb: `Nam cursus faucibus sodales. Morbi velit tortor, condimentum at erat a, facilisis ultricies erat. Vestibulum vel interdum neque. In ac sollicitudin metus. Integer cursus urna enim, quis lobortis velit semper in.`,
          path: '/',
        },
        {
          title: `Weapon Box Airdrop`,
          blurb: `Nunc maximus metus in pulvinar mollis. Proin pellentesque tellus quis urna hendrerit hendrerit. Pellentesque lacinia dolor at ultricies rutrum.`,
          path: '/',
        },
      ],
    },
    {
      name: `May`,
      events: [
        {
          title: `Live Comedy Show`,
          blurb: `Cras iaculis tellus feugiat, accumsan risus consequat, bibendum mi. Cras enim neque, pharetra nec ultrices eget.`,
          path: '/',
        },
      ],
    },
    {
      name: `June`,
      events: [
        {
          title: `Jail Token Release`,
          blurb: `Ut arcu odio, lacinia eget pharetra a, gravida eget justo.  Etiam dui dolor, accumsan sed iaculis id, feugiat sed massa. Suspendisse purus sem, blandit vitae justo in, fringilla convallis risus.`,
          path: '/',
        },
        {
          title: `Goombah brewery launch`,
          blurb: `Nam cursus faucibus sodales. Morbi velit tortor, condimentum at erat a, facilisis ultricies erat. Vestibulum vel interdum neque. In ac sollicitudin metus. Integer cursus urna enim, quis lobortis velit semper in.`,
          path: '/',
        },
      ],
    },
  ],
}

export const Roadmap = () => {
  const { title, blurb, months } = sectionData

  return (
    <section className={sectionContainer}>
      <TitleBlurb title={title} blurb={blurb} />
      <div className={mapContainer}>
        {months.map((mnth) => {
          return (
            <div className={monthBlock}>
              <p className={monthName}>{mnth.name}</p>
              <div className={eventsSection}>
                {mnth.events.map((evt) => {
                  return (
                    <div className={eventBlock}>
                      <h6 className={eventHeader}>
                        {evt.title}
                      </h6>
                      <p className={eventBlurb}>
                        {evt.blurb}
                      </p>
                      <button
                        className={`btn__primary btn__primary--transp ${ctaBtn}`}
                      >
                        Read More →
                      </button>
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
