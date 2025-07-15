import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  margin: 5px;
`;

export const ArtistContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

export const PerfilButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  background-color: transparent;

  h6 {
    opacity: 0;
    color: white;
  }

  &:hover {
    h6 {
      opacity: 100%;
      transition: opacity 0.5s ease-in-out;
    }

    img {
      height: 120px;
      width: 120px;
    }
  }

  img {
    height: 100px;
    width: 100px;
    background-size: cover;
    border-radius: 50%;
    background-color: black;
    transition: height 0.3s ease-in-out, width 0.3s ease-in-out;
  }
`;

export const Title = styled.h2`
  margin-top: 35px;
`;

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
