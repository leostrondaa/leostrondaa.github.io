import { useNavigate } from 'react-router';
import { Container } from './style';
import  ProfileInf from '../../components/profile';

export default function Profile() {
  const navigate = useNavigate();

  return <Container>
    <ProfileInf/>
  </Container>;
}
