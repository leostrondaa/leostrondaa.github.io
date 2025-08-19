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
