import { useNavigate } from 'react-router';
import { Container } from './style';
import DeleteInf from '../../components/delete';

export default function Delete() {
  const navigate = useNavigate();

  return (
    <Container>
      <DeleteInf />
    </Container>
  );
}
