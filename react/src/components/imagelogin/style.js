import styled from 'styled-components';
import fundo from '../../images/fundo.jpg';

export const Container = styled.div`
    
    background-image: url( ${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-left: 1px solid #CCC;

    @media (max-width: 800px) {
        display: none;
    }
`