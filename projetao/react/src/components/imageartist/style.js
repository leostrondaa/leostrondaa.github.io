import styled from 'styled-components';

export const Container = styled.div`
display: flex;

background-color: black;
  width: 100%;
  height: 100%; 
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    opacity: 70%;
  }

  h1{
    font-size: 100px;
    bottom: 0;
    position: relative;
    margin: 50px;
  }
  
  
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }`;