import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
  width: 100%;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.div`
  background-color: ${(props) => props.color || 'orange'};
  padding: 30px;
`;