import React, { useState } from 'react';
import { Container, P } from './style';
import { useNavigate } from 'react-router';

import "./style"
import { InputEmail } from './style';
import { InputPassword } from './style';
import { Submit } from './style';
import { Create } from './style';

export default function FormLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function Authenticate() {

        const user = {
            name: 'Gil Eduardo',
            email: email
        }
        navigate('/home', { state: { user: user } })
    }

    return (
        <Container>
            <P>E-mail</P>
            <InputEmail />
            <P>Senha</P>
            <InputPassword />
            <Submit value="Enviar" onClick={() => navigate('/')} />
            <Create value="Criar conta"/>
        </Container>
    )
} 