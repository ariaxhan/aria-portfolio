import bookBlogTexture from '~/assets/bookblog.png';
import hotAgentsTexture from '~/assets/hotagents.png';
import melodyTexture from '~/assets/moodishmelodies.png';

import { useEffect, useRef, useState } from 'react';
import { Footer } from '~/components/footer';
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import styles from './home.module.css';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';

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
    title: 'Software Engineer + Cybersecurity Enthusiast',
    description: `Portfolio of ${config.name} — a cybersecurity enthusiast and software engineer student.`,
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
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
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
        title="A Hotkey Powered AI Assistant"
        description="Created a productivity tool that uses a hotkey-triggered AI agent to automate tasks like content explanation, drafting responses, code creation, and proofreading by analyzing your desktop screenshot."
        buttonText="View project"
        buttonLink="https://github.com/ariaxhan/hotagents"
        model={{
          type: 'laptop',
          alt: 'Hot Agents',
          textures: [
            {
              srcSet: `${hotAgentsTexture} 1280w, ${hotAgentsTexture} 2560w`,
              placeholder: hotAgentsTexture,
            },
          ],
        }}
      />

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

      <Footer />
    </div>
  );
};
