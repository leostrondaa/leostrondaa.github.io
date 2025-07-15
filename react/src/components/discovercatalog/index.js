import { Container, ButtonSong, ButtonContainer, ButtonOther } from './style';
import { useNavigate } from 'react-router';
import fundo from '../../images/songs/limp.jpg';
import fundo2 from '../../images/songs/slipknot.jpg';
import fundo3 from '../../images/songs/system.jpg';

export default function DiscoverCatalog() {
  const navigate = useNavigate();

  return (
    <Container>
      <h2>Descubra</h2>
      <ButtonContainer>
        <ButtonSong>
          <img src={fundo} />
          <h6>Take a Look Around</h6>
          <span>Limp Bizkit</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo2} />
          <h6>People=Shit</h6>
          <span>Slipkot</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo3} />
          <h6>Mezmerize</h6>
          <span>System of a Down</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo} />
          <h6>Take a Look Around</h6>
          <span>Limp Bizkit</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo2} />
          <h6>People=Shit</h6>
          <span>Slipkot</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo3} />
          <h6>Mezmerize</h6>
          <span>System of a Down</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo} />
          <h6>Take a Look Around</h6>
          <span>Limp Bizkit</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo2} />
          <h6>People=Shit</h6>
          <span>Slipkot</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo3} />
          <h6>Mezmerize</h6>
          <span>System of a Down</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo} />
          <h6>Take a Look Around</h6>
          <span>Limp Bizkit</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo2} />
          <h6>People=Shit</h6>
          <span>Slipkot</span>
          <span>00:00</span>
        </ButtonSong>
        <ButtonSong>
          <img src={fundo3} />
          <h6>Mezmerize</h6>
          <span>System of a Down</span>
          <span>00:00</span>
        </ButtonSong>
      </ButtonContainer>
    </Container>
  );
}
