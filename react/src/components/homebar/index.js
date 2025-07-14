import { Container, Button, ButtonOther, ButtonConfig, Input } from './style';
import { useNavigate } from 'react-router';


export default function HomeBar() {
  const navigate = useNavigate();
  return (
    <Container>
      <Input placeholder="🔍︎ Pesquisar" />
      <Button>Pop</Button>
      <Button>Rock</Button>
      <Button>Rap</Button>
      <Button>Sertanejo</Button>
      <ButtonOther>⋙</ButtonOther>
      <ButtonConfig onClick={() => navigate('/configs')} >⛮</ButtonConfig>
      <h2>Em alta</h2>
    </Container>
  );
}
