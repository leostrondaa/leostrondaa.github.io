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
import DiscoverCatalog from '../discovercatalog';

export default function SongBar({song}) {
  const [Playing, setPlaying] = useState(false);
  const [Next, setNext] = useState(false);
  const [Previous, setPrevious] = useState(false);


  return (
    <Container>
      <h2>Em alta</h2>

      <BlockSong>
        <img src={song?.cover} />
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
        <h5>{song?.title} - {song?.artist}</h5>
        <ProgressContainer>
          <ProgressFill></ProgressFill>
        </ProgressContainer>
        <Time>00:00</Time>
      </ContainerBar>

    </Container>
  );
}
