import { Container, Button, Title, ButtonOther, ButtonConfig, Input } from './style';
import { useNavigate } from 'react-router';


export default function ConfigsBar() {
    const navigate = useNavigate();
    return (

        <Container>
            <Title>App</Title>
            <Button>Geral</Button>
            <Button>Seguranca</Button>
            <Title>Conta</Title>
            <Button>Perfil</Button>
            <Button>Dados</Button>
            <Title>Acessibilidade</Title>
            <Button>Tema</Button>
            <Button>Ajuda</Button>
        </Container>
    );
}
