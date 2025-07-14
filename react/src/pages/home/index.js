import HomeBar from '../../components/homebar';
import SongBar from '../../components/songbar';
import { Container, Section } from './style';

export default function Home() {
  return (
    <Container>
      <Section>
        <SongBar />
      </Section>
      <Section color="black">
        <HomeBar />
      </Section>
    </Container>
  );
}
