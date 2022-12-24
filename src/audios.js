import tetris from './audio/tetris.mp3'
import clear from './audio/clear.mp3'
import expl from './audio/boom.mp3'


export const audio = new Audio(tetris);
export const line = new Audio(clear);
export const boom = new Audio(expl);