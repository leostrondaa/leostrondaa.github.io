import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    min-width: 100%;
    min-height: 100vh;

    @media (max-width: 800px) {
        grid-template-columns: 1fr; 
    }
`;