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
  margin-bottom: 40px;
  border: none;
  border-radius: 7px;
`;
export const Submit = styled.input.attrs({ type: 'submit' })`
  background-color: chocolate;
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
export const P = styled.p`
  color: white;
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
