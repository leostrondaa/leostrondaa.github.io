import HomeBar from '../../components/homebar';
import SongBar from '../../components/songbar';
import Catalog from '../../components/catalog';
import { Container, Section } from './style';

export default function Home() {
  return (
    <Container>
      <Section>
        <SongBar />
      </Section>
      <Section color="black">
        <HomeBar />
        <Catalog></Catalog>
      </Section>
    </Container>
  );
}
