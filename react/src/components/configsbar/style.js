import styled from 'styled-components';
export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
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

export const Title = styled.h2`
  margin-top: 40px;
  color: grey;
`;