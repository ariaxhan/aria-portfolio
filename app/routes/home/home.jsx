import blossom1 from '~/assets/blossom1.png';
import blossom2 from '~/assets/blossom2.png';
import hotAgentsTexture from '~/assets/hotagents.png';
import itineratorTexture from '~/assets/itineratorimage.png';
import melodyTexture from '~/assets/moodishmelodies.png';
import resonateTexture from '~/assets/resonate.png';

import { useEffect, useRef, useState } from 'react';
import { Footer } from '~/components/footer';
import config from '~/config.json';
import { baseMeta } from '~/utils/meta';
import styles from './home.module.css';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';

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
  { rootMargin: '0px 0px -5% 0px', threshold: 0.05 }
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
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={1}
        title="An AI-Powered Itinerary Generator"
        description="Itinerator is an advanced web application that uses AI to create personalized travel itineraries based on user preferences or random inputs. Whether you’re planning a detailed trip or seeking spontaneous travel suggestions, Itinerator provides customized, efficient itineraries to enhance your travel experience."
        buttonText="View project"
        buttonLink="itinerator.org"
        model={{
          type: 'laptop',
          alt: 'Itinerator',
          textures: [
            {
              srcSet: `${itineratorTexture} 1280w, ${itineratorTexture} 2560w`,
              placeholder: itineratorTexture,
            },
          ],
        }}
        style={{ color: 'black' }} // Add this line to set the text color to black
      />
      <ProjectSummary
        id="project-3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={4}
        title="Blossom, an AI skills and therapy app"
        description="An app that helps people with mental health issues to learn new skills and improve their mental health with an AI therapist."
        buttonText="View project"
        buttonLink="https://github.com/ariaxhan/blossom"
        model={{
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
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={5}
        title="AI Powered Journaling App"
        description="Resonate is an innovative, AI powered journaling site designed to help users analyze their journal entries and display them in a visual and meaningful way."
        buttonText="View project"
        buttonLink="https://github.com/kev-bacon/resonate"
        model={{
          type: 'laptop',
          alt: 'Resonate, an AI-Powered Journaling App',
          textures: [
            {
              srcSet: `${resonateTexture} 800w, ${resonateTexture} 1920w`,
              placeholder: resonateTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={3}
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
        id="project-2"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={5}
        title="A custom playlist generator based on mood"
        description="Used the Spotify API to generate Spotify playlists using mood and tempo data from songs."
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
      <Footer />
    </div>
  );
};