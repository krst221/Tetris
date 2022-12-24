import React, { useState, useEffect, useRef } from 'react';

import { createStage, checkCollision } from '../../gameHelpers';

import { StyledTetris, StyledTetrisWrapper } from '../styles/StyledTetris';

import { usePlayer } from '../../hooks/usePlayer';
import { useStage } from '../../hooks/useStage';
import { useInterval } from '../../hooks/useInterval';
import { useGameStatus } from '../../hooks/useGameStatus';

import Stage from '../Stage/Stage';
import Display from '../Display/Display';
import Button from '../Button/Button';
import { audio } from '../../audios';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const music = useRef(audio);
  const [playing, setPlaying] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  useEffect(() => {
    if (playing) {
      music.current.play();
      music.current.loop = true;
    }
    else {
      music.current.pause();
      music.current.currentTime = 0;
    }

  }, [playing])
  


  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }

  const startGame = () => {
    //Reset everything
    setStage(createStage());
    setDropTime(550);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(1);
    if(!playing) setPlaying(true);
    else music.current.currentTime = 0;
  }

  const drop = () => {
    // Increase the level when player has cleared 10 rows
    if (rows > (level) * 5) {
      setLevel(prev => prev + 1);
      music.current.playbackRate = music.current.playbackRate * 1.01;
      // Also increase the speed
      setDropTime(500 / (level) + 50);
    }
    if (!checkCollision(player, stage, { x: 0, y : 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      // Game Over
      if (player.pos.y < 1) {
        setPlaying(false);
        console.log('GAME OVER!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true})
    }
  }

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  }

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(500 / (level) + 50);
      }
    }
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  }

  const moveClick = (e, keyCode) => {
    if (!gameOver) {
      if (keyCode === 'l') {
        movePlayer(-1);
      } else if (keyCode === 'r') {
        movePlayer(1);
      } else if (keyCode === 'd') {
        dropPlayer();
        setDropTime(500 / (level) + 50)
      } else if (keyCode === 'u') {
        playerRotate(stage, 1);
      }
    }
  }

  useInterval(() => {
    drop();
  }, dropTime)

  return (
    <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e => move(e)} onKeyUp={keyUp}>  
      <StyledTetris>
      <Stage stage={stage} />
        <aside>
          {window.innerWidth <= 768 ?
            <div className='controls'>
              <Button callback={e => moveClick(e, 'l')} text={'LEFT'}/>
              <Button callback={e => moveClick(e, 'r')} text={'RIGHT'}/>
              <Button callback={e => moveClick(e, 'd')} text={'DOWN'}/>
              <Button callback={e => moveClick(e, 'u')} text={'ROTATE'}/>
            </div> 
          : ''}
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <Button callback={startGame} text={'Start Game'}/>
        </aside>
      </StyledTetris> 
    </StyledTetrisWrapper>
  )
}

export default Tetris;