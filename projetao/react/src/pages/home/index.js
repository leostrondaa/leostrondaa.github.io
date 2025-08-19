import HomeBar from '../../components/homebar';
import SongBar from '../../components/songbar';
import DiscoverCatalog from '../../components/discovercatalog';
import ArtistCatalog from '../../components/artistcatalog';
import { Container, Section } from './style';

export default function Home() {
  return (
    <Container>
      <Section>
        <SongBar />
      </Section>
      <Section color="black">
        <HomeBar />
        <DiscoverCatalog></DiscoverCatalog>
        <ArtistCatalog></ArtistCatalog>
      </Section>
    </Container>
  );
}
