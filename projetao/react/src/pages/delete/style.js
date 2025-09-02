import styled from 'styled-components';
import fundo from '../../images/others/fundo2.jpg';

export const Container = styled.div`
  background-image: url(${fundo});
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const foto = styled.img`
  border-radius: 100%;
  width: 250px;
  height: 250px;
  background-image: url('https://uploads.dailydot.com/2025/04/tung-tung-sahur-meme-2.png?q=65&auto=format&w=800');
  background-size: cover;
`;
