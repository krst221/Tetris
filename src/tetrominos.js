export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0' },
    I: { 
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],       
        ],
        color: '80, 227, 230',
    },
    J: { 
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
 
        ],
        color: '36, 95, 223',
    },
    L: { 
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']    
        ],
        color: '223, 173, 36',
    },
    M: { 
        shape: [
            ['M', 'M', 'M'],
            ['M', 0, 'M'],
            ['M', 0, 'M'], 
        ],
        color: '113, 173, 96',
    },
    O: { 
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '223, 217, 36',
    },
    S: { 
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48, 211, 56',
    },
    T: { 
        shape: [
            ['T', 'T', 'T'],
            [0, 'T', 0],
            [0, 'T', 0],   
        ],
        color: '132, 61, 198',
    },
    V: { 
        shape: [
            ['V', 0, 'V'],
            ['V', 0, 'V'],
            [0, 'V', 0], 
        ],
        color: '32, 146, 113',
    },
    X: { 
        shape: [
            [0, 'X', 0],
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],  
        ],
        color: '255, 255, 255',
    },
    Z: { 
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'], 
            [0, 0, 0],   
        ],
        color: '227, 78, 78',
    }
}

export const randomTetromino = () => {
    const tetrominos = 'IIJJJLLLMMMOOOSSSTTTVVXZZZ';
    const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}