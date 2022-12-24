import styled from 'styled-components';
import bgImage from '../../img/bg.jpg'

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        padding: 10px;
    }

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;

        @media (max-width: 768px) {
            max-width: 90vw;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
        }   

        div {
            @media (max-width: 768px) {
                width: 100%;
                display: flex;
                justify-content: space-around;
                gap: 5px;
                flex-wrap: wrap;
            }
        }

        .controls {
            gap: 0px;
            width: 100%;
        }
    }
`