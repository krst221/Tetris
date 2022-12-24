import styled from 'styled-components';

export const StyledStage = styled.div `
    display: grid;
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    background: #222;

    @media (max-width: 560px) {
        grid-template-rows: repeat(
        ${props => props.height},
        calc(80vw / ${props => props.width})
        );
        width: 80vw;
    }
    @media (min-width: 560px) {
        grid-template-rows: repeat(
        ${props => props.height},
        calc(450px / ${props => props.width})
        );
        width: 450px;
    }
    @media (min-width: 768px) {
        grid-template-rows: repeat(
        ${props => props.height},
        calc(445px / ${props => props.width})
        );
        width: 445px;
    }

    
`