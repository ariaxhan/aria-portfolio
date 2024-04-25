import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Icon } from '~/components/icon';

const Contact = () => {
  return (
    <Section style={{ padding: '40px', textAlign: 'center' }}>
      <Heading level={1} as="h1">Contact Me</Heading>
      <Text size="l" as="p">Feel free to reach out to me via the following platforms:</Text>

      <div style={{ marginTop: '20px' }}>
        <a href="https://www.linkedin.com/in/ariahan/"
           style={{ margin: '10px', display: 'inline-block', textDecoration: 'none' }}>
          <Icon icon="linkedin" style={{ verticalAlign: 'middle' }} />
          <span style={{ marginLeft: '8px' }}>LinkedIn</span>
        </a>

        <a href="https://github.com/ariaxhan/"
           style={{ margin: '10px', display: 'inline-block', textDecoration: 'none' }}>
          <Icon icon="github" style={{ verticalAlign: 'middle' }} />
          <span style={{ marginLeft: '8px' }}>GitHub</span>
        </a>

        <a href="mailto:ariaxhan@gmail.com"
           style={{ margin: '10px', display: 'inline-block', textDecoration: 'none' }}>
          <Icon icon="email" style={{ verticalAlign: 'middle' }} />
          <span style={{ marginLeft: '8px' }}>Email</span>
        </a>
      </div>
    </Section>
  );
};

export default Contact;
