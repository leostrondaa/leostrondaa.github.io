import React, { useState } from 'react';
import { Container, P } from './style';
import { useNavigate } from 'react-router';

import './style';
import { Input } from './style';
import { Submit } from './style';

export default function FormSignin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <form>
        <P>Nome</P>
        <Input required type="text" />
        <P>E-mail</P>
        <Input required type="email" />
        <P>Senha</P>
        <Input required type="password" />
        <Submit value="Criar" onClick={() => navigate('/')} />
      </form>
    </Container>
  );
}
