import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { List, ListItem } from '~/components/list';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Skills',
    description: 'My technical skills and the tools I use to build things.',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Skills & Tools"
          description="A somewhat comprehensive list of coding languages, frameworks, platforms, and more that I use to build and code things."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Coding Languages</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <b> Java </b>: coding language that I am most familiar with. I've used it to create an elevator simulation program and am now building a multi-threaded, web-scraping custom search engine.
                  </ListItem>
                  <ListItem>
                    <b> Python </b>: my first coding language and remains a top choice. I recently made a blockchain from scratch using Python, and I've also taught a course on it to middle schoolers.
                  </ListItem>
                  <ListItem>
                    <b> C </b>: another language that I am quite familiar with. I designed my own socket and basic http server using C, as well as a RISC-V simulator.
                  </ListItem>
                  <ListItem>
                    <b> Javascript/Typescript </b>: I've used Javascript to create a simple web app that uses the Spotify API to analyze the mood of a song, and I've worked with both Javascript and Typescript in multiple web frameworks including React and Vue.js.
                  </ListItem>
                  <ListItem>
                    <b> R & RStudio </b>: I used R for data analysis and visualization in RStudio. I've created a project that analyzes the lyrics of all of the songs from the K-pop group Blackpink and displays the data in multiple ways.
                  </ListItem>
                  <ListItem>
                    <b> HTML/CSS </b>: I've used HTML/CSS to create multiple webpages and have a good understanding of both.
                  </ListItem>
                  <ListItem>
                    <b> SQL </b>: I'm currently learning SQL, and have experience working with MongoDB, but am working to gain a better understanding of SQL and integrate it into a website.
                  </ListItem>
                   <ListItem>
                    <b> Swift </b>: I recently built an app with Swift and Firebase, and I'm learning more about Swift and its ecosystem.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <b> Unity </b>: I've used Unity to create a simple game where the player climbs a pyramid collecting coins.
                  </ListItem>
                  <ListItem>
                    <b> React </b>: I've made several webpages with React, including this one!
                  </ListItem>
                  <ListItem>
                    <b> Vue.js </b>: I've worked with Vue.js quite a bit, especially by converting a webpage from Vue.js to React, which required a deep understanding of both frameworks.
                  </ListItem>
                  <ListItem>
                    <b> Flask </b>: I used Flask to create and launch a blockchain from scratch.
                  </ListItem>
                  <ListItem>
                    <b> Tableau </b>: My very first CS related class was Data Science, which I took in Italy, and there I learned how to use Tableau and created visualizations of data.
                  </ListItem>
                  <ListItem>
                    <b> Cloudfare </b>: I've been working on deploying all of my sites through Cloudfare Pages, and am in the process of learning how to use Cloudfare Workers. This page is deployed through Cloudfare Pages!
                  </ListItem>
                  <ListItem>
                    <b> Firebase </b>: I created a React website during my internship in Korea, connecting it to a Firebase backend for database storage functionality. I've also used it to power several of my projects.
                  </ListItem>
                    <ListItem>
                    <b> XCode </b>: Used XCode to create an iOS mental health app with AI powered lessons and a chatbot.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>

          ... and I am always learning more!
        </ProjectSection>

      </ProjectContainer>
      <Footer />
    </>
  );
};
