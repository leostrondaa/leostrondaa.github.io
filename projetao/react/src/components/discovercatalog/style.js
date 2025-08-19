import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  margin: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const ButtonSong = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-color: transparent;
  border: none;

  display: flex;
  align-items: center;
  flex-direction: column;
  transition: transform 0.2s, background-color 0.2s, height 0.6s, width 0.2s;

  span {
    opacity: 0;
    color: white;
    transition: opacity 0.3s ease-in-out;
  }

  h6 {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    color: black;
    
  }

  &:hover {
    background-color: chocolate;
    height: 200px;
    width: 100px;
    position: relative;

    span {
      opacity: 100%;
    }

    h6 {
      opacity: 100%;
    }

    img {
      height: 80px;
      width: 80px;
      background-size: cover;
      border-radius: 10px;
      background-color: black;
    }
  }

  img {
    height: 50px;
    width: 50px;
    background-size: cover;
    border-radius: 10px;
    background-color: black;

  }
`;

export const Title = styled.h2``;

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
