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
    description:
      'A snapshot of my technical expertise, shaped by real-world projects and continuous learning.',
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
          description="A snapshot of my technical expertise, shaped by real-world projects and continuous learning."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>AI & Machine Learning</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <b>Large Language Models</b>: Strong foundation in AI architectures
                    and principles through academic study, with hands-on experience
                    implementing LLMs and agentic systems.
                  </ListItem>
                  <ListItem>
                    <b>Rapid AI Development</b>: Built two hackathon-winning applications,
                    Freetime (AI social planning platform, Wordware Prize) and
                    TheraVoice/brink (biometric AI therapy, AI/ML API Prize).
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Core Engineering</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <b>Python</b>: My first coding language (surprise). Taught
                    fundamentals to middle school students.
                  </ListItem>
                  <ListItem>
                    <b>R</b>: Started alongside Python, using RStudio for data analysis.
                    Created visualizations exploring linguistic patterns in K-pop lyrics.
                    Recently used to explore random forest predictions and clustering
                    algorithms.
                  </ListItem>
                  <ListItem>
                    <b>C</b>: Built network systems from the ground up, including a custom
                    HTTP server and RISC-V simulator.
                  </ListItem>
                  <ListItem>
                    <b>JavaScript/TypeScript</b>: Crafted a Spotify mood analyzer and
                    various full-stack web applications. Built modular interfaces at
                    Qiri.ai using modern frameworks.
                  </ListItem>
                  <ListItem>
                    <b>Swift</b>: Created iOS apps integrating biometrics and voice
                    features for mental health support.
                  </ListItem>
                  <ListItem>
                    <b>Java</b>: Used to create everything from a multi-threaded web
                    scraper to an elevator simulation system. My go-to language for
                    complex systems.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Web Development & Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <b>Figma to Code</b>: Expertise in turning Figma designs into clean,
                    responsive interfaces.
                  </ListItem>
                  <ListItem>
                    <b>React & Vue.js</b>: Deep understanding of both frameworks through
                    challenging projects, including migrating an entire enterprise site
                    from Vue to React while improving performance.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Cloud</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <b>Google Cloud</b>: My current cloud provider of choice. I've worked
                    primarily with authentication, AI APIs and tools, and serverless
                    functions.
                  </ListItem>
                  <ListItem>
                    <b>Cloudflare</b>: My go-to quick deployment method. This page is
                    deployed through Cloudfare Pages!
                  </ListItem>
                  <ListItem>
                    <b>AWS</b>: Another cloud provider I've worked with, primarily with
                    EC2, Elastic Beanstalk, VPC, and S3.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Game Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <b>Unity</b>: Took a Game Design with Unity class and built an
                    interactive 3D game featuring coin collection and pyramid climbing
                    mechanics.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
