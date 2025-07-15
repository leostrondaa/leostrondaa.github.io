import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
  width: 100%;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  background-color: rgba(100, 100, 100, 0.3);
  color: white;
  border: none;
  padding: 7px 60px;
  border-radius: 10px;
  margin: 5px;
  margin-bottom: 15px;

  &:hover {
    background-color: dimgrey;
  }
`;

export const Input = styled.input`
  display: flex;
  background-color: rgba(100, 100, 100, 0.3);
  color: white;
  outline: none;
  padding: 0px 10px;
  width: 75%;
  height: 30px;
  margin: 5px;
  border: none;
  border-radius: 10px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ButtonOther = styled.button`
  background-color: rgba(100, 100, 100, 0.3);
  color: white;
  border: none;
  padding: 7px 10px;
  border-radius: 10px;
  margin: 5px;
  margin-bottom: 15px;

  &:hover {
    background-color: dimgrey;
  }
`;

export const ButtonConfig = styled.button`
  background-color: rgba(100, 100, 100, 0.3);
  color: white;
  border: none;
  padding: 7px 17px;
  border-radius: 10px;
  position: absolute;
  margin-bottom: 15px;
  right: 25px;
  top: 75px;

  &:hover {
    background-color: dimgrey;
  }

  @media (max-width: 800px) {
    top: 125%;
  }
`;
