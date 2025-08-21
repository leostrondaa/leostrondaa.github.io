import HomeBar from '../../components/homebar';
import SongBar from '../../components/songbar';
import DiscoverCatalog from '../../components/discovercatalog';
import ArtistCatalog from '../../components/artistcatalog';
import { Container, Section } from './style';
import { useLocation } from 'react-router-dom';


export default function Home() {

  const { state } = useLocation();
  const song = state?.song; 

  return (
    <Container>
      <Section>
        <SongBar song={song}></SongBar>
      </Section>
      <Section color="black">
        <HomeBar />
        <DiscoverCatalog></DiscoverCatalog>
        <ArtistCatalog></ArtistCatalog>
      </Section>
    </Container>
  );
}
