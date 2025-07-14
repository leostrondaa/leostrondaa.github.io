import {
  Container,
  BlockSong,
  PlayButton,
  NextButton,
  PreviousButton,
  ContainerPlayer,
  InputProgress,
  BarraContainer,
  ContainerBar,
  ProgressContainer,
  ProgressFill,
} from './style';
import React, { useState } from 'react';
import playIcon from '../../images/play.png';
import pauseIcon from '../../images/pause.png';
import nextButtonIcon from '../../images/next-button.png';
import previousButtonIcon from '../../images/previous.png';

export default function SongBar() {
  const [Playing, setPlaying] = useState(false);
  const [Next, setNext] = useState(false);
  const [Previous, setPrevious] = useState(false);
  const [Song, setSong] = useState({
    name: 'My Own Summer',
    artist: 'Deftones',
    Url: 'url.mp3',
  });
  const songs = [{ name: 'Música 1', Url: 'musica1.mp3' }];

  return (
    <Container>
      <h2>Em alta</h2>
      <BlockSong />
      <ContainerPlayer>
        <PreviousButton onClick={() => setNext(!Next)}>
          <img src={previousButtonIcon} />
        </PreviousButton>
        <PlayButton onClick={() => setPlaying(!Playing)}>
          <img
            src={Playing ? pauseIcon : playIcon}
            alt={Playing ? 'Pausar' : 'Reproduzir'}
          />
        </PlayButton>
        <NextButton onClick={() => setNext(!Next)}>
          <img src={nextButtonIcon} />
        </NextButton>
      </ContainerPlayer>
      <ContainerBar>
        <h5>My Own Summer - Deftones</h5>
        <ProgressContainer>
          <ProgressFill></ProgressFill>
        </ProgressContainer>
      </ContainerBar>
    </Container>
  );
}
