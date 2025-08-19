import {
  Container,
  BlockSong,
  PlayButton,
  NextButton,
  PreviousButton,
  ContainerPlayer,
  ContainerBar,
  ProgressContainer,
  ProgressFill,
  Time,
} from './style';
import React, { useState } from 'react';
import playIcon from '../../images/others/play.png';
import pauseIcon from '../../images/others/pause.png';
import nextButtonIcon from '../../images/others/next-button.png';
import previousButtonIcon from '../../images/others/previous.png';

import fundo from '../../images/songs/limp.jpg';
import fundo2 from '../../images/songs/slipknot.jpg';
import fundo3 from '../../images/songs/system.jpg';
import fundo4 from '../../images/songs/master.jpg';
import fundo5 from '../../images/songs/hardwired.jpg';
import fundo6 from '../../images/songs/sabrina.jpg';

export default function SongBar() {
  const [Playing, setPlaying] = useState(false);
  const [Next, setNext] = useState(false);
  const [Previous, setPrevious] = useState(false);
 

  const song = [
    {
      id: 1,
      title: "Take a Look Around",
      artist: "Limp Bizkit",
      duration: "03:57",
      cover: fundo,
    },
    {
      id: 2,
      title: "People=Shit",
      artist: "Slipknot",
      duration: "03:35",
      cover: fundo2,
    },
    {
      id: 3,
      title: "Mezmerize",
      artist: "System of a Down",
      duration: "04:00",
      cover: fundo3,
    },
    {
      id: 4,
      title: "Lepper Messiah",
      artist: "Metallica",
      duration: "05:00",
      cover: fundo4,
    },
    {
      id: 5,
      title: "Spit Out the Bone",
      artist: "Metallica",
      duration: "04:30",
      cover: fundo5,
    },
    {
      id: 3,
      title: "Espresso",
      artist: "Sabrina Carpenter",
      duration: "03:10",
      cover: fundo6,
    },
  ];

  return (
    <Container>
      <h2>Em alta</h2>

      <BlockSong>
        <img src={fundo} />
      </BlockSong>

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
        <Time>00:00</Time>
      </ContainerBar>

    </Container>
  );
}
