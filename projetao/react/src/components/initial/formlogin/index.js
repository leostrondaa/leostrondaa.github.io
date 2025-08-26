import React, { useState } from 'react';
import { Container, P } from './style';
import { useNavigate } from 'react-router';
import { api } from '../../../services/api';

import './style';
import { Input, Submit, Create, Reset, Title } from './style';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(email, password);
      navigate('/home');
    } catch (error) {
      alert('Email ou senha incorretos');
    }
  };
  return (
    <Container>
      <Title>Bem vindo de volta</Title>
      <form onSubmit={Login}>
        <P>E-mail</P>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <P>Senha</P>
        <Input
          type="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Submit value="Enviar" />
        <Create onClick={() => navigate('/signin')}>Criar conta</Create>
        <Reset onClick={() => navigate('/reset')}>Esqueci minha senha</Reset>
      </form>
    </Container>
  );
}
