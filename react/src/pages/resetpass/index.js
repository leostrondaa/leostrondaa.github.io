import { useNavigate } from 'react-router';
import { Container } from './style';
import FormReset from '../../components/initial/formreset';

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <FormReset />
    </Container>
  );
}
