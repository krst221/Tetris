import { useState, useEffect, useRef } from "react";
import { createStage } from "../gameHelpers";

import clear from '../audio/clear.mp3'
import expl from '../audio/boom.mp3'

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);
    const line = useRef(new Audio(clear));
    const boom = useRef(new Audio(expl));

    useEffect(() => {
        setRowsCleared(0);

        const sweepRows = newStage => 
          newStage.reduce((acc, row) => {
            if (row.findIndex(cell => cell[0] === 0) === -1 || row.findIndex(cell => cell[0] === 'X') !== -1) {
                if (player.tetromino[0][1] === 'X') boom.current.play();
                else line.current.play();
                setRowsCleared(prev => prev + 1);
                acc.unshift(new Array(newStage[0].length).fill([0, 'clear']));
                return acc;
            }
            acc.push(row);
            return acc;
        }, [])

        const updateStage = prevStage => {
            // First flush the stage
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
            );

            // Then draw the tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`
                        ]
                    }
                });
            });
            // Then check if we collided
            if (player.collided) {
                resetPlayer();
                if (player.tetromino[0][1] === 'X') console.log('BOOM!');
                return sweepRows(newStage);
            }
            return newStage;
        };

        setStage(prev => updateStage(prev))
    }, [player, resetPlayer])

    return [stage, setStage, rowsCleared];
}