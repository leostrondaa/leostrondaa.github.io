import { useNavigate } from 'react-router';
import { Container } from './style';
import FormSignin from '../../components/formsignin';

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <FormSignin />
    </Container>
  );
}
