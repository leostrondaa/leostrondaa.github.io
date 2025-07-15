import styled from 'styled-components';

export const Container = styled.div`
  /* Cinza com 50% de transparência */
  background-color: rgba(30, 30, 30, 0.5);
  padding: 60px;
  border-radius: 10px;
`;
export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  border: none;
  border-radius: 7px;
`;
export const Submit = styled.input.attrs({ type: 'submit' })`
  background-color: orange;
  border: none;
  width: 40%;
  color: white;
  margin-top: 10px;
  padding: 9px 0px;
  border-radius: 7px;
  width: 100%;

  &:hover {
    background-color: chocolate;
  }
`;

export const P = styled.p`
  color: grey;
`;

export const BackButton = styled.button`
  color: white;
  background-color: rgba(100, 100, 100, 0.3);
  color: white;
  border: none;
  margin-top: 10px;
  padding: 9px 15px;
  width: 100%;
  border-radius: 7px;

  &:hover {
    background-color: dimgrey;
  }
`;

export const Title = styled.h1`
  color: white;
`;
