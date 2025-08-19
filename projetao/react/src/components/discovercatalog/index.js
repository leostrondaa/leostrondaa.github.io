import { Container, ButtonSong, ButtonContainer, ButtonOther } from './style';
import { useNavigate } from 'react-router';
import fundo from '../../images/songs/limp.jpg';
import fundo2 from '../../images/songs/slipknot.jpg';
import fundo3 from '../../images/songs/system.jpg';
import fundo4 from '../../images/songs/master.jpg';
import fundo5 from '../../images/songs/hardwired.jpg';
import fundo6 from '../../images/songs/sabrina.jpg';

export default function DiscoverCatalog() {
  const navigate = useNavigate();

  const song = [
    {
      id: 1,
      title: "Take a Look Around",
      artist: "Limp Bizkit",
      duration: "03:57",
      cover: fundo,
    },
    {
      id: 2,
      title: "People=Shit",
      artist: "Slipknot",
      duration: "03:35",
      cover: fundo2,
    },
    {
      id: 3,
      title: "Mezmerize",
      artist: "System of a Down",
      duration: "04:00",
      cover: fundo3,
    },
    {
      id: 4,
      title: "Lepper Messiah",
      artist: "Metallica",
      duration: "05:00",
      cover: fundo4,
    },
    {
      id: 5,
      title: "Spit Out the Bone",
      artist: "Metallica",
      duration: "04:30",
      cover: fundo5,
    },
    {
      id: 3,
      title: "Espresso",
      artist: "Sabrina Carpenter",
      duration: "03:10",
      cover: fundo6,
    },
  ];

  return (
    <Container>      
      <h2>Descubra</h2>
      <ButtonContainer>
      {song.map((song) => (
          <ButtonSong key={song.id}>
            <img src={song.cover} alt={song.title} />
            <h6>{song.title}</h6>
            <span>{song.artist}</span>
            <span>{song.duration}</span>
          </ButtonSong>
        ))}
      </ButtonContainer>
    </Container>
  );
}
