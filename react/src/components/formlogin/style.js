import styled from 'styled-components';

export const Container = styled.div`
    background-color: grey;
    padding: 60px;
    border-radius: 10px;
`
export const InputEmail = styled.input.attrs({ type: 'email' })`
    outline: none;
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
    border: none;
    border-radius: 7px;
`
export const InputPassword = styled.input.attrs({ type: 'email' })`
    outline: none;
    width: 100%;
    height: 30px;
    margin-bottom: 40px;
    border: none;
    border-radius: 7px;
`
export const Submit = styled.input.attrs({ type: 'submit' })`
    background-color: orange;
    border: none;
    width: 40%;
    color: black;
    padding: 6px 0px;
    border-radius: 7px;
    
    &:hover {
        background-color: chocolate;
    }
    `
export const Create = styled.input.attrs({ type: 'submit' })`
    background-color: transparent;
    color: black;
    border: none;
    padding: 6px 15px;
    margin-left: 25%;
    border-radius: 7px;

    &:hover {
        background-color: dimgrey;
    }
`
export const P = styled.p`
    color: black;
`