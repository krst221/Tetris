import styled from 'styled-components'

export const StyledButton = styled.button`
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    min-height: 30px;
    width: 100%;
    border-radius: 10px;
    border: none;
    color: white;
    background: #834;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    outline: none;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 12px;
        width: 20%;
        font-size: 0.7rem;
    }
`