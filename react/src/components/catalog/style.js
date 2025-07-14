import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  display: flex;
  margin: 5px;
  gap: 10px;
`;

export const ButtonSong = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-color: orange;
  border: none;

  display: flex;
  align-items: center;
  flex-direction: column;
  transition: transform 0.2s, background-color 0.2s, height 0.6s, width 0.2s;
  
  span {
    opacity: 0;
    color: black;
    max-width: 120px;
    white-space: normal;
    word-wrap: break-word;
    text-align: center;
    transition: opacity 0.3s;
  }
  h6{
    color: black;
  }

  &:hover {
    background-color: chocolate;
    height: 200px;
    width: 200px;

    span {
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

export const Title = styled.p`
  color: black;
  font-weight: bold;
  font-size: 17px;
  margin-left: 8px;
`;
export const SubTitle = styled.p`
  color: black;
  font-size: 17px;
  margin-left: 8px;
  opacity: 0;

  &:hover {
    opacity: 100;
  }
`;
export const Time = styled.p`
  color: white;
  font-size: 17px;
  margin-left: 8px;
`;
