import styled from 'styled-components';
import fundo from '../../images/fundo2.jpg';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-image: url(${fundo});
  width: 100%;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.div`
  background-color: ${(props) => props.color || 'orange'};
  padding: 30px;
`;

export const Title = styled.h1`
  color: white;
`;
export const Bio = styled.h4`
  color: grey;

`;