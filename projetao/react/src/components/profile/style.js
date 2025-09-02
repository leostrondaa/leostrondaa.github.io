import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  max-height: 100vh; 
  background-color: #1c1c1c;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: black;
  margin: 5px;

  &:hover {
    opacity: 50%;
  }
`;
export const Submit = styled.input.attrs({ type: 'submit' })`
  width: 80%;
  height: 40px;
  border: none;
  border-radius: 10px;
  color: black;

  &:hover {
    opacity: 50%;
  }
`;

export const PerfilContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
    background-color: black;
    transition: all 0.1s ease-in-out;
    margin: 30px;
    cursor: pointer;

    &:hover {
      opacity: 50%;
      transition: all 0.2s ease-in-out;
    }
  }

  h2 {
    color: white;
    opacity: 50%;
    text-align: center;
    margin-bottom: 15px;
    }
    
    input{
       outline: none;
       width: 80%;
       height: 40px;
       margin-bottom: 20px;
       border: none;
       border-radius: 7px;
      }
    }
    `;
    
    export const P = styled.p`
    text-align: left; 
    width: 250px;    
    color: white;
    margin: 5px 0;
    `;


export const Title = styled.h2`
margin-top: 20px;
opacity: 50%;
color: white;
`;
