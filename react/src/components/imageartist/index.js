import { Container} from './style';
import { useNavigate } from 'react-router';

export default function ImageArtist({artist}) {
  const navigate = useNavigate();

  return (
    <Container>
        <img src={artist?.cover} alt={artist?.name} />
    </Container>
  );
}
