import { Button, BackButton, Container, PerfilContainer, Title, P, Submit } from './style';
import { useNavigate } from 'react-router';
import { api } from '../../services/api';
import React, { useState } from 'react';
import fundo from '../../images/artists/chemical.jpg';
import { userStore } from '../../services/userStore';

export default function ProfileInf() {
  const navigate = useNavigate();
  const userDataOriginal = userStore.getUser();
  const [userData, setUserData] = useState(userDataOriginal);
  const [editPerfil, setEditPerfil] = useState(false);
  const [mostrar, setMostrar] = useState(true);

  if (!userDataOriginal) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  }

  const Delete = async () => {
    try {
      const response = await api.deleteUser(userData.id);
      alert('Conta excluída com sucesso!');
      navigate('/');
    } catch (error) {
      console.log('Erro completo:', error.response);
      if (error.response?.data?.message) {
        alert(`Erro: ${error.response.data.message}`);
      } else {
        alert('Erro ao atualizar. Verifique o console.');
      }
    }
  };

  return (
    <Container>
      <Title>⚠️ Tem certeza que deseja excluir sua conta?</Title>
      <P>
        Essa ação é permanente e todos os seus dados serão apagados. Não será
        possível recuperar sua conta depois da exclusão.
      </P>

      <Button onClick={() => Delete()}>Solicitar exclusão</Button>
      <BackButton onClick={() => navigate('/profile')}>voltar</BackButton>
    </Container>
  );
}
