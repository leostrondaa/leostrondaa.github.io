import {
  Container,
  ArtistContainer,
  PerfilButton,
  Title,
  ButtonOther,
} from './style';
import { useNavigate } from 'react-router';
import fundo3 from '../../images/songs/system.jpg';

export default function DiscoverCatalog() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Artistas</Title>
      <ArtistContainer>
        <PerfilButton>
          <img src={fundo3} />
          <h6>Metallica</h6>
        </PerfilButton>
        <PerfilButton>
          <img src={fundo3} />
          <h6>Metallica</h6>
        </PerfilButton>
        <PerfilButton>
          <img src={fundo3} />
          <h6>Metallica</h6>
        </PerfilButton>
        <PerfilButton>
          <img src={fundo3} />
          <h6>Metallica</h6>
        </PerfilButton>
        <PerfilButton>
          <img src={fundo3} />
          <h6>Metallica</h6>
        </PerfilButton>
        <PerfilButton>
          <img src={fundo3} />
          <h6>Metallica</h6>
        </PerfilButton>
        <ButtonOther>⋙</ButtonOther>
      </ArtistContainer>
    </Container>
  );
}
