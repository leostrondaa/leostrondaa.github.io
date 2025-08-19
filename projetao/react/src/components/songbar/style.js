import styled from 'styled-components';
import fundo from '../../images/songs/deftones.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, background-color 0.2s, height 0.6s, width 0.2s;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const ContainerPlayer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const ContainerBar = styled.div`
  margin-top: 10px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const BlockSong = styled.div`
img{
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-size: cover;
}
`;
export const PlayButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px;
  background-color: white;
  border: none;
  font-size: 30px;
  box-shadow: 0px 0px 14px 0px black;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: chocolate;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-size: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: chocolate;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
export const PreviousButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  border: none;
  margin: 20px;
  font-size: 30px;

  &:hover {
    background-color: chocolate;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const ProgressFill = styled.div`
  width: 30%;
  height: 100%;
  background: black;
  border-radius: 10px;
  transition: width 0.2s ease;
`;

export const Time = styled.p`
  color: black;
  font-size: 17px;
`;
