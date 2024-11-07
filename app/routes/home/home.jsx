import blossom1 from '~/assets/blossom1.png';
import blossom2 from '~/assets/blossom2.png';
import hotAgentsTexture from '~/assets/hotagents.png';
import itineratorTexture from '~/assets/itineratorimage.png';
import melodyTexture from '~/assets/moodishmelodies.png';
import resonateTexture from '~/assets/resonate.png';

import { useEffect, useRef, useState, useMemo } from 'react';
import { Footer } from '~/components/footer';
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import styles from './home.module.css';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';

export const links = () => [
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

export const meta = () => {
  return baseMeta({
    title: 'Software Engineer',
    description: `Portfolio of ${config.name} — a computer science student.`,
  });
};

const PROJECTS = [
  {
    id: 'project-1',
    index: 1,
    title: 'An AI-Powered Itinerary Generator',
    description:
      'Itinerator is an advanced web application that uses AI to create personalized travel itineraries based on user preferences or random inputs. Whether you are planning a detailed trip or seeking spontaneous travel suggestions, Itinerator provides customized, efficient itineraries to enhance your travel experience.',
    buttonText: 'View project',
    buttonLink: 'https://itinerator.org/',
    model: {
      type: 'laptop',
      alt: 'Itinerator',
      textures: [
        {
          srcSet: `${itineratorTexture} 1280w, ${itineratorTexture} 2560w`,
          placeholder: itineratorTexture,
        },
      ],
    },
    style: { color: 'black' },
  },
  {
    id: 'project-3',
    alternate: true,
    index: 2,
    title: 'Blossom, an AI skills and therapy app',
    description:
      'An app that helps people with mental health issues to learn new skills and improve their mental health with an AI therapist.',
    buttonText: 'View project',
    buttonLink: 'https://github.com/ariaxhan/blossom',
    model: {
      type: 'phone',
      alt: 'App login screen',
      textures: [
        {
          srcSet: `${blossom1} 375w, ${blossom1} 750w`,
          placeholder: blossom1,
        },
        {
          srcSet: `${blossom2} 375w, ${blossom2} 750w`,
          placeholder: blossom2,
        },
      ],
    },
  },
  {
    id: 'project-2',
    alternate: true,
    index: 3,
    title: 'A Hotkey Powered AI Assistant',
    description:
      'Created a productivity tool that uses a hotkey-triggered AI agent to automate tasks like content explanation, drafting responses, code creation, and proofreading by analyzing your desktop screenshot.',
    buttonText: 'View project',
    buttonLink: 'https://github.com/ariaxhan/hotagents',
    model: {
      type: 'laptop',
      alt: 'Hot Agents',
      textures: [
        {
          srcSet: `${hotAgentsTexture} 1280w, ${hotAgentsTexture} 2560w`,
          placeholder: hotAgentsTexture,
        },
      ],
    },
  },
  {
    id: 'project-4',
    index: 4,
    title: 'A custom playlist generator based on mood',
    description:
      'Used the Spotify API to generate Spotify playlists using mood and tempo data from songs.',
    buttonText: 'View project',
    buttonLink: 'https://github.com/ariaxhan/MoodishMelodiesJS',
    model: {
      type: 'laptop',
      alt: 'Custom playlist generator',
      textures: [
        {
          srcSet: `${melodyTexture} 1280w, ${melodyTexture} 2560w`,
          placeholder: melodyTexture,
        },
      ],
    },
  },
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const sectionRefs = useRef(new Map());

  const createObserver = useMemo(() => {
    return (callback, options) => {
      return new IntersectionObserver(callback, {
        rootMargin: options?.rootMargin || '0px',
        threshold: options?.threshold || 0,
      });
    };
  }, []);

  useEffect(() => {
    const sectionObserver = createObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            sectionObserver.unobserve(section);
            setVisibleSections(prev => new Set([...prev, section]));
          }
        });
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.05 }
    );

    const indicatorObserver = createObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sectionRefs.current.forEach(section => {
      if (section) sectionObserver.observe(section);
    });

    const introSection = sectionRefs.current.get('intro');
    if (introSection) indicatorObserver.observe(introSection);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [createObserver]);

  const setSectionRef = id => element => {
    if (element) {
      sectionRefs.current.set(id, element);
    }
  };

  const isSectionVisible = id => {
    const section = sectionRefs.current.get(id);
    return visibleSections.has(section);
  };

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={setSectionRef('intro')}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={setSectionRef('details')}
        visible={isSectionVisible('details')}
        id="details"
      />
      {PROJECTS.map(project => (
        <ProjectSummary
          key={project.id}
          {...project}
          sectionRef={setSectionRef(project.id)}
          visible={isSectionVisible(project.id)}
        />
      ))}
      <Footer />
    </div>
  );
};
