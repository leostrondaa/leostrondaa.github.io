import {
  Container,
  ButtonSong,
  Title,
  Time,
  SubTitle,
  ButtonOther,
  ButtonConfig,
  Input,
  BackButton,
} from "./style";
import { useNavigate } from "react-router";
import fundo from "../../images/limp.jpg";
import fundo2 from "../../images/slipknot.jpg";
import fundo3 from "../../images/system.jpg";

export default function ConfigsBar() {
  const navigate = useNavigate();
  return (
    <Container>
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
    </Container>
  );
}
