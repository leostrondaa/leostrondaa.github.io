import React, { useState } from 'react';
import { Container, P } from './style';
import { useNavigate } from 'react-router';

import './style';
import { Input, Submit, BackButton, Title } from './style';

export default function FormReset() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const Reset = (e) => {
    if (email) {
    }
  };

  return (
    <Container>
      <form onSubmit={Reset}>
        <Title>Digite seu e-mail</Title>
        <P>Um codigo de verificação será enviado</P>
        <Input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Submit value="Enviar" />
      </form>
      <BackButton onClick={() => navigate('/')}>Voltar</BackButton>
    </Container>
  );
}
