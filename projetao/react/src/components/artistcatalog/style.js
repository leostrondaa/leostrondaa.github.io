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
  width: 170px;
  height: 200px; 
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  position: relative;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover; 
    border-radius: 50%;
    background-color: black;
    transition: all 0.2s ease-in-out;
  }

  h6 {
    opacity: 100;
    color: white;
    position: absolute;
    bottom: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    img {
      opacity: 50%;
    }
    h6{
      opacity: 50%;

    }
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
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
