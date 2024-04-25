import { DecoderText } from '~/components/decoder-text';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Link } from '~/components/link/index.js';
import styles from './contact.module.css';

export const meta = () => {
  return [
    { name: "title", content: "Contact" },
    { name: "description", content: "Send me a message if you’re interested in discussing a project or if you just want to say hi" },
  ];
};

export const Profile = ({ id }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      as="section"
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <div className={styles.content}>
        <Heading className={styles.title} level={3} id={titleId}>
          <DecoderText text="Say hello" start={true} delay={300} />
        </Heading>
        <Text className={styles.description} size="l" as="p">
          Check out my projects on <Link href="https://github.com/ariaxhan">GitHub</Link>.{' '}
          Look at my professional experience on <Link href="https://www.linkedin.com/in/ariahan/">LinkedIn</Link>.{' '}
          Email me at <a href="mailto:ariaxhan@gmail.com">ariaxhan@gmail.com</a>.
        </Text>
        <Footer className={styles.footer} />
      </div>
    </Section>
  );
};
