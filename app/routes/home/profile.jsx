
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/aria.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Hi, I'm Aria! I'm a Computer Science student at the University of San Francisco, and I'm fascinated by the
      intersection of software development, data privacy, and cybersecurity. I'm on track to graduate in May 2025, and
      I'm eager to apply my skills and knowledge in real-world settings. Currently I'm looking for an internship for
      Summer 2024 or Winter 2024.
      <br /> <br />
      My projects, such as a custom Python blockchain, Java-based search engine and a Spotify-integrated web app, reflect my ability to turn data
      into creative, user-centric solutions. Check out my <Link href="https://github.com/ariaxhan">Github</Link> to see
      everything I've built, and if you’re interested in the coding languages and platforms I use, take a look at
      my <Link href="/uses">Skills &
      Tools</Link> page.
      <br /> <br />
      I'm excited about opportunities where I can merge my technical abilities, creative thinking, and passion for
      software engineering and cybersecurity. Please feel free to reach out and connect!
      <br />
      <br />
      Email me at <Link href="mailto:ariaxhan@gmail.com">ariaxhan@gmail.com</Link> or check out my <Link
      href="https://www.linkedin.com/in/ariahan/">LinkedIn</Link> for more information.
      <br /> <br />
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImg} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me touching some grass"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
