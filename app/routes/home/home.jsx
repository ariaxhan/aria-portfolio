import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';

import blockchainTexture from '~/assets/blockchain.png';
import melodyTexture from '~/assets/moodishmelodies.png';
import bookBlogTexture from '~/assets/bookblog.png';

import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a cybersecurity enthusiast and software engineer student.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="A custom playlist generator based on mood"
        description="Used the Spotify API to generate Spotify playlists using mood and tempo data from songs"
        buttonText="View project"
        buttonLink="https://github.com/ariaxhan/MoodishMelodiesJS"
        model={{
          type: 'laptop',
          alt: 'Custom playlist generator',
          textures: [
            {
              srcSet: `${melodyTexture} 1280w, ${melodyTexture} 2560w`,
              placeholder: melodyTexture,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={1}
        title="A blockchain built with Python"
        description="Created a blockchain with Python and Flask, implementing css, html, and javascript for the front-end"
        buttonText="View project"
        buttonLink="https://github.com/ariaxhan/customBlockchain"
        model={{
          type: 'laptop',
          alt: 'Python Blockchainr',
          textures: [
            {
              srcSet: `${blockchainTexture} 1280w, ${blockchainTexture} 2560w`,
              placeholder: blockchainTexture,
            },
          ],
        }}
      />


      {/*<ProjectSummary*/}
      {/*  id="project-2"*/}
      {/*  alternate*/}
      {/*  sectionRef={projectTwo}*/}
      {/*  visible={visibleSections.includes(projectTwo.current)}*/}
      {/*  index={2}*/}
      {/*  title="Video game progress tracking"*/}
      {/*  description="Design and development for a video game tracking app built in React Native"*/}
      {/*  buttonText="View website"*/}
      {/*  buttonLink="https://gamestack.hamishw.com"*/}
      {/*  model={{*/}
      {/*    type: 'phone',*/}
      {/*    alt: 'App login screen',*/}
      {/*    textures: [*/}
      {/*      {*/}
      {/*        srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,*/}
      {/*        placeholder: gamestackTexturePlaceholder,*/}
      {/*      },*/}
      {/*      {*/}
      {/*        srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,*/}
      {/*        placeholder: gamestackTexture2Placeholder,*/}
      {/*      },*/}
      {/*    ],*/}
      {/*  }}*/}
      {/*/>*/}
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Horror book blog with Astro"
        description="Created a personal book blog about horror novels using Astro, a static site generator for modern web development, and tailwindcss for lightweight styling"
        buttonText="View project"
        buttonLink="https://github.com/ariaxhan/sanity-books"
        model={{
          type: 'laptop',
          alt: 'Sanity book blog for horror enthusiasts',
          textures: [
            {
              srcSet: `${bookBlogTexture} 800w, ${bookBlogTexture} 1920w`,
              placeholder: bookBlogTexture,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
