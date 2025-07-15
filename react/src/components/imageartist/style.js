import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
  width: 100%;

  img{
    width: 50%;
    height: 50%
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }`;