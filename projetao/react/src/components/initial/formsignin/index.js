import React, { useState } from 'react';
import { Container, P } from './style';
import { useNavigate } from 'react-router';
import { api } from '../../../services/api';
import './style';
import { Input, Submit, BackButton } from './style';

export default function FormSignin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const Create = async (e) => {
    e.preventDefault();

    try {
      const response = await api.createUser({
        name: name,
        email: email,
        password: password,
      });

      navigate('/');
    } catch (error) {
      alert('Erro ao criar conta. Tente outro email.');
    }
  };

  return (
    <Container>
      <form onSubmit={Create}>
        <P>Informe seu nome</P>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <P>Informe seu e-mail</P>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <P>Informe sua senha</P>
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Submit value="Criar" />
      </form>
      <BackButton onClick={() => navigate('/')}>Voltar</BackButton>
    </Container>
  );
}
