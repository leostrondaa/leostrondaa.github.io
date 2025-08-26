import {
    Button,
    Container,
    PerfilContainer,
    Title, P, Submit,
} from './style';
import { useNavigate } from 'react-router';
import { api } from '../../services/api';
import React, { useState } from 'react';
import fundo from '../../images/artists/chemical.jpg';
import { userStore } from '../../services/userStore';

export default function ProfileInf() {
    const navigate = useNavigate();
    const userDataOriginal = userStore.getUser();
    const [userData, setUserData] = useState(userDataOriginal);
    const [editarPerfil, setEditarPerfil] = useState(false);
    const [mostrar, setMostrar] = useState(true);
    console.log('userData:', userDataOriginal);
    if (!userDataOriginal) {
        return (
            <Container>
                <Title>Carregando...</Title>
            </Container>
        );
    }
    console.log('userData no ProfileInf:', userDataOriginal);

    const Update = async (e) => {
        e.preventDefault();

        const dadosParaAtualizar = {
            name: userData.name,
            password: userData.password
        };

        try {
            const response = await api.updateUser(userData.id, dadosParaAtualizar);
            userStore.setUser(response.data);
            
            alert('Dados atualizados com sucesso!');

            setEditarPerfil(false);
            setMostrar(true);

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
            {mostrar && (
                <>
                    <PerfilContainer>
                        <Title>Suas informações</Title>
                        <img src={fundo} alt="Foto de perfil"></img>
                        <h2>{userDataOriginal.name}</h2>
                        <h2>{userDataOriginal.email}</h2>
                    </PerfilContainer>
                    <Button onClick={() => { setEditarPerfil(true); setMostrar(false); }}>
                        Editar conta
                    </Button>
                    <Button>Excluir conta</Button>
                    <Button onClick={() => navigate(`/configs`)}>
                        Voltar
                    </Button>
                </>
            )}

            {editarPerfil && (
                <form onSubmit={Update}>
                    <PerfilContainer>
                        <Title>Editar informações</Title>
                        <img src={fundo} alt="Foto de perfil"></img>

                        <P>Nome</P>
                        <input
                            type="text"
                            placeholder="Digite seu novo nome"
                            value={userData.name}
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        />

                        <P>Email</P>
                        <input
                            type="password"
                            placeholder="Digite sua nova senha"
                            defaultValue={userData.password || ''}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        />
                        <Submit type="submit" value="Salvar Alterações" />
                        <Button type="button" onClick={() => {
                            setEditarPerfil(false);
                            setMostrar(true);
                            setUserData(userDataOriginal);
                        }}>
                            Cancelar
                        </Button>
                    </PerfilContainer>
                </form>
            )}
        </Container>
    );
}