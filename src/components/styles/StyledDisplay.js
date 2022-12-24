import styled from 'styled-components';

export const StyledDisplay = styled.div `
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 3px solid #834;
    min-height: 30px;
    width: 100%;
    border-radius: 10px;
    color: ${props => (props.gameOver ? 'red' : '#aaa')};
    background: #000;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;

    @media (max-width: 768px) {
        padding: 10px;
        font-size: 0.6rem;
        max-width: 40%;
    }
`