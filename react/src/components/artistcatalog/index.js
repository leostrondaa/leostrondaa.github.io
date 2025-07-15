import {
  Container,
  ArtistContainer,
  PerfilButton,
  Title,
  ButtonOther,
} from './style';
import { useNavigate } from 'react-router';
import fundo from '../../images/artists/chemical.jpg';
import fundo2 from '../../images/artists/arctic.jpg';
import fundo3 from '../../images/artists/linkin.jpg';
import { useLocation } from 'react-router-dom';

export default function DiscoverCatalog() {
  const navigate = useNavigate();

  const artist = [
    {
      id: 1,
      artist: "My chemical Romance",
      cover: fundo,
    },
    {
      id: 2,
      artist: "Arctic Monkeys",
      cover: fundo2,
    },
    {
      id: 3,
      artist: "Linkin Park",
      cover: fundo3,
    },
  ];



  return (
    <Container>
      <Title>Artistas</Title>
      <ArtistContainer>
        {artist.map((artist) => (
          <PerfilButton key={artist.id} onClick={() => navigate('/artist', { state: { artist } }) } >
            <img src={artist.cover} />
            <h6>{artist.artist}</h6>
          </PerfilButton>
        ))}
        <ButtonOther>⋙</ButtonOther>
      </ArtistContainer>
    </Container>
  );
}
