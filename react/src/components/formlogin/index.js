import React, { useState } from 'react';
import { Container, P } from './style';
import { useNavigate } from 'react-router';

import './style';
import { Input } from './style';
import { Submit } from './style';
import { Create } from './style';
import { Reset } from './style';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <P>E-mail</P>
      <Input required />
      <P>Senha</P>
      <Input required />
      <Submit value="Enviar" onClick={() => navigate('/home')} />
      <Create onClick={() => navigate('/signin')}>Criar conta</Create>
      <Reset onClick={() => navigate('/reset')}>Esqueci minha senha</Reset>
    </Container>
  );
}
