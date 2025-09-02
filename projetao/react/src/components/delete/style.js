import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #1c1c1c;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: black;
  margin-top: 30%;

  &:hover {
    opacity: 50%;
  }
`;
export const BackButton = styled.button`
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: black;
  margin-top: 10px;

  &:hover {
    opacity: 50%;
  }
`;

export const P = styled.p`
  text-align: left;
  width: 250px;
  color: white;
  margin: 5px 0;
`;

export const Title = styled.h2`
  padding: 30px;
  text-align: center;
  margin-top: 20px;
  opacity: 50%;
  color: white;
`;
