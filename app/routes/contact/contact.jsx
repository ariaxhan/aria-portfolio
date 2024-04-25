import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { cssProps, media, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';
import { Link } from '~/components/link/index.js';
import { Fragment, useState } from 'react';
import { Transition } from '~/components/transition/index.js';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Section className={styles.contact}>
      <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
        <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
      </Heading>
      <Text className={styles.description} size="l" as="p">
        Check out my projects on <Link href="https://github.com/ariaxhan">GitHub</Link>
        Look at my professional experience on <Link href="https://www.linkedin.com/in/ariahan/">LinkedIn</Link>
        Email me at ariaxhan@gmail.com.
      </Text>
      <Footer className={styles.footer} />
    </Section>
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
            <ProfileText visible={visible} titleId={titleId} />
          </div>
        )}
      </Transition>
    </Section>
  );
};
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}