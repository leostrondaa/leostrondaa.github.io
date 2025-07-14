import React, { useState } from 'react';
import { Container, P } from './style';
import { useNavigate } from 'react-router';

import './style';
import { Input } from './style';
import { Submit } from './style';

export default function FormReset() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <P>Informe seu email.</P>
      <Input required />
      <Submit value="Enviar codigo" onClick={() => navigate('/')} />
    </Container>
  );
}
