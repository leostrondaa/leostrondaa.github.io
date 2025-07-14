import { Container, Button, ButtonOther, ButtonConfig, Input } from './style';

export default function HomeBar() {
  return (
    <Container>
      <Input placeholder="🔍︎ Pesquisar" />
      <Button>Pop</Button>
      <Button>Rock</Button>
      <Button>Rap</Button>
      <Button>Sertanejo</Button>
      <ButtonOther>⋙</ButtonOther>
      <ButtonConfig>⛮</ButtonConfig>
      <h2>Em alta</h2>
    </Container>
  );
}
