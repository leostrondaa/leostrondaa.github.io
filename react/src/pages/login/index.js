import { useNavigate } from 'react-router';
import { Container } from './style';
import FormLogin from '../../components/initial/formlogin';

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <FormLogin />
    </Container>
  );
}
